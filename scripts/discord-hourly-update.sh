#!/usr/bin/env bash
# discord-hourly-update.sh — Posts hourly CEO update to Discord
# Fetches Paperclip dashboard stats and posts a rich embed to the PayrollJamaica Discord channel.

set -euo pipefail

# ── Config ──────────────────────────────────────────────────────────────────
source ~/.claude/.env 2>/dev/null || true

DISCORD_BOT_TOKEN="${DISCORD_BOT_TOKEN:-MTQ3MDQ3MTk4OTE2MzU5Mzk5NA.GWSpSv.Vc6gpPfS5oLGVy7vWQcF-x2fIg-xTW-IAE-KUE}"
DISCORD_CHANNEL_ID="${DISCORD_CHANNEL_ID:-1470459355047395644}"
PAPERCLIP_API_URL="${PAPERCLIP_API_URL:-http://127.0.0.1:3100}"
PAPERCLIP_COMPANY_ID="${PAPERCLIP_COMPANY_ID:-9b177276-c3eb-4e69-b848-51e930e0028f}"

DISCORD_API="https://discord.com/api/v10"

# ── Helpers ─────────────────────────────────────────────────────────────────
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

days_until_march31() {
  local target
  local now
  if date --version >/dev/null 2>&1; then
    # GNU date
    target=$(date -d "2026-03-31" +%s)
    now=$(date +%s)
  else
    # macOS/BSD date
    target=$(date -j -f "%Y-%m-%d" "2026-03-31" +%s 2>/dev/null || echo 0)
    now=$(date +%s)
  fi

  if [ "$target" -eq 0 ]; then
    echo "??"
    return
  fi

  local diff=$(( (target - now) / 86400 ))
  if [ "$diff" -lt 0 ]; then
    echo "PAST"
  else
    echo "$diff"
  fi
}

# ── Fetch Paperclip Dashboard ──────────────────────────────────────────────
log "Fetching Paperclip dashboard stats..."

DASHBOARD_RAW=$(curl -sf --max-time 15 \
  "${PAPERCLIP_API_URL}/api/companies/${PAPERCLIP_COMPANY_ID}/dashboard" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${PAPERCLIP_API_KEY:-}" 2>/dev/null || echo "")

# ── Fetch Recent Tasks ────────────────────────────────────────────────────
log "Fetching recent completed tasks..."

TASKS_RAW=$(curl -sf --max-time 15 \
  "${PAPERCLIP_API_URL}/api/companies/${PAPERCLIP_COMPANY_ID}/tasks?status=done&limit=5" \
  -H "Content-Type: application/json" 2>/dev/null || echo "")

# ── Parse Stats ────────────────────────────────────────────────────────────
DAYS_LEFT=$(days_until_march31)
TIMESTAMP=$(date -u '+%Y-%m-%dT%H:%M:%SZ')
HOUR=$(date '+%H:%M %Z')

# Try to parse dashboard JSON with basic tools (no jq dependency required, but use if available)
if command -v jq &>/dev/null && [ -n "$DASHBOARD_RAW" ]; then
  TASKS_OPEN=$(echo "$DASHBOARD_RAW" | jq -r '.tasks.open // "N/A"' 2>/dev/null || echo "N/A")
  TASKS_DONE=$(echo "$DASHBOARD_RAW" | jq -r '.tasks.done // "N/A"' 2>/dev/null || echo "N/A")
  TASKS_BLOCKED=$(echo "$DASHBOARD_RAW" | jq -r '.tasks.blocked // "N/A"' 2>/dev/null || echo "N/A")
  TOTAL_SPEND=$(echo "$DASHBOARD_RAW" | jq -r '(.costs.monthSpendCents // 0) / 100 | tostring | "\\(.)" ' 2>/dev/null || echo "N/A")
  ACTIVE_AGENTS=$(echo "$DASHBOARD_RAW" | jq -r '.agents.active // "N/A"' 2>/dev/null || echo "N/A")
else
  TASKS_OPEN="N/A"
  TASKS_DONE="N/A"
  TASKS_BLOCKED="N/A"
  TOTAL_SPEND="N/A"
  ACTIVE_AGENTS="N/A"
  log "Warning: Dashboard data unavailable (API returned empty or jq not installed)"
fi

# Parse recent completed tasks
RECENT_TASKS_TEXT=""
if command -v jq &>/dev/null && [ -n "$TASKS_RAW" ]; then
  RECENT_TASKS_TEXT=$(echo "$TASKS_RAW" | jq -r '
    (if type == "array" then . else (.tasks // .data // []) end)
    | .[0:5]
    | map("- **\(.key // .id // "task")**: \(.title // .name // "Untitled")")
    | join("\n")
  ' 2>/dev/null || echo "")
fi

if [ -z "$RECENT_TASKS_TEXT" ]; then
  RECENT_TASKS_TEXT="- No recent completed tasks available"
fi

# ── Determine status color ────────────────────────────────────────────────
if [ "$DAYS_LEFT" = "PAST" ]; then
  COLOR=15158332  # Red
  URGENCY="DEADLINE PASSED"
elif [ "$DAYS_LEFT" != "??" ] && [ "$DAYS_LEFT" -le 7 ]; then
  COLOR=15105570  # Orange
  URGENCY="CRITICAL - Final stretch!"
elif [ "$DAYS_LEFT" != "??" ] && [ "$DAYS_LEFT" -le 14 ]; then
  COLOR=16776960  # Yellow
  URGENCY="High priority"
else
  COLOR=3066993   # Green
  URGENCY="On track"
fi

# ── Build Discord Embed ──────────────────────────────────────────────────
# Escape special chars for JSON
json_escape() {
  local s="$1"
  s="${s//\\/\\\\}"
  s="${s//\"/\\\"}"
  s="${s//$'\n'/\\n}"
  s="${s//$'\r'/}"
  s="${s//$'\t'/\\t}"
  echo "$s"
}

RECENT_ESCAPED=$(json_escape "$RECENT_TASKS_TEXT")

PAYLOAD=$(cat <<ENDJSON
{
  "embeds": [
    {
      "title": "PayrollJamaica CEO Hourly Update",
      "description": "Automated status report — ${HOUR}",
      "color": ${COLOR},
      "fields": [
        {
          "name": "Days to March 31",
          "value": "**${DAYS_LEFT}** days remaining\n${URGENCY}",
          "inline": true
        },
        {
          "name": "Task Stats",
          "value": "Open: **${TASKS_OPEN}**\nDone: **${TASKS_DONE}**\nBlocked: **${TASKS_BLOCKED}**",
          "inline": true
        },
        {
          "name": "Agent Spend",
          "value": "Total: **\$${TOTAL_SPEND}**\nActive agents: **${ACTIVE_AGENTS}**",
          "inline": true
        },
        {
          "name": "Recently Completed",
          "value": "${RECENT_ESCAPED}",
          "inline": false
        },
        {
          "name": "Key Updates",
          "value": "- Hourly heartbeat running\n- Dashboard: [paperclip.dev](https://app.paperclip.dev)\n- Website: [payrolljamaica.com](https://payrolljamaica.com)",
          "inline": false
        }
      ],
      "footer": {
        "text": "PayrollJamaica Ops Bot"
      },
      "timestamp": "${TIMESTAMP}"
    }
  ]
}
ENDJSON
)

# ── Post to Discord ────────────────────────────────────────────────────────
log "Posting to Discord channel ${DISCORD_CHANNEL_ID}..."

HTTP_CODE=$(curl -s --max-time 15 -o /tmp/discord-response.json -w "%{http_code}" \
  -X POST \
  "${DISCORD_API}/channels/${DISCORD_CHANNEL_ID}/messages" \
  -H "Authorization: Bot ${DISCORD_BOT_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD")

if [ "$HTTP_CODE" -ge 200 ] && [ "$HTTP_CODE" -lt 300 ]; then
  log "Discord message posted successfully (HTTP ${HTTP_CODE})"
else
  log "ERROR: Discord API returned HTTP ${HTTP_CODE}"
  cat /tmp/discord-response.json 2>/dev/null
  exit 1
fi

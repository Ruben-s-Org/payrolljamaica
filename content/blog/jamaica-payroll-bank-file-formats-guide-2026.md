---
title: "Jamaica Payroll Bank File Formats Guide 2026: NCB, Scotiabank, JN Bank, Sagicor, FirstCaribbean"
description: "Complete guide to bank payment file formats for Jamaica payroll in 2026. Covers ACH, direct deposit file specifications for NCB, Scotiabank, JN Bank, Sagicor, and FirstCaribbean — and how PayrollJamaica generates them automatically."
date: "2026-03-12"
author: "PayrollJamaica Team"
tags: ["Jamaica payroll bank file", "NCB payroll file format", "Scotiabank direct deposit Jamaica", "JN Bank salary upload", "Jamaica ACH payroll 2026"]
canonical: "https://payrolljamaica.com/blog/jamaica-payroll-bank-file-formats-guide-2026"
---

# Jamaica Payroll Bank File Formats Guide 2026: NCB, Scotiabank, JN Bank, Sagicor, FirstCaribbean

Every Jamaican employer running payroll faces the same problem at the end of each pay cycle: getting the money into employees' bank accounts. For businesses with more than a handful of employees, processing individual bank transfers one by one is slow, error-prone, and operationally unsustainable.

The solution is bulk salary payment — uploading a formatted file to your bank's business banking platform that instructs the bank to pay every employee in a single batch. The problem is that every bank in Jamaica uses a different file format, with different column orders, different delimiters, different header requirements, and different validation rules. Get one field wrong and the entire file is rejected.

This guide covers the file formats used by Jamaica's major banks for payroll salary payments in 2026, and explains how [PayrollJamaica](/payroll-software-jamaica) generates these files automatically.

---

## Why Bank File Formats Matter

If you are paying 5 employees, you can probably manage individual transfers. At 15 employees, it becomes tedious. At 50 or more, manual transfers are a compliance and operational risk:

- **Transposition errors** — typing a wrong digit in an account number sends money to the wrong person
- **Missed payments** — skipping an employee in a long list means someone does not get paid on time
- **Timing delays** — processing 50 individual transfers takes time, and some employees get paid hours or days after others
- **No audit trail** — individual transfers do not create the same structured record as a batch payment file

Bulk salary files solve all of these problems. You upload one file, the bank processes all payments simultaneously, and you have a structured record of exactly what was paid to whom.

---

## The ACH System in Jamaica

Jamaica's Automated Clearing House (ACH) system, operated by the Bank of Jamaica (BOJ), enables electronic fund transfers between banks. When you upload a salary file to your bank, your bank processes it through the ACH system if employees hold accounts at different banks.

**Same-bank payments** (where your company account and the employee's account are at the same bank) are processed internally and typically settle faster — often same-day.

**Cross-bank payments** go through the ACH and may take 1-2 business days to settle. This means if your payday is Friday, you should upload the salary file by Wednesday to ensure all employees receive funds on time.

Understanding this distinction is important for payroll timing. [PayrollJamaica](/payroll-software-jamaica) flags cross-bank payments in the generated file so you know which employees may experience a delay.

---

## NCB (National Commercial Bank) File Format

NCB's business banking platform accepts bulk salary files in CSV format. The key specifications:

**File type:** CSV (comma-separated values)
**Encoding:** UTF-8 or ASCII

**Required fields (typical column order):**

| Column | Field | Format |
|---|---|---|
| 1 | Beneficiary Name | Text (employee full name) |
| 2 | Bank Code | 3-digit bank routing code |
| 3 | Branch Code | 3-digit branch transit number |
| 4 | Account Number | Employee account number |
| 5 | Account Type | S (Savings) or C (Chequing) |
| 6 | Amount | Numeric, two decimal places |
| 7 | Reference | Text (payroll reference, e.g., "MAR2026 SALARY") |

**Important notes for NCB:**
- The file must not contain a header row in some upload modes — check your specific NCB business banking configuration
- Amounts must be positive values with exactly two decimal places
- The reference field appears on the employee's bank statement — use clear payroll identifiers
- NCB validates account numbers against their internal records; mismatched names and account numbers will cause individual payment rejections

---

## Scotiabank Jamaica File Format

Scotiabank's corporate banking platform uses a fixed-width or CSV format depending on the upload channel.

**File type:** CSV or fixed-width text
**Encoding:** ASCII

**Required fields:**

| Column | Field | Format |
|---|---|---|
| 1 | Employee ID | Alphanumeric reference |
| 2 | Account Number | Employee bank account |
| 3 | Transit Number | Branch transit code |
| 4 | Institution Number | Bank institution ID |
| 5 | Amount | Numeric, two decimal places |
| 6 | Employee Name | Text |
| 7 | Payment Description | Text reference |

**Important notes for Scotiabank:**
- Scotiabank often requires a batch header record with the total payment amount and number of transactions
- The sum of all individual payment amounts must match the batch header total exactly — any discrepancy causes the entire file to be rejected
- Cross-bank payments require the full routing information (institution + transit + account)

---

## JN Bank File Format

JN Bank's business banking platform accepts salary upload files with the following structure:

**File type:** CSV
**Encoding:** UTF-8

**Required fields:**

| Column | Field | Format |
|---|---|---|
| 1 | Payee Name | Employee full name |
| 2 | Account Number | JN Bank account number |
| 3 | Amount | Numeric with two decimal places |
| 4 | Narration | Payment description |
| 5 | Bank Code | Routing code (for cross-bank payments) |
| 6 | Branch Code | Branch identifier |

**Important notes for JN Bank:**
- JN Bank's format is relatively straightforward for same-bank payments
- Cross-bank payments require additional routing information
- The narration field is limited in character length — keep payroll references concise

---

## Sagicor Bank File Format

Sagicor Bank (formerly RBC Royal Bank Jamaica) uses a structured CSV format:

**File type:** CSV
**Encoding:** UTF-8 or ASCII

**Required fields:**

| Column | Field | Format |
|---|---|---|
| 1 | Beneficiary Account | Employee account number |
| 2 | Beneficiary Name | Employee full name |
| 3 | Amount | Numeric, two decimal places |
| 4 | Bank Code | Institution routing code |
| 5 | Branch Code | Branch transit number |
| 6 | Payment Reference | Payroll period reference |
| 7 | Account Type | Savings/Chequing indicator |

**Important notes for Sagicor:**
- Sagicor's platform may require pre-registration of beneficiary accounts before bulk payments can be processed
- First-time payments to new employees may require additional verification steps
- The payment reference should clearly identify the payroll period for reconciliation

---

## FirstCaribbean International Bank (CIBC) File Format

FirstCaribbean's corporate banking platform uses a structured file format:

**File type:** CSV or Excel (XLS/XLSX)
**Encoding:** UTF-8

**Required fields:**

| Column | Field | Format |
|---|---|---|
| 1 | Account Number | Employee bank account |
| 2 | Account Name | Employee full name |
| 3 | Currency | JMD |
| 4 | Amount | Numeric, two decimal places |
| 5 | Value Date | Payment date (YYYY-MM-DD) |
| 6 | Narrative | Payment description |
| 7 | Bank/Branch | Routing information for cross-bank |

**Important notes for FirstCaribbean:**
- FirstCaribbean is one of the few Jamaican banks that accepts Excel format in addition to CSV
- The value date field controls when the payment is processed — ensure this matches your intended pay date
- Currency must be specified even for JMD-only payments

---

## Common Problems With Bank File Generation

Even experienced payroll administrators encounter recurring issues with bank files:

**Formatting errors.** An extra space in an account number, a missing decimal point, or a wrong delimiter can cause the entire file to be rejected. Banks do not partially process files — if the format is wrong, nothing goes through.

**Stale account information.** Employees change banks, close accounts, or update account numbers. If your payroll records are not current, payments bounce — and the employee does not get paid on time.

**Mixed-bank complexity.** When your employees bank with five different institutions, you may need to generate separate files for same-bank and cross-bank payments, or ensure your file includes the correct routing information for every bank.

**Reconciliation gaps.** Without a clear reference field in the bank file, matching bank statement entries to specific employees and pay periods becomes a manual exercise at month-end.

---

## How PayrollJamaica Generates Bank Files Automatically

This is where payroll software earns its value. [PayrollJamaica](/payroll-software-jamaica) eliminates the entire bank file generation problem:

**Automatic format generation.** After each payroll run, PayrollJamaica generates bank payment files in the correct format for your bank. Select NCB, Scotiabank, JN Bank, Sagicor, or FirstCaribbean — the system formats the file with the right columns, delimiters, headers, and encoding.

**Multi-bank support.** If your employees bank with different institutions, PayrollJamaica handles the routing. You get one file (or multiple files, depending on your bank's requirements) that covers all employees regardless of where they bank.

**Employee bank details management.** Store employee bank account information securely within the system. When an employee changes banks, update it once and every future payroll file reflects the change.

**Pre-upload validation.** Before you download the file, PayrollJamaica validates that all account numbers are in the expected format, all amounts are positive and correctly calculated, and all required fields are populated. Errors are flagged before you upload — not after your bank rejects the file.

**Reconciliation-ready.** Every bank file includes a clear payroll reference and a corresponding reconciliation report that matches each payment to the employee, pay period, and amount.

**[Try PayrollJamaica — generate your bank file in minutes →](/payroll-software-jamaica)**

---

## Best Practices for Payroll Bank Payments in Jamaica

1. **Upload files at least 2 business days before payday** to account for cross-bank ACH processing times
2. **Verify employee bank details** when onboarding and periodically thereafter — a voided cheque or bank letter is the standard verification
3. **Use consistent payment references** (e.g., "SALARY MAR 2026") so bank statements are clean for both you and your employees
4. **Keep a copy of every uploaded file** as part of your payroll records — this is essential for audit preparation
5. **Reconcile bank debits against your payroll report** after each pay cycle to confirm all payments were processed
6. **Use [PayrollJamaica](/payroll-software-jamaica)** to automate file generation and eliminate manual formatting errors

---

## Key Takeaways

- Every major Jamaican bank uses a different file format for bulk salary payments
- Format errors cause entire files to be rejected — manual file creation is high-risk
- Cross-bank ACH payments take 1-2 business days; plan your upload timing accordingly
- [PayrollJamaica](/payroll-software-jamaica) generates correctly formatted bank files for NCB, Scotiabank, JN Bank, Sagicor, and FirstCaribbean automatically after every payroll run
- Eliminate manual formatting, reduce payment errors, and pay your entire workforce in a single upload

Stop wrestling with CSV columns and bank format specifications. **[Start with PayrollJamaica today →](/payroll-software-jamaica)**

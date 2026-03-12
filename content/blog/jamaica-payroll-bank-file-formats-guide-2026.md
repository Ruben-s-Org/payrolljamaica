---
title: "Jamaica Payroll Bank File Formats Guide 2026: NCB, Scotiabank, JN Bank and More"
description: "Complete guide to bank payment file formats for Jamaica payroll in 2026. Covers ACH file formats for NCB, Scotiabank, JN Bank, Sagicor, and FirstCaribbean. Learn why automated bank file generation eliminates errors and speeds up salary payments."
date: "2026-03-12"
author: "PayrollJamaica Team"
tags: ["Jamaica payroll bank file", "ACH payment file Jamaica", "NCB payroll file format", "Scotiabank salary upload", "JN Bank payment file", "payroll bank transfer Jamaica 2026"]
canonical: "https://payrolljamaica.com/blog/jamaica-payroll-bank-file-formats-guide-2026"
---

# Jamaica Payroll Bank File Formats Guide 2026: NCB, Scotiabank, JN Bank and More

Paying employees by bank transfer is the standard for Jamaican businesses — cheques are slow, cash is risky, and direct deposit is what employees expect. But between calculating net pay and the money landing in employee bank accounts sits a step that causes disproportionate headaches: generating the bank payment file.

Every Jamaican commercial bank has its own file format for bulk salary uploads. Get the format wrong — a misplaced column, wrong delimiter, invalid account number — and the entire payment batch is rejected. Your employees do not get paid on time, your HR department fields angry calls, and you scramble to fix and resubmit.

This guide covers the bank payment file formats used by Jamaica's major commercial banks in 2026, explains what each bank expects, and shows how automated file generation eliminates the most common payroll payment errors.

---

## Why Bank Files Matter in Jamaica Payroll

Most Jamaican employers with more than a handful of employees use **bulk payment files** (also called ACH files, salary upload files, or direct credit files) to pay salaries. Instead of initiating individual bank transfers for each employee, you upload a single file to your bank's business banking portal that contains all payment instructions.

The bank processes the file and credits each employee's account — typically same-day or next-business-day for domestic transfers.

The benefits are clear:

- **Speed** — one upload pays your entire workforce
- **Accuracy** — the file contains exact amounts, reducing manual transfer errors
- **Audit trail** — the bank provides a confirmation report for each batch
- **Cost** — bulk transfers are cheaper per transaction than individual payments

The challenge is that each bank has its own file specification. If you bank with NCB but some employees are at Scotiabank and others at JN Bank, you still upload one file to NCB — the Automated Clearing House (ACH) system handles inter-bank routing. But the file format your bank requires is specific to that bank.

**[Let PayrollJamaica generate your bank files automatically →](/payroll-software-jamaica)**

---

## Understanding ACH in Jamaica

Jamaica's ACH system is operated by the **Jamaica Central Securities Depository (JCSD)** under the supervision of the Bank of Jamaica. The ACH enables electronic funds transfers between accounts at different financial institutions.

When you upload a salary payment file to your bank, payments to employees at the same bank are processed internally. Payments to employees at other banks are routed through the ACH. The standard settlement cycle is **T+0 for same-bank** and **T+1 for inter-bank** transfers, though some banks offer same-day ACH for files submitted before the morning cutoff.

For payroll purposes, this means you should submit your bank file **at least one business day before payday** to ensure all employees — regardless of which bank they use — receive their salary on time.

---

## Bank File Formats by Institution

### National Commercial Bank (NCB)

NCB is Jamaica's largest commercial bank and handles a significant share of corporate payroll accounts. NCB's business banking platform (NCB Business Online) accepts bulk payment files in a **CSV (comma-separated values)** format.

**NCB salary file specifications:**

| Field | Description | Format |
|---|---|---|
| Beneficiary Account Number | Employee's bank account number | Numeric, left-padded with zeros |
| Beneficiary Name | Employee's name as registered with bank | Text, max 40 characters |
| Amount | Net pay amount | Numeric, 2 decimal places |
| Bank Code | Receiving bank's ACH code | Numeric (NCB = specific code) |
| Branch Code | Receiving branch transit number | Numeric |
| Reference | Payment reference (e.g., "SALARY MAR 2026") | Text, max 20 characters |

NCB requires that the total of all individual amounts matches the **batch total** specified in the file header. A mismatch of even one cent causes the entire batch to reject.

**Common NCB file errors:**
- Account numbers with incorrect digit count (NCB accounts are typically 7-10 digits)
- Branch code mismatches when employees have transferred branches
- Special characters in beneficiary names (use only alphanumeric characters and spaces)

### Scotiabank Jamaica

Scotiabank's business platform (Scotia Online for Business) accepts salary files in a **fixed-width text format** as well as CSV, depending on the upload channel used.

**Scotiabank salary file specifications:**

| Field | Description | Format |
|---|---|---|
| Transaction Type | Credit indicator | Fixed code |
| Account Number | Employee's Scotiabank account or external account | Numeric |
| Amount | Net pay in cents (no decimal point) | Numeric |
| Beneficiary Name | Employee name | Text, max 30 characters |
| Bank/Branch | Receiving institution and branch | Numeric codes |
| Narrative | Payment description | Text, max 18 characters |

Scotiabank's format notably requires amounts in **cents** (multiply dollars by 100, no decimal point). This is a frequent source of errors when files are prepared manually — an employee expecting $85,432.50 receives $854.33 because the preparer forgot to convert.

### JN Bank (Jamaica National)

JN Bank's business banking portal accepts bulk salary files in **CSV format** with a structure similar to NCB but with some differences in field ordering and required fields.

**JN Bank salary file specifications:**

| Field | Description | Format |
|---|---|---|
| Employee ID | Internal employee reference | Text |
| Account Number | Employee's bank account | Numeric |
| Account Type | Savings or Chequing indicator | Code (S/C) |
| Bank Code | Receiving bank ACH code | Numeric |
| Branch Code | Receiving branch | Numeric |
| Amount | Net pay amount | Numeric, 2 decimal places |
| Employee Name | Full name | Text |

JN Bank requires the **Account Type** field, which some other banks infer automatically. If this field is wrong, the payment may be posted to the wrong account or rejected.

### Sagicor Bank

Sagicor's corporate banking platform accepts salary uploads in **CSV format** with an emphasis on validation fields.

**Key Sagicor requirements:**
- Each record must include both the originating (employer) account number and the beneficiary account number
- A batch sequence number is required for each file
- The file must include a header record with the total count of transactions and total dollar amount
- Amount format uses 2 decimal places

Sagicor performs real-time validation on upload and provides immediate feedback on rejected records — a useful feature that lets you correct errors before the payment cutoff.

### FirstCaribbean International Bank (CIBC)

FirstCaribbean accepts bulk payment files in both **CSV and fixed-width formats**. Their corporate banking platform provides a template that can be downloaded and populated.

**Key FirstCaribbean requirements:**
- Beneficiary account numbers must include the full branch and account number
- Inter-bank payments require the receiving bank's SWIFT code in addition to the ACH code
- Payment value date must be specified (the date you want funds to reach employees)
- A control record with hash totals is required at the end of the file

---

## The Hidden Complexity: Multi-Bank Payrolls

Most Jamaican companies have employees banking at multiple institutions. You might bank with NCB, but your employees have accounts at NCB, Scotiabank, JN Bank, and Sagicor. This does not mean you need to create separate files for each bank — you create one file in your bank's format, and the ACH handles inter-bank routing.

However, you need to include the correct **bank codes and branch codes** for each employee's receiving institution. These codes are standardised by the Bank of Jamaica but are not always intuitive. Common bank codes change when institutions merge or rebrand, and branch codes shift when branches close or consolidate.

Maintaining an accurate database of employee banking details — and keeping it updated when employees change banks — is a critical payroll administration task that many employers underestimate.

**[Calculate net pay for every employee instantly with the PayrollJamaica calculator →](/calculator)**

---

## Common Bank File Errors and How to Avoid Them

### 1. Incorrect Account Numbers

The most common reason for rejected payments. Account numbers change when employees open new accounts, and some banks have different formats (7 digits vs. 10 digits). Always validate account numbers when employees are onboarded or change their banking details.

### 2. Amount Formatting Errors

Some banks want dollars with two decimal places (85432.50). Others want cents without a decimal (8543250). Mixing these up means employees receive dramatically wrong amounts. This is the strongest argument for automated file generation — the system knows each bank's format.

### 3. Batch Total Mismatches

The header or control record must contain a total that exactly matches the sum of all individual payments. Manual preparation with spreadsheets is prone to rounding errors that cause mismatches.

### 4. Stale Banking Details

Employees who change banks or accounts without notifying payroll cause rejected payments. Implement a policy requiring employees to submit bank change requests in writing, with a new bank letter or voided cheque, at least one pay cycle before the change takes effect.

### 5. Missing or Incorrect Bank/Branch Codes

Using an outdated branch code — perhaps from a branch that has since closed — causes the payment to bounce. Keep your bank code reference table current.

### 6. Character Encoding Issues

Some bank portals reject files with special characters, Unicode characters, or smart quotes. Beneficiary names should use only standard ASCII characters.

---

## Why Automated Bank File Generation Matters

Preparing bank files manually — even using Excel templates — is the payroll equivalent of hand-coding HTML in 2026. It works until it does not, and when it fails, employees do not get paid.

The risks of manual preparation:

- **Human error in data entry** — transposing digits in account numbers, wrong amounts
- **Format inconsistencies** — a stray comma, wrong delimiter, missing header record
- **Version control problems** — using last month's template without updating employee changes
- **Time cost** — a payroll administrator spending hours formatting files instead of doing higher-value work

Automated bank file generation eliminates all of these risks. The payroll system already has the employee's verified banking details and their calculated net pay. It generates the file in the exact format the bank requires, with correct headers, control totals, and field formats — every time.

---

## How PayrollJamaica Generates Bank Files

[PayrollJamaica](/payroll-software-jamaica) includes built-in bank file generation for all major Jamaican commercial banks. Here is how it works:

1. **Run payroll** — enter hours, calculate pay, review and approve
2. **Click "Generate Bank File"** — select your bank (NCB, Scotiabank, JN Bank, Sagicor, or FirstCaribbean)
3. **Download the file** — the system generates the file in the exact format your bank requires
4. **Upload to your bank portal** — log in to your business banking and upload the file

That is it. No spreadsheet formatting. No worrying about delimiter types or amount formats. No batch total calculations. PayrollJamaica handles every detail of the file specification.

**Key features:**

- **Multi-bank support** — one payroll run generates the correct file regardless of which banks your employees use
- **Automatic bank code lookup** — employee bank and branch codes are validated against the current Jamaica ACH directory
- **Error prevention** — the system validates account numbers, flags missing banking details, and ensures batch totals balance before generating the file
- **File history** — every generated file is stored with a timestamp, so you have a complete record for audit purposes
- **Format updates** — when banks change their file specifications (which they do), PayrollJamaica updates the templates so you do not have to

**[Start your free trial at PayrollJamaica.com →](/payroll-software-jamaica)**

---

## Key Takeaways

1. Every Jamaican commercial bank has its own bulk payment file format — there is no universal standard
2. Common formats include CSV and fixed-width text, but field ordering, amount formats, and validation requirements differ by bank
3. The Jamaica ACH system handles inter-bank routing, so you only need to upload one file to your own bank
4. Manual bank file preparation is a leading cause of delayed salary payments and rejected batches
5. Automated bank file generation from your payroll system eliminates formatting errors, validates data, and saves hours every pay cycle
6. [PayrollJamaica](/payroll-software-jamaica) generates bank-ready payment files for NCB, Scotiabank, JN Bank, Sagicor, and FirstCaribbean — correctly formatted, every time

Payroll accuracy does not end at calculating the right net pay. It extends to getting that money into the right bank accounts, on time, without errors. Automated bank file generation is the final link in that chain.

import { Section } from "@/components/ui/section";
import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main className="flex-1">
        <Section className="py-16">
          <div className="max-w-container mx-auto px-4 prose prose-invert">
            <h1>Privacy Policy</h1>
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

            <p>
              This Privacy Policy explains how Payroll Jamaica ("Payroll Jamaica", "we", "our", or "us") collects,
              uses, discloses, and safeguards information in connection with our website, applications, and related
              products and services (the "Services"). This Policy is intended to comply with the Jamaica Data
              Protection Act, 2020 (the "JDPA"), the Electronic Transactions Act, the Cybercrimes Act, and other
              applicable Jamaican laws and regulations, as well as generally accepted industry privacy and security
              practices.
            </p>

            <h2>1. Scope and Relationship of the Parties</h2>
            <p>
              This Policy applies to information we process about visitors, customers, and users of the Services.
              Where we determine the purposes and means of processing (e.g., account management, billing, support,
              service monitoring), we act as a <strong>data controller</strong>. Where we process personal data strictly
              on your documented instructions for payroll processing and related outputs, we act as a <strong>data
              processor</strong>. When acting as a processor, you (or your organization) are the data controller and
              remain responsible for providing lawful instructions and fulfilling data subject rights.
            </p>

            <h2>2. Definitions</h2>
            <ul>
              <li><strong>Personal Data:</strong> Information relating to an identified or identifiable natural person, as defined under the JDPA.</li>
              <li><strong>Processing:</strong> Any operation performed on personal data, including collection, storage, use, disclosure, or deletion.</li>
              <li><strong>Controller / Processor:</strong> Ascribed the meanings under the JDPA.</li>
            </ul>

            <h2>3. Categories of Personal Data We Process</h2>
            <ul>
              <li><strong>Account and Profile Data:</strong> Name, email, phone, company name, role, authentication identifiers, preferences.</li>
              <li><strong>Billing and Transaction Data:</strong> Business address, tax identifiers, payment method tokens, invoices, and receipts.</li>
              <li><strong>Payroll Data (Customer Content):</strong> Employee names, contact details, TRN and other statutory identifiers, job titles, compensation, allowances, deductions, leave, time/attendance, benefits, payslip details, and statutory return data that you upload or generate via the Services.</li>
              <li><strong>Usage, Device and Log Data:</strong> IP address, device/browser type, settings, timestamps, pages viewed, referrers, diagnostic logs, crash reports, performance metrics.</li>
              <li><strong>Support Communications:</strong> Content of queries, attachments, and associated metadata.</li>
              <li><strong>Marketing and Website Data:</strong> Cookie identifiers, analytics events, campaign parameters, and metadata as further described below.</li>
            </ul>

            <h2>4. Lawful Bases for Processing</h2>
            <p>
              We process personal data on the following legal bases, as applicable under the JDPA and other laws:
            </p>
            <ul>
              <li><strong>Contract:</strong> To provide and operate the Services you requested, including payroll calculations, reports, and statutory outputs.</li>
              <li><strong>Legitimate Interests:</strong> To secure, maintain, and improve the Services; prevent fraud and misuse; and communicate necessary service information.</li>
              <li><strong>Legal Obligations:</strong> To comply with applicable Jamaican laws and assist customers with statutory filings where configured.</li>
              <li><strong>Consent:</strong> Where required (e.g., certain marketing or optional cookies). You may withdraw consent at any time, without affecting prior lawful processing.</li>
            </ul>

            <h2>5. Purposes of Processing</h2>
            <ul>
              <li>Provision, configuration, and maintenance of the Services.</li>
              <li>Payroll processing, payslip generation, and preparation of statutory remittances per your configuration.</li>
              <li>Security, fraud prevention, abuse detection, incident response, and audit logging.</li>
              <li>Customer support and service communications, including notices about changes, security, and features.</li>
              <li>Product analytics, quality assurance, and service improvement.</li>
              <li>Legal and regulatory compliance, dispute resolution, and enforcement of our agreements.</li>
            </ul>

            <h2>6. Sharing, Disclosure, and Sub‑processors</h2>
            <p>
              We do not sell personal data. We may disclose personal data to the following categories of recipients where necessary:
            </p>
            <ul>
              <li><strong>Service Providers/Sub‑processors:</strong> Hosting, backup, email delivery, analytics, payments, and customer support tools bound by confidentiality and data protection obligations. A current list is available upon request.</li>
              <li><strong>Professional Advisors:</strong> Lawyers, auditors, and insurers under duties of confidentiality.</li>
              <li><strong>Legal/Regulatory Authorities:</strong> Where required to comply with law or valid legal process.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, financing, or sale of assets, subject to appropriate protections.</li>
            </ul>

            <h2>7. International Data Transfers</h2>
            <p>
              The Services may involve transfers of personal data outside Jamaica. Where we transfer personal data internationally,
              we implement appropriate safeguards consistent with the JDPA, including contractual commitments and technical and
              organizational measures designed to protect personal data.
            </p>

            <h2>8. Security Measures</h2>
            <p>
              We implement administrative, technical, and physical safeguards designed to protect personal data, which may include:
              TLS encryption in transit; encryption at rest for sensitive data; network segmentation; access controls based on
              least‑privilege; multi‑factor authentication for administrative access; logging and monitoring; vulnerability
              management; and regular backups. No method of transmission or storage is fully secure, and we cannot guarantee absolute
              security.
            </p>

            <h2>9. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes described in this Policy, to comply with
              legal, accounting, or reporting requirements, to resolve disputes, and to enforce our agreements. You may request
              deletion of certain data, subject to legal and contractual obligations and technical feasibility.
            </p>

            <h2>10. Your Rights</h2>
            <p>
              Subject to the JDPA and other applicable laws, you may have the right to request: (i) access to your personal data;
              (ii) rectification of inaccurate or incomplete data; (iii) erasure (deletion); (iv) restriction of processing;
              (v) objection to processing; and (vi) data portability. Where we act as a processor, we will promptly notify and
              assist the relevant controller in responding to your request as appropriate.
            </p>

            <h2>11. Cookies and Similar Technologies</h2>
            <p>
              We use necessary cookies to operate the Services and may use optional analytics or performance cookies to understand
              usage and improve features. Where required by law, we will request your consent before placing non‑essential cookies.
              You can manage cookie preferences through your browser settings and applicable controls within the Services.
            </p>

            <h2>12. Marketing Communications</h2>
            <p>
              We may send you service‑related communications. With your consent where required, we may send marketing or promotional
              communications. You can opt out at any time by using the unsubscribe link in the message or by contacting us. We do not
              share your personal data with third parties for their direct marketing purposes.
            </p>

            <h2>13. Automated Decision‑Making</h2>
            <p>
              The Services do not engage in solely automated decision‑making that produces legal or similarly significant effects
              concerning individuals. If this changes, we will provide required notices and safeguard your rights under applicable law.
            </p>

            <h2>14. Data Protection Impact Assessments (DPIA)</h2>
            <p>
              Where required by law, we will conduct and maintain DPIAs for high‑risk processing activities and will cooperate with
              customers acting as controllers to support their assessments for their use of the Services.
            </p>

            <h2>15. Data Breach Notification</h2>
            <p>
              In the event of a personal data breach affecting the Services, we will take steps to contain and remediate the incident
              and will notify the relevant parties and/or authorities in accordance with applicable law and our contractual
              commitments.
            </p>

            <h2>16. Children</h2>
            <p>
              The Services are not directed to children under the age of 16 and we do not knowingly collect personal data from
              children under 16. If we become aware that we have collected such data, we will take steps to delete it.
            </p>

            <h2>17. Third‑Party Links and Services</h2>
            <p>
              The Services may contain links to third‑party websites or services. We are not responsible for the privacy practices of
              such third parties. We encourage you to review their privacy notices before providing personal data.
            </p>

            <h2>18. Acting as Processor; Data Processing Addendum</h2>
            <p>
              Where we act as a processor, we process personal data only on your documented instructions, subject to our Data
              Processing Addendum ("DPA"), which forms part of our agreement with you and includes terms on sub‑processors, security
              measures, assistance with data subject rights, and international transfers. Contact us to request a copy of the DPA.
            </p>

            <h2>19. Changes to this Policy</h2>
            <p>
              We may update this Policy periodically. We will post the updated version with a revised "Last updated" date. Your
              continued use of the Services after the effective date of an update constitutes acceptance of the updated Policy.
            </p>

            <h2>20. Contact and Data Protection Officer</h2>
            <p>
              For questions or requests regarding this Policy or our privacy practices, please contact us via {" "}
              <a href="#" data-open-fillout="true">Contact us</a>. If required by law, we will designate a Data Protection Officer
              ("DPO"); contact details will be provided upon request.
            </p>
          </div>
        </Section>
      </main>
      <FooterSection />
    </div>
  );
}

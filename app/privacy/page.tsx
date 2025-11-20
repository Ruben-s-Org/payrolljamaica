import { Section } from "@/components/ui/section";

export default function PrivacyPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Section className="py-16">
        <div className="max-w-container mx-auto px-4 prose prose-invert">
          <h1>Privacy Policy</h1>
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

          <p>
            This Privacy Policy explains how Payroll Jamaica ("we", "our", or "us") collects, uses, discloses,
            and safeguards information in connection with our website, products, and services (the "Services").
            We are committed to protecting your privacy and being transparent about our practices.
          </p>

          <h2>1. Scope</h2>
          <p>
            This Policy applies to information we process when you use the Services. If you use the Services on behalf
            of an organization, you are responsible for ensuring you have all necessary permissions to share personal
            data with us.
          </p>

          <h2>2. Roles</h2>
          <p>
            Depending on the context, we may act as a data <strong>controller</strong> (for account, billing, and support data)
            and as a data <strong>processor</strong> (for your payroll data that you choose to process via the Services). When acting as
            a processor, we only process personal data on your documented instructions and as required to provide the Services.
          </p>

          <h2>3. Information We Collect</h2>
          <ul>
            <li><strong>Account & Billing Data:</strong> Name, email, company details, and payment information.</li>
            <li><strong>Payroll Data:</strong> Employee identifiers, salary components, deductions, benefits, tax identifiers, and related records you upload.</li>
            <li><strong>Usage & Device Data:</strong> Technical logs, IP address, browser type, and interaction events for security and reliability.</li>
            <li><strong>Support Communications:</strong> Information you provide when contacting support.</li>
          </ul>

          <h2>4. How We Use Information</h2>
          <ul>
            <li>To provide, secure, and maintain the Services.</li>
            <li>To generate payroll calculations, payslips, reports, and statutory remittances per your configuration.</li>
            <li>To prevent, detect, and investigate security incidents and abuse.</li>
            <li>To communicate with you about updates, security notices, and support.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2>5. Legal Bases</h2>
          <p>
            We process data under one or more of the following legal bases: performance of a contract, legitimate interests
            (e.g., to secure and improve the Services), compliance with legal obligations, and your consent where applicable.
          </p>

          <h2>6. Sharing and Sub‑processors</h2>
          <p>
            We do not sell personal data. We may share information with vetted service providers (sub‑processors) strictly as
            necessary to deliver the Services (e.g., hosting, backups, analytics, email delivery). We require contractual
            commitments for confidentiality, security, and privacy. A current list of sub‑processors is available upon request.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement administrative, technical, and physical safeguards designed to protect data, including TLS encryption in transit,
            encrypted storage at rest, access controls with least‑privilege, audit logs, and regular backups. No method of transmission or
            storage is 100% secure; we cannot guarantee absolute security.
          </p>

          <h2>8. Data Retention</h2>
          <p>
            We retain personal data for as long as necessary to provide the Services and fulfill the purposes outlined in this Policy,
            unless a longer retention period is required or permitted by law. You may request deletion of certain data, subject to legal
            and contractual requirements.
          </p>

          <h2>9. International Transfers</h2>
          <p>
            If data is transferred outside your country, we take steps to ensure appropriate safeguards are in place, consistent with
            applicable data protection laws.
          </p>

          <h2>10. Your Rights</h2>
          <p>
            Subject to applicable law, you may have rights to access, correct, or delete your personal data; to object to or restrict
            processing; and to data portability. When we act as a processor, we will forward requests to the relevant controller (your
            organization) where appropriate.
          </p>

          <h2>11. Children</h2>
          <p>
            The Services are not directed to children under 16, and we do not knowingly collect personal data from children under 16.
          </p>

          <h2>12. Changes to this Policy</h2>
          <p>
            We may update this Policy from time to time. We will post the updated version with a revised "Last updated" date. Your
            continued use of the Services after changes become effective constitutes acceptance of the updated Policy.
          </p>

          <h2>13. Contact</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, contact us via <a href="#" data-open-fillout="true">Contact us</a>.
          </p>
        </div>
      </Section>
    </main>
  );
}

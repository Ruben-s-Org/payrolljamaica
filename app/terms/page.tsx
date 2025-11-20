import { Section } from "@/components/ui/section";

export default function TermsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Section className="py-16">
        <div className="max-w-container mx-auto px-4 prose prose-invert">
          <h1>Terms of Service</h1>
          <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>

          <p>
            These Terms of Service (the "Terms") govern your access to and use of the Payroll Jamaica
            website, products, and services (collectively, the "Services"). By accessing or using the
            Services, you agree to be bound by these Terms. If you are using the Services on behalf of an
            organization, you represent and warrant that you have the authority to bind that organization,
            and “you” means that organization.
          </p>

          <h2>1. Eligibility and Accounts</h2>
          <p>
            You must be legally capable of entering into a binding agreement in Jamaica to use the Services.
            You are responsible for safeguarding access to your account and for all activity occurring under
            it. You must promptly notify us of any unauthorized use or suspected security incident.
          </p>

          <h2>2. Use of the Services</h2>
          <p>
            You may use the Services only in accordance with these Terms and applicable laws. You are solely
            responsible for the accuracy, quality, and legality of any data you submit or process using the
            Services, including employee data, payroll inputs, and statutory filings.
          </p>

          <h2>3. Compliance and Guidance</h2>
          <p>
            The Services provide tools to help you calculate payroll and generate reports. You acknowledge
            that we do not provide legal, tax, or accounting advice. You are responsible for reviewing and
            verifying all outputs and for ensuring compliance with all applicable laws, regulations, and
            filing requirements.
          </p>

          <h2>4. Fees and Payment</h2>
          <p>
            Fees, if any, will be communicated separately or in an order form. Unless stated otherwise, fees
            are non-refundable. Late payments may incur interest at the maximum rate permitted by law.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            We and our licensors retain all right, title, and interest in and to the Services, including all
            software, documentation, logos, and content. These Terms do not grant you any intellectual
            property rights in the Services, except for the limited rights necessary to use the Services as
            permitted herein.
          </p>

          <h2>6. Acceptable Use</h2>
          <p>
            You must not: (a) reverse engineer, decompile, or tamper with the Services; (b) interfere with or
            disrupt the integrity or performance of the Services; (c) access the Services to build a
            competitive product; or (d) use the Services to process unlawful, harmful, or infringing content.
          </p>

          <h2>7. Data Security and Privacy</h2>
          <p>
            We implement administrative, technical, and physical safeguards designed to protect your data. No
            method of transmission or storage is 100% secure, and we cannot guarantee absolute security. Our
            use of personal data is described in our <a href="/privacy">Privacy Policy</a>.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            The Services may integrate with or reference third-party products or services. We are not
            responsible for third-party services and disclaim all liability arising from your use of them.
          </p>

          <h2>9. Disclaimers</h2>
          <p>
            THE SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT WARRANTIES OF ANY KIND,
            WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
            FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE
            UNINTERRUPTED, ERROR-FREE, OR COMPLETE.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS,
            REVENUE, DATA, OR GOODWILL, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR
            TOTAL LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES SHALL NOT EXCEED THE AMOUNTS PAID BY YOU
            (IF ANY) FOR THE SERVICES IN THE SIX (6) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You will indemnify and hold us harmless from any claims, losses, liabilities, damages, and
            expenses (including reasonable legal fees) arising out of or relating to your use of the
            Services, your data, or your violation of these Terms or applicable law.
          </p>

          <h2>12. Suspension and Termination</h2>
          <p>
            We may suspend or terminate your access to the Services at any time for any reason, including
            suspected misuse, non-payment, or legal compliance. Upon termination, your right to use the
            Services ceases immediately, but provisions intended to survive will remain in effect.
          </p>

          <h2>13. Governing Law; Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of Jamaica, without regard to conflict of laws principles.
            Any dispute shall be resolved exclusively in the courts of Jamaica located in Kingston. You agree
            to the personal jurisdiction and venue of those courts.
          </p>

          <h2>14. Changes to the Terms</h2>
          <p>
            We may update these Terms from time to time. We will post the updated version with a revised
            "Last updated" date. Your continued use of the Services after changes become effective constitutes
            acceptance of the updated Terms.
          </p>

          <h2>15. Contact</h2>
          <p>
            Questions about these Terms? Contact us at <a href="#" data-open-fillout="true">Contact us</a>.
          </p>
        </div>
      </Section>
    </main>
  );
}

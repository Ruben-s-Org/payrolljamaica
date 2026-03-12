import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import Navbar from "@/components/sections/navbar/default";
import FooterSection from "@/components/sections/footer/default";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service | Payroll Jamaica",
  description:
    "Payroll Jamaica's Terms of Service govern your use of our payroll and HR software for Jamaican businesses. Covering eligibility, data protection under the Jamaica Data Protection Act 2020, acceptable use, billing, service levels, and governing law under Jamaican jurisdiction. Read before using our PAYE, NIS, and NHT payroll automation services.",
  alternates: { canonical: canonical("/terms") },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service | Payroll Jamaica",
    description:
      "Terms governing use of Payroll Jamaica's payroll and HR software. Governed by Jamaican law.",
    url: canonical("/terms"),
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground w-full">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Section className="py-16">
          <div className="max-w-container mx-auto px-4 prose prose-invert">
            <h1>Terms of Service</h1>
            <p><strong>Last updated:</strong> March 11, 2026</p>

            <p>
              These Terms of Service (the "Terms") govern your access to and use of the Payroll Jamaica website,
              software, and related products and services (collectively, the "Services"). By accessing or using the
              Services, you agree to be bound by these Terms. If you are using the Services on behalf of an
              organization, you represent and warrant that you have authority to bind that organization, and
              "you" refers to that organization.
            </p>

            <h2>1. Eligibility; Accounts; Security</h2>
            <p>
              You must have legal capacity under Jamaican law to enter into a binding agreement. You are responsible
              for safeguarding your credentials and all activity under your account. You must promptly notify us of
              any actual or suspected unauthorized access or security incident. We may require multi‑factor
              authentication and other security controls.
            </p>

            <h2>2. Scope of Services; Customer Responsibilities</h2>
            <ul>
              <li>You are solely responsible for the accuracy, quality, and legality of data you submit, including payroll inputs and employee information.</li>
              <li>You will obtain and maintain all necessary consents and notices required to lawfully process personal data through the Services.</li>
              <li>You are responsible for configuration, approvals, and verification of outputs, including payslips and statutory forms.</li>
              <li>You are responsible for your hardware, internet connectivity, and compatible software.</li>
            </ul>

            <h2>3. No Legal, Tax, or Accounting Advice</h2>
            <p>
              The Services provide tools and automation to assist your payroll operations. We do not provide legal, tax,
              accounting, or professional advice and make no representations that outputs will be compliant without your
              review. You should consult qualified professionals for advice. You remain responsible for all filings and
              compliance decisions.
            </p>

            <h2>4. Acceptable Use</h2>
            <p>
              You will not: (a) copy, modify, or create derivative works of the Services; (b) reverse engineer, decompile,
              or otherwise attempt to derive source code; (c) bypass security or rate limits; (d) interfere with or disrupt
              the integrity or performance of the Services; (e) use the Services to build a competing product; (f) upload or
              transmit malicious code; or (g) use the Services for unlawful, harmful, infringing, or deceptive purposes.
            </p>

            <h2>5. Fees, Billing, and Taxes</h2>
            <p>
              Fees and payment terms (if applicable) are specified at checkout or in an order form. Except where prohibited by
              law, fees are non‑refundable. You are responsible for all applicable taxes, levies, and duties. Late amounts may
              accrue interest at the maximum rate permitted by Jamaican law and may result in suspension.
            </p>

            <h2>6. Trials, Betas, and Pre‑Release</h2>
            <p>
              We may offer trials, beta features, or pre‑release functionality on an "AS IS" basis without support or
              warranties and may discontinue them at any time.
            </p>

            <h2>7. Third‑Party Services</h2>
            <p>
              The Services may interoperate with third‑party services. We do not control and are not responsible for third‑party
              services, and your use of them is subject to their terms and privacy policies.
            </p>

            <h2>8. Intellectual Property; Feedback</h2>
            <p>
              We and our licensors retain all rights, title, and interest in the Services and related IP. You grant us a
              non‑exclusive, worldwide, royalty‑free license to use feedback you voluntarily provide to improve the Services without
              restriction.
            </p>

            <h2>9. Confidentiality</h2>
            <p>
              Each party may access the other party's confidential information solely to perform under these Terms and will not
              disclose such information to third parties except as permitted here or required by law. This section does not apply to
              information that is public, rightfully obtained from a third party, or independently developed without use of the other
              party's confidential information.
            </p>

            <h2>10. Data Protection</h2>
            <p>
              Our privacy practices are described in our <a href="/privacy">Privacy Policy</a>. Where we act as processor of personal
              data on your behalf, we will process such data only on your documented instructions, implement appropriate technical and
              organizational measures, and assist you in meeting your obligations under the Jamaica Data Protection Act, 2020 to the
              extent applicable. A Data Processing Addendum is available upon request and forms part of these Terms when executed.
            </p>

            <h2>11. Service Levels; Support</h2>
            <p>
              We aim to provide reliable Services but do not guarantee uninterrupted availability. Support channels and response
              times may vary by plan. Maintenance windows or emergencies may result in downtime or degraded performance.
            </p>

            <h2>12. Disclaimers</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY
              KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              AND NON‑INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL MEET YOUR REQUIREMENTS, BE ACCURATE OR ERROR‑FREE, OR BE
              AVAILABLE WITHOUT INTERRUPTION.
            </p>

            <h2>13. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
              EXEMPLARY, OR PUNITIVE DAMAGES; OR FOR LOST PROFITS, REVENUE, GOODWILL, OR DATA; IN EACH CASE ARISING OUT OF OR RELATED
              TO THE SERVICES OR THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY. OUR AGGREGATE LIABILITY FOR ALL CLAIMS SHALL NOT
              EXCEED THE AMOUNTS PAID BY YOU (IF ANY) FOR THE SERVICES IN THE SIX (6) MONTHS PRECEDING THE EVENT GIVING RISE TO
              LIABILITY.
            </p>

            <h2>14. Indemnification</h2>
            <p>
              You will defend, indemnify, and hold us harmless from and against any claims, losses, liabilities, damages, costs, and
              expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Services; (b) your
              data or content; (c) your breach of these Terms; or (d) your violation of applicable law.
            </p>

            <h2>15. Suspension and Termination</h2>
            <p>
              We may suspend or terminate your access immediately for non‑payment, suspected misuse, legal compliance, or protection of
              the Services. Upon termination, your right to use the Services ceases, but provisions intended to survive (including
              confidentiality, IP, disclaimers, limitations of liability, indemnities, and governing law) survive.
            </p>

            <h2>16. Force Majeure</h2>
            <p>
              We are not responsible for delays or failures caused by events beyond our reasonable control, including acts of God,
              natural disasters, civil disturbances, labour disputes, internet or telecom failures, power outages, or governmental
              actions.
            </p>

            <h2>17. Export Control; Anti‑Corruption; Sanctions</h2>
            <p>
              You represent that you are not subject to trade or economic sanctions and will comply with applicable export control and
              anti‑corruption laws. You will not use the Services in violation of such laws.
            </p>

            <h2>18. Governing Law; Venue; Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of Jamaica, without regard to conflict‑of‑laws principles. The parties submit to the
              exclusive jurisdiction and venue of the courts located in Kingston, Jamaica. Each party waives any objection based on
              forum non conveniens or lack of personal jurisdiction.
            </p>

            <h2>19. Notices</h2>
            <p>
              We may provide notices by posting within the Services, by email to your account email, or by other reasonable means. You
              should send legal notices to us using the contact mechanism at {" "}
              <a href="#" data-open-fillout="true">Contact us</a>.
            </p>

            <h2>20. Assignment; Subcontracting</h2>
            <p>
              You may not assign these Terms without our prior written consent. We may assign or subcontract our obligations in
              connection with a corporate transaction or to trusted service providers, provided we remain responsible for their
              performance.
            </p>

            <h2>21. Changes to the Services or Terms</h2>
            <p>
              We may modify the Services or these Terms from time to time. We will post updates with a revised "Last updated" date.
              Your continued use after the effective date constitutes acceptance of the changes.
            </p>

            <h2>22. Entire Agreement; Severability; Waiver</h2>
            <p>
              These Terms, together with any order forms and the Privacy Policy, constitute the entire agreement between the parties
              with respect to the Services and supersede all prior understandings. If any provision is held unenforceable, it will be
              modified to the minimum extent necessary to make it enforceable, and the remaining provisions will remain in full force.
              No waiver of any term is effective unless in writing and signed by the waiving party.
            </p>

            <h2>23. Contact</h2>
            <p>
              Questions about these Terms? Contact us via {" "}
              <a href="#" data-open-fillout="true">Contact us</a>.
            </p>
          </div>
        </Section>
      </main>
      <FooterSection />
    </div>
  );
}

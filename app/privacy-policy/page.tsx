import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { DivideX } from "@/components/divide";
import { SubHeading } from "@/components/subheading";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Privacy Policy | Brokerage Insight",
  description:
    "Privacy Policy for Brokerage Insight. Learn how we collect, use, and protect your information.",
});

export default function PrivacyPolicyPage() {
  return (
    <main>
      <DivideX />
      <Container className="border-divide border-x px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <Badge text="Privacy Policy" />
            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
              Last Updated: January 2026
            </p>
            <SubHeading
              as="p"
              className="mt-4 max-w-2xl text-base text-gray-600 dark:text-neutral-400"
            >
              Brokerage Insight (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your
              privacy and is committed to protecting the personal information
              you share with us. This Privacy Policy explains how we collect,
              use, and safeguard information when you visit our website or
              interact with our services.
            </SubHeading>
            <p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-neutral-400">
              By using our website or services, you agree to the practices
              described in this policy.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                1. Information We Collect
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                We may collect the following types of information:
              </p>
              <h3 className="text-charcoal-900 mt-4 text-lg font-medium dark:text-neutral-100">
                Personal Information
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                Information you voluntarily provide, including:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-neutral-400">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Brokerage or company name</li>
                <li>Any information you submit through forms or scheduling tools</li>
              </ul>
              <h3 className="text-charcoal-900 mt-4 text-lg font-medium dark:text-neutral-100">
                Lead Information
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                If you interact with our lead generation services, we may
                collect information related to real estate inquiries including:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-neutral-400">
                <li>Property ownership confirmation</li>
                <li>Property location</li>
                <li>Intent to buy or sell property</li>
                <li>Communication summaries from qualification calls</li>
              </ul>
              <h3 className="text-charcoal-900 mt-4 text-lg font-medium dark:text-neutral-100">
                Technical Information
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-neutral-400">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Referral sources</li>
              </ul>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                This information helps us improve the performance and usability
                of our services.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                2. How We Use Information
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                We use collected information to:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-neutral-400">
                <li>Provide and operate our services</li>
                <li>Schedule consultations or reviews</li>
                <li>Deliver lead generation services</li>
                <li>Qualify real estate opportunities</li>
                <li>Improve our platform and marketing campaigns</li>
                <li>Communicate with you regarding our services</li>
                <li>Analyze usage trends and site performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                3. Sharing of Information
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                We do not sell personal information.
              </p>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Information may be shared in the following situations:
              </p>
              <h3 className="text-charcoal-900 mt-4 text-lg font-medium dark:text-neutral-100">
                With Brokerage Clients
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                Qualified real estate leads may be shared with brokerages using
                our services.
              </p>
              <h3 className="text-charcoal-900 mt-4 text-lg font-medium dark:text-neutral-100">
                Service Providers
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                We may use trusted third-party providers for services such as:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-neutral-400">
                <li>Advertising platforms</li>
                <li>CRM systems</li>
                <li>Scheduling software</li>
                <li>Hosting and analytics tools</li>
              </ul>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                These providers only receive information necessary to perform
                their services.
              </p>
              <h3 className="text-charcoal-900 mt-4 text-lg font-medium dark:text-neutral-100">
                Legal Requirements
              </h3>
              <p className="mt-2 text-gray-600 dark:text-neutral-400">
                We may disclose information if required to comply with legal
                obligations or to protect our rights and safety.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                4. Data Retention
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                We retain personal information only as long as necessary to:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-neutral-400">
                <li>Provide our services</li>
                <li>Maintain records</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Our website may use cookies and similar technologies to:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-neutral-400">
                <li>Improve user experience</li>
                <li>Analyze website performance</li>
                <li>Support marketing and advertising campaigns</li>
              </ul>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                You may adjust your browser settings to disable cookies if
                preferred.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                6. Data Security
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                We take reasonable measures to protect personal information from
                unauthorized access, disclosure, or misuse. However, no system can
                guarantee complete security.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                7. Your Rights
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Depending on your location, you may have the right to:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-neutral-400">
                <li>Request access to personal data we hold</li>
                <li>Request corrections to your data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of certain communications</li>
              </ul>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Requests may be submitted through our contact information below.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                8. Third-Party Links
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Our website may contain links to external websites. We are not
                responsible for the privacy practices of those websites.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                9. Updates to This Policy
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                We may update this Privacy Policy from time to time. Updates
                will be posted on this page with a revised &quot;Last Updated&quot;
                date.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                10. Contact Information
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                If you have questions regarding this Privacy Policy, please
                contact:
              </p>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Brokerage Insight
                <br />
                <a
                  href="mailto:contact@brokerageinsight.com"
                  className="text-charcoal-900 underline underline-offset-2 hover:no-underline dark:text-neutral-100"
                >
                  contact@brokerageinsight.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </Container>
      <DivideX />
    </main>
  );
}

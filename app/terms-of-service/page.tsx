import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { DivideX } from "@/components/divide";
import { SubHeading } from "@/components/subheading";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Terms of Service | Brokerage Insight",
  description:
    "Terms of Service for Brokerage Insight. Please read these terms carefully before using our services.",
});

export default function TermsOfServicePage() {
  return (
    <main>
      <DivideX />
      <Container className="border-divide border-x px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <Badge text="Terms of Service" />
            <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
              Last Updated: January 2026
            </p>
            <SubHeading
              as="p"
              className="mt-4 max-w-2xl text-base text-gray-600 dark:text-neutral-400"
            >
              These Terms of Service (&quot;Terms&quot;) govern your use of the Brokerage
              Insight website and services.
            </SubHeading>
            <p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-neutral-400">
              By accessing or using our website, you agree to these Terms.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                1. Use of Services
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Brokerage Insight provides tools, infrastructure, and services
                designed to support brokerage growth including:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-neutral-400">
                <li>Agent recruiting systems</li>
                <li>Automated onboarding tools</li>
                <li>Operational systems for brokerages</li>
                <li>Real estate lead generation</li>
              </ul>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Our services are intended for brokerage owners, team leaders, and
                real estate professionals.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                2. Eligibility
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                You must be at least 18 years old and capable of entering a
                legally binding agreement to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                3. Lead Generation Services
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Brokerage Insight may provide inbound real estate leads
                generated through advertising and marketing campaigns.
              </p>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                While we strive to provide qualified opportunities, we do not
                guarantee transaction outcomes, listing conversions, or sales
                results.
              </p>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Lead availability and volume may vary by market.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                4. User Responsibilities
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Users agree to:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-neutral-400">
                <li>Provide accurate information</li>
                <li>Use the services in a lawful manner</li>
                <li>Comply with applicable real estate regulations</li>
                <li>Respect all applicable privacy laws when contacting leads</li>
              </ul>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Users may not misuse the platform or attempt to disrupt service
                operations.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                5. Intellectual Property
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                All content on this website including text, design, graphics,
                and software is owned by Brokerage Insight or its licensors and
                may not be copied, reproduced, or distributed without
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                6. Service Availability
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                We strive to provide reliable services but do not guarantee
                uninterrupted access. Services may be updated, modified, or
                temporarily unavailable.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                7. Limitation of Liability
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Brokerage Insight is not liable for:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600 dark:text-neutral-400">
                <li>Business losses</li>
                <li>Lost profits</li>
                <li>Missed transactions</li>
                <li>Indirect or consequential damages</li>
              </ul>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                Use of our services is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                8. Termination
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                We reserve the right to suspend or terminate access to our
                services if these Terms are violated.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                9. Governing Law
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                These Terms are governed by the laws of the jurisdiction in
                which Brokerage Insight operates.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                10. Changes to Terms
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                We may update these Terms from time to time. Updated terms will
                be posted on this page with a revised date.
              </p>
            </section>

            <section>
              <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                11. Contact Information
              </h2>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">
                For questions regarding these Terms, please contact:
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

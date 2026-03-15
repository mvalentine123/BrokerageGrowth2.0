import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { FAQs } from "@/components/faqs";
import {
  PlansAdditionalServices,
  PlansCards,
} from "@/components/plans-cards";
import { Pricing } from "@/components/pricing";
import { PricingTable } from "@/components/pricing-table";
import { getSEOTags } from "@/lib/seo";

export const metadata = getSEOTags({
  title: "Plans | Brokerage Insight",
  description:
    "Explore Brokerage Insight growth plans. Schedule a review to find the right plan for your market, team size, and growth goals.",
});

export default function PricingPage() {
  return (
    <main>
      <DivideX />
      <section>
        <Container className="border-divide border-x px-4 py-16 md:px-8 md:py-20">
          <div className="space-y-16">
            <Pricing />
            <PlansCards />
            <PricingTable />
            <PlansAdditionalServices />
          </div>
        </Container>
      </section>
      <DivideX />
      <FAQs />
      <DivideX />
      <CTA
        heading={<>Find the Right Growth Plan <br /> for Your Brokerage</>}
        subheading="Schedule a brokerage review and we'll walk through your market, lead capacity, and the systems needed to scale."
        buttonText="Schedule a Review"
      />
      <DivideX />
    </main>
  );
}

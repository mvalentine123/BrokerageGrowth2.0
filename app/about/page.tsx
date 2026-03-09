import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { Heading } from "@/components/heading";
import { InformationBlock } from "@/components/information-block";
import { ProgressiveBlur } from "@/components/progressive-blur";
import { SectionHeading } from "@/components/seciton-heading";
import { SubHeading } from "@/components/subheading";
import { founders } from "@/constants/founders";
import { LinkedInIcon } from "@/icons/general";
import { SupportingLogos } from "@/components/supporting-logos";
import { getSEOTags } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";

export const metadata = getSEOTags({
  title: "About Us | Brokerage Insight",
  description:
    "We're Building the Future of Agent-Driven Development. Founded by engineers and AI researchers, Brokerage Insight was born out of a simple frustration: building intelligent systems still required too much manual orchestration. We set out to change that by creating a tool that lets teams design, simulate, and launch autonomous agents visually and intuitively.",
});

export default function AboutPage() {
  return (
    <main>
      <DivideX />
      <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:px-8 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <Badge text="About Us" />
            <Heading className="mt-4 text-left">
              Building the Infrastructure Behind Brokerage Growth
            </Heading>
            <SubHeading className="mt-6 mr-auto text-left">
              Brokerage Insight helps broker/owners install the systems that
              support recruiting, onboarding, and agent production. Instead of
              relying on disconnected tools, we build the infrastructure modern
              brokerages need to scale.
              <br /> <br />
              From inbound recruiting pipelines to automated onboarding systems
              and listing lead generation, Brokerage Insight installs the
              operational foundation that allows brokerages to grow consistently.
            </SubHeading>
          </div>
          <div className="border-divide rounded-3xl border p-2">
            <Image
              src="https://res.cloudinary.com/dreomly4m/image/upload/v1751738211/envato-labs-image-edit_5_dwqedp.png"
              alt="About Us"
              width={1000}
              height={1000}
              className="h-full rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="mt-20 flex w-full flex-col items-center lg:flex-row">
          <h2 className="mb-4 min-w-40 text-center font-mono text-sm tracking-tight text-neutral-500 uppercase lg:mb-0 lg:text-left dark:text-neutral-400">
            Supporting
          </h2>
          <SupportingLogos />
        </div>
      </Container>
      <Container className="border-divide border-x border-t p-4 py-20 md:px-8 md:py-40">
        <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <Badge text="Our Experience" />
            <SectionHeading className="mt-4 text-left">
              Built by Brokerage Operators
            </SectionHeading>
            <SubHeading className="mt-6 mr-auto text-left">
              Brokerage Insight was built from real-world experience running and
              scaling brokerages, not from theory.
            </SubHeading>
            <div className="divide-divide mt-8 grid grid-cols-3 gap-6">
              <MetricBlock value="170+" label="Agents in 9 months" />
              <MetricBlock value="100+" label="Agents in 5 Months" />
              <MetricBlock value="Real" label="Brokerage Operators" />
            </div>
          </div>
          <InformationBlock />
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide flex flex-col items-center border-x py-16">
        <Badge text="Our Team" />
        <SectionHeading className="mt-4">
          The Team Behind Brokerage Insight
        </SectionHeading>
        <SubHeading className="mx-auto mt-6 max-w-lg px-4">
          Building the systems modern brokerages use to grow.
        </SubHeading>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
          {founders.slice(0, 3).map((founder) => (
            <div
              className="group relative h-60 overflow-hidden rounded-2xl md:h-100"
              key={founder.name + founder.title}
            >
              <Image
                src={founder.src}
                alt={founder.name}
                width={500}
                height={500}
                className="h-full w-full object-cover object-top"
              />
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 hidden h-[30%] w-full transition-all duration-200 group-hover:block"
                blurIntensity={2}
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl bg-black/80 px-4 py-2">
                <div>
                  <h3 className="text-sm font-medium text-white">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-neutral-300">{founder.title}</p>
                </div>
                <a
                  href={founder.url}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <LinkedInIcon className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <DivideX />
      <Container className="border-divide flex flex-col items-center border-x border-b pb-20">
        <div className="divide-divide border-divide grid grid-cols-1 border-b lg:grid-cols-2 lg:divide-x">
          <div className="flex flex-col items-start justify-start px-4 py-10 md:px-8 md:py-20">
            <Badge text="Why We Exist" />
            <SectionHeading className="mt-4 text-left">
              Why Brokerage Insight Exists
            </SectionHeading>
            <SubHeading className="mt-6 mr-auto max-w-md text-left">
              Modern brokerages need more than recruiting ads. They need
              infrastructure that supports agent growth, onboarding, and
              production.
            </SubHeading>
            <p className="mt-4 mr-auto max-w-md text-left text-base text-gray-600 dark:text-neutral-400">
              Brokerage Insight installs the systems behind brokerage expansion
              — from recruiting pipelines to operational platforms and lead
              flow.
            </p>
          </div>
          <div className="divide-divide border-divide divide-y border-t lg:border-t-0">
            {[
              {
                title: "Agent Recruiting Infrastructure",
                description:
                  "Install predictable recruiting pipelines and inbound campaigns that consistently attract new agents.",
              },
              {
                title: "Automated Agent Onboarding",
                description:
                  "Structured onboarding systems, training resources, and operational workflows for new agents.",
              },
              {
                title: "Virtual Office Platform",
                description:
                  "A centralized hub where agents access training, brokerage tools, and operational resources.",
              },
              {
                title: "Motivated Seller Lead Flow",
                description:
                  "Inbound listing opportunities generated and pre-qualified for agents across the brokerage.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="block px-4 py-4 md:px-8"
              >
                <h3 className="text-brand font-medium">{card.title}</h3>
                <p className="mt-2 font-medium text-neutral-500 dark:text-neutral-200">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <CTA />
      <DivideX />
    </main>
  );
}

const MetricBlock = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <h3 className="text-charcoal-700 text-3xl font-medium dark:text-neutral-100">
        {value}
      </h3>
      <p className="text-sm text-gray-600 dark:text-neutral-400">{label}</p>
    </div>
  );
};

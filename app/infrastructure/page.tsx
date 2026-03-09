"use client";

import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { DivideX } from "@/components/divide";
import { Heading } from "@/components/heading";
import { SectionHeading } from "@/components/seciton-heading";
import { SubHeading } from "@/components/subheading";
import { Scale } from "@/components/scale";
import {
  DeployAndScaleSkeleton,
  ConnectYourTooklsSkeleton,
  DesignYourWorkflowSkeleton,
} from "@/components/how-it-works/skeletons";
import { LLMModelSelectorSkeleton } from "@/components/agentic-intelligence/skeletons";
import {
  GraphIcon,
  TelescopeIcon,
  PhoneIcon,
  DatabaseIcon,
} from "@/icons/card-icons";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const INFRASTRUCTURE_SECTIONS = [
  {
    headline: "Recruiting Infrastructure",
    description:
      "A predictable system for attracting and converting agents into your brokerage.",
    bullets: [
      "Inbound recruiting campaigns",
      "Recruiting funnel and pipeline tracking",
      "Automated appointment booking",
      "Recruiting performance dashboard",
    ],
  },
  {
    headline: "Automated Agent Onboarding",
    description:
      "Turn new agents into productive agents faster with structured onboarding systems.",
    bullets: [
      "Automated onboarding workflows",
      "Custom training libraries",
      "Branded onboarding portals",
      "Agent progress tracking",
    ],
  },
  {
    headline: "Virtual Office Platform",
    description:
      "A centralized hub where agents access training, resources, and brokerage updates.",
    bullets: [
      "Agent dashboard and login portal",
      "Training and resource library",
      "Brokerage announcements and updates",
      "Internal brokerage hub",
    ],
  },
  {
    headline: "Brokerage Reporting",
    description:
      "Track recruiting, production, and brokerage performance from one place.",
    bullets: [
      "Production tracking",
      "Agent performance reporting",
      "Downline and revenue share tracking",
      "Brokerage-wide analytics",
    ],
  },
  {
    headline: "Lofty Enterprise CRM",
    description:
      "Enterprise CRM and IDX brokerage website designed for lead generation and agent production.",
    bullets: [
      "Lofty Enterprise CRM",
      "Custom IDX brokerage website",
      "SkySlope transaction management",
      "Brokerage system integrations",
    ],
  },
  {
    headline: "Motivated Seller Lead Generation",
    description:
      "Optional inbound listing opportunities delivered directly to your brokerage.",
    bullets: [
      "Inbound listing opportunities",
      "Lead qualification workflows",
      "Agent routing systems",
      "Listing opportunity pipeline",
    ],
  },
];

function ContentBlock({
  headline,
  description,
  bullets,
}: (typeof INFRASTRUCTURE_SECTIONS)[0]) {
  return (
    <div className="flex flex-col items-start">
      <SectionHeading className="text-left">{headline}</SectionHeading>
      <p className="mt-4 max-w-xl text-left text-base text-gray-600 dark:text-neutral-400">
        {description}
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 text-left text-sm text-gray-600 dark:text-neutral-400">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

const REPORTING_ITEMS = [
  {
    title: "Production tracking",
    description: "Monitor closed sides and revenue across your brokerage.",
    icon: <GraphIcon className="text-brand size-6" />,
  },
  {
    title: "Agent performance",
    description: "See who’s producing and where to support growth.",
    icon: <TelescopeIcon className="text-brand size-6" />,
  },
  {
    title: "Downline & revenue share",
    description: "Track splits, referrals, and team production.",
    icon: <PhoneIcon className="text-brand size-6" />,
  },
  {
    title: "Brokerage-wide analytics",
    description: "One dashboard for recruiting, onboarding, and ops.",
    icon: <DatabaseIcon className="text-brand size-6" />,
  },
];

function ReportingCards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {REPORTING_ITEMS.map((item, index) => (
        <div
          key={item.title}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          className="relative"
        >
          <AnimatePresence>
          {activeIndex === index && (
            <motion.div
              layoutId="infra-reporting-scale"
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <Scale />
            </motion.div>
          )}
        </AnimatePresence>
          <div className="relative z-10 rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent dark:bg-neutral-800 md:p-5">
            <div className="flex items-center gap-2">{item.icon}</div>
            <h3 className="mt-4 mb-2 text-base font-medium">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function InfrastructurePage() {
  return (
    <main>
      <DivideX />
      {/* Hero */}
      <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:pt-32 md:pb-20">
        <Badge text="Platform" />
        <Heading className="mt-4 text-center">
          Infrastructure for Brokerage Growth
        </Heading>
        <SubHeading className="mx-auto mt-6 max-w-lg text-center">
          Brokerage Insight installs the systems brokerages need to recruit
          agents, onboard them faster, and scale operations.
        </SubHeading>
        <div className="mt-6 flex items-center justify-center">
          <Button
            data-cal-namespace="zoom"
            data-cal-link="mvalentine/zoom"
            data-cal-config='{"layout":"month_view"}'
          >
            Schedule a Brokerage Review
          </Button>
        </div>
      </Container>

      <DivideX />

      {/* 1. Recruiting Infrastructure — DeployAndScaleSkeleton */}
      <Container className="border-divide border-x px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <ContentBlock {...INFRASTRUCTURE_SECTIONS[0]} />
          <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] [background-size:10px_10px] md:h-[370px]">
            <DeployAndScaleSkeleton />
          </div>
        </div>
      </Container>

      <DivideX />

      {/* 2. Automated Agent Onboarding — ConnectYourTooklsSkeleton */}
      <Container className="border-divide border-x px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <ContentBlock {...INFRASTRUCTURE_SECTIONS[1]} />
          <div className="relative flex min-h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] [background-size:10px_10px] md:min-h-[380px]">
            <ConnectYourTooklsSkeleton />
          </div>
        </div>
      </Container>

      <DivideX />

      {/* 3. Virtual Office Platform — DesignYourWorkflowSkeleton */}
      <Container className="border-divide border-x px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <ContentBlock {...INFRASTRUCTURE_SECTIONS[2]} />
          <div className="relative flex min-h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] [background-size:10px_10px] md:min-h-[380px]">
            <DesignYourWorkflowSkeleton />
          </div>
        </div>
      </Container>

      <DivideX />

      {/* 4. Brokerage Reporting — Animated cards + NativeToolsIntegrationSkeleton */}
      <Container className="border-divide border-x px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <ContentBlock {...INFRASTRUCTURE_SECTIONS[3]} />
          <ReportingCards />
        </div>
      </Container>

      <DivideX />

      {/* 5. Lofty Enterprise CRM — DesignYourWorkflowSkeleton */}
      <Container className="border-divide border-x px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <ContentBlock {...INFRASTRUCTURE_SECTIONS[4]} />
          <div className="relative flex min-h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] [background-size:10px_10px] md:min-h-[380px]">
            <DesignYourWorkflowSkeleton />
          </div>
        </div>
      </Container>

      <DivideX />

      {/* 6. Motivated Seller Lead Generation — LLMModelSelectorSkeleton */}
      <Container className="border-divide border-x px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <ContentBlock {...INFRASTRUCTURE_SECTIONS[5]} />
          <div className="relative flex min-h-[320px] w-full items-center justify-center overflow-hidden rounded-2xl md:min-h-[380px]">
            <div className="w-full max-w-md">
              <LLMModelSelectorSkeleton />
            </div>
          </div>
        </div>
      </Container>

      <DivideX />

      <CTA
        heading="Install the Infrastructure Behind Your Brokerage Growth"
        subheading="Schedule a review to explore the systems that fit your brokerage and market."
        buttonText="Schedule a Brokerage Review"
      />
      <DivideX />
    </main>
  );
}

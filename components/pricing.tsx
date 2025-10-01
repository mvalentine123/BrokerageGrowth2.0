"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { motion } from "motion/react";
import { DivideX } from "./divide";
import { Button } from "./button";
import { SlidingNumber } from "./sliding-number";
import { CheckIcon } from "@/icons/card-icons";
import { Scale } from "./scale";
import { tiers, TierName } from "@/constants/pricing";
import Link from "next/link";

export const Pricing = () => {
  const tabs = [
    {
      title: "Monthly",
      value: "monthly",
      badge: "",
    },
    {
      title: "Yearly",
      value: "yearly",
      badge: "Save 20%",
    },
  ];
  const [activeTier, setActiveTier] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section className="">
      <Container className="border-divide flex flex-col items-center justify-center border-x pt-10 pb-10">
        <Badge text="Pricing" />
        <SectionHeading className="mt-4">
          Simple and Feasible Pricing
        </SectionHeading>
        <div className="relative mt-8 flex items-center gap-4 rounded-xl bg-gray-50 p-2 dark:bg-neutral-800">
          <Scale className="opacity-50" />
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTier(tab.value as "monthly" | "yearly")}
              className="relative z-20 flex w-32 justify-center py-1 text-center sm:w-40"
            >
              {activeTier === tab.value && (
                <motion.div
                  layoutId="active-span"
                  className="shadow-aceternity absolute inset-0 h-full w-full rounded-md bg-white dark:bg-neutral-950"
                />
              )}
              <span className="relative z-20 flex items-center gap-2 text-sm sm:text-base">
                {tab.title}{" "}
                {tab.badge && (
                  <span className="bg-brand/10 text-brand rounded-full px-2 py-1 text-xs font-medium">
                    {tab.badge}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>
      </Container>

      <DivideX />

      {/* Top tier summary area (columns) */}
      <Container className="border-divide border-x">
        <div className="divide-divide grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
          {tiers.map((tier, tierIdx) => (
            <div className="p-4 md:p-8" key={tier.title + "tier-meta"}>
              <h3 className="text-charcoal-700 text-xl font-medium dark:text-neutral-100">
                {tier.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-neutral-400">
                {tier.subtitle}
              </p>

              {/* ---------- Center CTA for middle tier; spacer for others ---------- */}
              <div className="mt-6 flex items-center justify-center text-center">
                {tier.title === TierName.TIER_2 ? (
                  <Button
                    as={Link}
                    href="/contact" /* change to your calendar URL if desired */
                    className="w-64"
                    variant="brand"
                  >
                    Schedule a Consultation
                  </Button>
                ) : (
                  <div className="h-[56px] w-64" aria-hidden="true" />
                )}
              </div>
              {/* ---------- end CTA / spacer ---------- */}

              {/* Mobile-only features list (keeps mobile experience: show features for middle tier only) */}
              <div
                key={tier.title + "tier-list-of-items"}
                className="flex flex-col gap-4 px-0 py-4 md:hidden md:p-8"
              >
                {tier.title === TierName.TIER_2
                  ? tier.features.map((tierFeature, idx) => (
                      <Step key={tierFeature + tierIdx + idx}>
                        {tierFeature}
                      </Step>
                    ))
                  : null}
              </div>
            </div>
          ))}
        </div>
      </Container>

      <DivideX />

      {/* Desktop features grid: show features only for middle column; placeholders for others */}
      <Container className="border-divide hidden border-x md:block">
        <div className="divide-divide grid grid-cols-1 md:grid-cols-3 md:divide-x">
          {tiers.map((tier, index) => (
            <div
              key={tier.title + "tier-list-of-items"}
              className="flex flex-col gap-4 p-4 md:p-8"
            >
              {tier.title === TierName.TIER_2 ? (
                tier.features.map((tierFeature, idx) => (
                  <Step key={tierFeature + index + idx}>
                    {tierFeature}
                  </Step>
                ))
              ) : (
                <div className="min-h-[320px]" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-charcoal-700 flex items-center gap-2 dark:text-neutral-100">
      <CheckIcon className="h-4 w-4 shrink-0" />
      {children}
    </div>
  );
};

const Price = ({ value }: { value: number }) => {
  return <SlidingNumber value={value} />;
};

export default Pricing;

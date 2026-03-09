"use client";

import React from "react";
import { Container } from "./container";
import { Button } from "./button";
import { CheckIcon } from "@/icons/card-icons";
import { CloseIcon } from "@/icons/general";
import { cn } from "@/lib/utils";

const calProps = {
  "data-cal-namespace": "zoom",
  "data-cal-link": "mvalentine/zoom",
  "data-cal-config": '{"layout":"month_view"}',
} as const;

const plans = [
  {
    title: "Growth",
    bestFor: (
      <>
        For brokerages installing predictable recruiting
        <br />
        and motivated seller lead flow.
      </>
    ),
    items: [
      "Inbound recruiting campaigns",
      "Recruiting funnel and pipeline tracking",
      "Automated appointment booking",
      "Custom recruiting materials",
      "Recruiting performance dashboard",
    ],
    cta: "Schedule a Review",
  },
  {
    title: "Scale",
    bestFor: (
      <>
        For brokerages scaling agent production
        <br />
        and operational infrastructure.
      </>
    ),
    items: [
      "Everything in Growth",
      "Automated agent onboarding systems",
      "Custom training and resource library",
      "Virtual Office and centralized agent hub",
      "CRM and operational integrations",
    ],
    cta: "Schedule a Review",
  },
  {
    title: "Enterprise",
    bestFor: (
      <>
        For multi-market brokerages installing
        <br />
        custom growth infrastructure.
      </>
    ),
    items: [
      "Everything in Scale",
      "Multi-market system deployment",
      "Revenue share and downline reporting",
      "Advanced brokerage reporting",
      "Dedicated onboarding support",
    ],
    cta: "Schedule a Review",
  },
];

export const PlansCards = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={plan.title} className="flex flex-col items-center">
              <div className="mb-3 flex h-9 items-center justify-center">
                {index === 1 && (
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand dark:bg-brand/15 dark:text-brand">
                    Most Brokerages Start Here
                  </span>
                )}
              </div>
              <div
                className={cn(
                  "border-divide flex w-full flex-col rounded-xl border bg-white p-6 dark:bg-neutral-950 dark:border-neutral-800",
                  index === 1 && "ring-1 ring-brand/20 dark:ring-brand/30",
                )}
              >
                <h3 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
                  {plan.title}
                </h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
                {plan.bestFor}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-700 dark:text-neutral-300"
                  >
                    <CheckIcon
                      className="mt-0.5 size-4 shrink-0 text-brand"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                {...calProps}
                className="mt-8 w-full"
                variant={index === 1 ? "brand" : "secondary"}
              >
                {plan.cta}
              </Button>
              </div>
            </div>
          ))}
    </div>
  );
};

const scaleComparisonRows: Array<{
  capability: string;
  growth: boolean;
  scale: boolean;
  enterprise: boolean;
}> = [
  { capability: "Recruiting Infrastructure", growth: true, scale: true, enterprise: true },
  { capability: "Agent Onboarding Systems", growth: false, scale: true, enterprise: true },
  { capability: "Virtual Office Platform", growth: false, scale: true, enterprise: true },
  { capability: "Brokerage Reporting", growth: false, scale: true, enterprise: true },
  { capability: "Multi-Market Deployment", growth: false, scale: false, enterprise: true },
  { capability: "Dedicated Implementation Support", growth: false, scale: false, enterprise: true },
];

export const PlansScaleComparison = () => {
  return (
    <div>
      <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
        What Changes as You Scale
      </h2>
      <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-divide divide-x border-b border-neutral-200 dark:border-neutral-700">
                <th className="min-w-[200px] px-4 pb-4 pt-2 align-bottom font-medium text-gray-600 dark:text-neutral-400">
                  Capability
                </th>
                <th className="min-w-[120px] px-4 pb-4 pt-2 text-center align-bottom font-medium text-gray-600 dark:text-neutral-400">
                  Growth
                </th>
                <th className="min-w-[120px] px-4 pb-4 pt-2 text-center align-bottom font-medium text-gray-600 dark:text-neutral-400">
                  Scale
                </th>
                <th className="min-w-[120px] px-4 pb-4 pt-2 text-center align-bottom font-medium text-gray-600 dark:text-neutral-400">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {scaleComparisonRows.map((row, index) => (
                <tr
                  key={row.capability}
                  className={cn(
                    "border-divide divide-x border-b border-neutral-200 dark:border-neutral-700",
                    index % 2 === 0 && "bg-gray-50 dark:bg-neutral-800",
                  )}
                >
                  <td className="text-charcoal-900 px-4 py-4 dark:text-neutral-100">
                    {row.capability}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {row.growth ? (
                      <CheckIcon className="mx-auto size-5 text-brand" aria-hidden />
                    ) : (
                      <CloseIcon className="mx-auto size-5 text-gray-400 dark:text-neutral-500" aria-hidden />
                    )}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {row.scale ? (
                      <CheckIcon className="mx-auto size-5 text-brand" aria-hidden />
                    ) : (
                      <CloseIcon className="mx-auto size-5 text-gray-400 dark:text-neutral-500" aria-hidden />
                    )}
                  </td>
                  <td className="px-4 py-4 text-center">
                    {row.enterprise ? (
                      <CheckIcon className="mx-auto size-5 text-brand" aria-hidden />
                    ) : (
                      <CloseIcon className="mx-auto size-5 text-gray-400 dark:text-neutral-500" aria-hidden />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

const additionalServices = [
  {
    title: "Motivated Seller Leads",
    description:
      "Inbound listing opportunities generated and pre-qualified for your agents.",
  },
  {
    title: "Lofty Enterprise CRM",
    description:
      "Enterprise CRM with customizable IDX brokerage website.",
  },
];

export const PlansAdditionalServices = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
        Additional Services
      </h2>
      <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
        Available with any plan.
      </p>
      <div className="mt-6 space-y-10">
        {additionalServices.map((service) => (
          <div key={service.title}>
            <div className="flex items-start gap-3">
              <CheckIcon
                className="mt-0.5 size-4 shrink-0 text-brand"
                aria-hidden
              />
              <div>
                <h3 className="text-charcoal-900 text-lg font-semibold tracking-tight dark:text-neutral-100">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-neutral-400">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PlansPricingNote = () => {
  const bullets = [
    "Market size and lead availability",
    "Desired lead volume",
    "Brokerage size and agent capacity",
    "Onboarding and operational systems installed",
    "Custom integrations and infrastructure",
  ];
  return (
    <section>
      <Container className="border-divide border-x px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-charcoal-900 text-xl font-semibold tracking-tight dark:text-neutral-100">
            How Brokerage Insight Plans Are Structured
          </h2>
          <p className="mt-6 text-gray-600 dark:text-neutral-400">
            Brokerage Insight plans are customized based on your market, lead
            capacity, brokerage size, and the systems installed in your
            brokerage.
          </p>
          <p className="mt-4 text-gray-600 dark:text-neutral-400">
            During your review call, we walk through your goals and recommend
            the right infrastructure for your brokerage.
          </p>
          <h3 className="text-charcoal-900 mt-10 text-sm font-medium tracking-tight dark:text-neutral-100">
            Your Plan Depends On
          </h3>
          <ul className="mt-4 space-y-3">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-sm text-gray-600 dark:text-neutral-400"
              >
                <CheckIcon
                  className="mt-0.5 size-4 shrink-0 text-brand"
                  aria-hidden
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default PlansCards;

import { CheckIcon } from "@/icons/card-icons";
import { CloseIcon } from "@/icons/general";

export enum TierName {
  TIER_1 = "Growth",
  TIER_2 = "Scale",
  TIER_3 = "Enterprise",
}

const check = <CheckIcon className="mx-auto size-5 text-brand" aria-hidden />;
const close = (
  <CloseIcon
    className="mx-auto size-5 text-gray-400 dark:text-neutral-500"
    aria-hidden
  />
);

export const pricingTable = [
  {
    title: "Recruiting Infrastructure",
    tiers: [
      { title: TierName.TIER_1, value: check },
      { title: TierName.TIER_2, value: check },
      { title: TierName.TIER_3, value: check },
    ],
  },
  {
    title: "Agent Onboarding Systems",
    tiers: [
      { title: TierName.TIER_1, value: close },
      { title: TierName.TIER_2, value: check },
      { title: TierName.TIER_3, value: check },
    ],
  },
  {
    title: "Virtual Office Platform",
    tiers: [
      { title: TierName.TIER_1, value: close },
      { title: TierName.TIER_2, value: check },
      { title: TierName.TIER_3, value: check },
    ],
  },
  {
    title: "Brokerage Reporting",
    tiers: [
      { title: TierName.TIER_1, value: close },
      { title: TierName.TIER_2, value: check },
      { title: TierName.TIER_3, value: check },
    ],
  },
  {
    title: "Multi-Market Deployment",
    tiers: [
      { title: TierName.TIER_1, value: close },
      { title: TierName.TIER_2, value: close },
      { title: TierName.TIER_3, value: check },
    ],
  },
  {
    title: "Dedicated Implementation Support",
    tiers: [
      { title: TierName.TIER_1, value: close },
      { title: TierName.TIER_2, value: close },
      { title: TierName.TIER_3, value: check },
    ],
  },
];

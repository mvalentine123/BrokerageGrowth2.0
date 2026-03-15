"use client";

import React from "react";
import { Container } from "./container";
import { pricingTable, TierName } from "@/constants/pricing";

const orderedTierNames: TierName[] = [
  TierName.TIER_1,
  TierName.TIER_2,
  TierName.TIER_3,
];

export const PricingTable = () => {
  return (
    <section>
      <Container className="border-divide border-x">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-divide divide-divide divide-x border-b">
                <th className="min-w-[220px] px-4 pt-12 pb-8 align-bottom text-sm font-medium text-gray-600 dark:text-neutral-200">
                  Capability
                </th>
                {orderedTierNames.map((tierName) => (
                  <th
                    key={`hdr-${tierName}`}
                    className="min-w-[220px] px-4 pt-12 pb-8 align-bottom"
                  >
                    <div className="text-charcoal-700 text-lg font-medium dark:text-neutral-100">
                      {tierName}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingTable.map((row, index) => (
                <tr
                  key={row.title}
                  className={
                    index % 2 === 0
                      ? "border-divide divide-divide divide-x border-b bg-gray-50 dark:bg-neutral-800"
                      : "border-divide divide-divide divide-x border-b"
                  }
                >
                  <td className="text-charcoal-700 flex px-4 py-6 text-center text-sm dark:text-neutral-100">
                    {row.title}
                  </td>
                  {orderedTierNames.map((tierName) => {
                    const tierVal = row.tiers.find(
                      (t) => t.title === tierName,
                    )?.value;
                    return (
                      <td
                        key={`${row.title}-${tierName}`}
                        className="text-charcoal-700 mx-auto px-4 py-6 text-center text-sm dark:text-neutral-100"
                      >
                        {tierVal}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default PricingTable;

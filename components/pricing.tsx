"use client";
import React from "react";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";

export const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Badge text="Plans" />
      <SectionHeading className="mt-4">
        Brokerage Growth Infrastructure
      </SectionHeading>
      <p className="mt-4 max-w-2xl text-center text-base text-gray-600 dark:text-neutral-400">
        Every brokerage is different. Schedule a review to explore the
        systems, lead flow, and infrastructure that fit your market and growth
        goals.
      </p>
    </div>
  );
};

export default Pricing;

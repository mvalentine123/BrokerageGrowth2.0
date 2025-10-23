"use client";
import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { ShimmerText } from "./shimmer-text";
import { SubHeading } from "./subheading";
import { GartnerLogo, GartnerLogoText, Star } from "@/icons/general";
import { motion } from "motion/react";
import { Button } from "./button";
import { Badge } from "./badge";
import Link from "next/link";
import { useCalendar } from "@/context/calendar-context";

export const Hero = () => {
  const { openCalendar } = useCalendar();
  return (
    <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:pt-32 md:pb-20">
      <Badge text="For Brokerage Owners & Team Leaders." />
      <Heading className="mt-4">
        Grow Your Brokerage <br /> in Months{" "}
        <span className="text-brand">Not Years</span>
      </Heading>

      <SubHeading className="mx-auto mt-6 max-w-lg">
        Recruiting, onboarding, training, and lead generation—turnkey processes to scale to 100 agents in 5 months.
      </SubHeading>

      <div className="mt-6 flex items-center gap-4">
        <Button onClick={openCalendar}>
          Book a Call
        </Button>
        <Button variant="secondary" as={Link} href="/pricing">
          View pricing
        </Button>
      </div>
      <div className="mt-6 flex items-center gap-2">
        <GartnerLogo />
        <div className="-gap-5 flex items-center">
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 1, delay: index * 0.05 }}
            >
              <Star key={index} />
            </motion.div>
          ))}
        </div>
        <span className="border-l border-gray-500 pl-4 text-[10px] text-gray-600 sm:text-sm">
          Innovative AI solution 2025 by
        </span>
        <GartnerLogoText className="size-12 sm:size-16" />
      </div>
    </Container>
  );
};

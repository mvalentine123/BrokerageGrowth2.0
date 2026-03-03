"use client";
import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { Button } from "./button";
import Link from "next/link";

export const Hero = () => {
  return (
    <Container className="border-divide flex min-h-[85vh] flex-col items-center justify-center border-x px-4 pt-20 pb-16 md:pt-32 md:pb-24">
      <Heading className="mt-4 max-w-4xl text-center">
        Install the Infrastructure Behind Brokerage Growth.
      </Heading>

      <SubHeading className="mx-auto mt-8 max-w-2xl text-center leading-relaxed">
        Modern brokerages don't scale through hustle. They scale through systems.
        <br />
        We install the operating system behind predictable recruiting, structured onboarding, centralized operations, and measurable production.
      </SubHeading>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Button
          data-cal-namespace="zoom"
          data-cal-link="mvalentine/zoom"
          data-cal-config='{"layout":"month_view"}'
        >
          Schedule an Infrastructure Review
        </Button>
        <Button variant="secondary" as={Link} href="#how-it-works">
          See How It Works
        </Button>
      </div>

      <p className="mt-3 text-sm text-neutral-500">
        For established brokerages with 40+ agents.
      </p>

      <p className="mt-10 max-w-2xl text-center text-sm text-neutral-600">
        Built by brokerage operators who scaled to 100 agents in 5 months — then turned the process into a repeatable system.
      </p>
    </Container>
  );
};

"use client";
import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { ShimmerText } from "./shimmer-text";
import { SubHeading } from "./subheading";
import { FeaturedImages } from "@/components/ui/simple-cta-with-images";
import { testimonials } from "@/constants/testimonials";
import { motion } from "motion/react";
import { Button } from "./button";
import { Badge } from "./badge";
import Link from "next/link";

export const Hero = () => {
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
        <Button
          data-cal-namespace="zoom"
          data-cal-link="mvalentine/zoom"
          data-cal-config='{"layout":"month_view"}'
        >
          Book a Call
        </Button>
        <Button variant="secondary" as={Link} href="/pricing">
          View pricing
        </Button>
      </div>
      <FeaturedImages
        showStars
        textClassName="text-center"
        className="items-center justify-center"
        containerClassName="items-center"
        testimonials={testimonials.slice(0, 6).map((t) => ({
          name: t.name,
          designation: t.position,
          image: t.avatar,
        }))}
      />
    </Container>
  );
};

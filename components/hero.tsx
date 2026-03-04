"use client";
import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { ShimmerText } from "./shimmer-text";
import { SubHeading } from "./subheading";
import { FeaturedImages } from "@/components/ui/simple-cta-with-images";
import { motion } from "motion/react";
import { Button } from "./button";
import { Badge } from "./badge";
import Link from "next/link";

export const Hero = () => {
  return (
    <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:pt-32 md:pb-20">
      <Badge text="For Established Brokerages with 40+ Agents." />
      <Heading className="mt-4">
        Install the Infrastructure <br /> Behind{" "}
        <span className="text-brand">Brokerage Growth</span>
      </Heading>

      <SubHeading className="mx-auto mt-6 max-w-lg">
        Modern brokerages scale through systems.
        <br />
        We install the infrastructure that makes growth predictable
      </SubHeading>

      <div className="mt-6 flex items-center justify-center">
        <Button
          data-cal-namespace="zoom"
          data-cal-link="mvalentine/zoom"
          data-cal-config='{"layout":"month_view"}'
        >
          Schedule a Review
        </Button>
      </div>
      <FeaturedImages
        showStars={false}
        textClassName="text-center"
        className="items-center justify-center"
        containerClassName="items-center"
        testimonials={[]}
      />
    </Container>
  );
};

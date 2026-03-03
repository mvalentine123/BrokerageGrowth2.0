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
        testimonials={[
          {
            name: "Ryan W.",
            designation: "Broker/Owner",
            image: "https://res.cloudinary.com/dreomly4m/image/upload/v1758993766/Ryan_Wire_5_b8tysr.jpg",
          },
          {
            name: "Jose J.",
            designation: "Broker/Owner",
            image: "https://res.cloudinary.com/dreomly4m/image/upload/v1758288362/Copy_of_Recruitment_ads_Facebook_Ad_11_1_jcs5am.png",
          },
          {
            name: "Frank P.",
            designation: "Broker/Owner",
            image: "https://res.cloudinary.com/dreomly4m/image/upload/v1755647958/Screenshot_2025-08-19_at_7.59.14_PM_mtoyj5.png",
          },
          {
            name: "Zack O.",
            designation: "Broker/Owner",
            image: "https://res.cloudinary.com/dreomly4m/image/upload/v1748096685/Oppenheim_qqixkh.jpg",
          },
          {
            name: "Greg G.",
            designation: "Broker",
            image: "https://res.cloudinary.com/dreomly4m/image/upload/v1748985530/Greg_G_w7qo1e.jpg",
          },
          {
            name: "Angie D.",
            designation: "Broker",
            image: "https://res.cloudinary.com/dreomly4m/image/upload/v1748097303/Angie_Davis_falh7n.jpg",
          },
        ]}
      />
    </Container>
  );
};

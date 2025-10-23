"use client";
import React from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { Button } from "./button";
import Link from "next/link";

export const Pricing = () => {
  return (
    <section className="">
      <Container className="border-divide flex flex-col items-center justify-center border-x py-20">
        <Badge text="Let's Connect" />
        <SectionHeading className="mt-4">
          Let's Chat Growth
        </SectionHeading>
        <p className="mt-4 max-w-2xl text-center text-base text-gray-600 dark:text-neutral-400">
          Every business is unique. Schedule a consultation with our team to discuss your goals,
          explore how we can help, and find the perfect solution for your needs.
        </p>
        <Button
          as={Link}
          href="/contact"
          className="mt-8 px-8 py-3"
          variant="brand"
        >
          Schedule a Consultation
        </Button>
      </Container>
    </section>
  );
};

export default Pricing;

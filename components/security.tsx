import React from "react";
import { Badge } from "./badge";
import { Container } from "./container";
import { DivideX } from "./divide";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import { Button } from "./button";
import Image from "next/image";

export const Security = () => {
  return (
    <>
      <Container className="border-divide flex flex-col items-center border-x pt-10 pb-5 md:pt-20 md:pb-10">
        <Badge text="Let's Connect" />
      </Container>
      <DivideX />
      <Container className="border-divide grid grid-cols-1 border-x bg-gray-100 px-8 py-12 md:grid-cols-2 dark:bg-neutral-900">
        <div>
          <SectionHeading className="text-left">
            Let's Chat Growth
          </SectionHeading>
          <SubHeading as="p" className="mt-4 text-left">
            Every business is unique. Schedule a consultation with our team to
            discuss your goals, explore how we can help, and find the perfect
            solution for your needs.
          </SubHeading>
          <Button
            data-cal-namespace="zoom"
            data-cal-link="mvalentine/zoom"
            data-cal-config='{"layout":"month_view"}'
            className="mt-4 mb-8 inline-block w-full px-8 py-3 md:w-auto"
            variant="brand"
          >
            Schedule a Review
          </Button>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Image
            src="/logos/CCPA.png"
            alt="CCPA"
            height={100}
            width={100}
            className="h-auto w-14"
            draggable={false}
          />
          <Image
            src="/logos/GDPR.png"
            alt="GDPR"
            height={100}
            width={100}
            className="h-auto w-14"
            draggable={false}
          />
          <Image
            src="/logos/ISO.png"
            alt="ISO"
            height={100}
            width={100}
            className="h-auto w-14"
            draggable={false}
          />
        </div>
      </Container>
    </>
  );
};

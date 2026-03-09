"use client";
import React from "react";
import { Container } from "../container";
import { Badge } from "../badge";
import { SubHeading } from "../subheading";
import { SectionHeading } from "../seciton-heading";
import { Card, CardDescription, CardTitle } from "./card";
import {
  BrainIcon,
  FingerprintIcon,
  MouseBoxIcon,
  NativeIcon,
  RealtimeSyncIcon,
  SDKIcon,
} from "@/icons/bento-icons";
import {
  LLMModelSelectorSkeleton,
  NativeToolsIntegrationSkeleton,
  TextToWorkflowBuilderSkeleton,
} from "./skeletons";

type Tab = {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  id: string;
};

export const AgenticIntelligence = () => {
  return (
    <Container className="border-divide border-x">
      <div className="flex flex-col items-center py-16">
        <Badge text="How it works" />
        <SectionHeading className="mt-4">
          How Modern Brokerages Grow
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg px-2">
          Attract agents with inbound campaigns, book intro calls automatically,
          and activate operations the moment they join.
        </SubHeading>
        <div className="border-divide divide-divide mt-16 grid grid-cols-1 divide-y border-y md:grid-cols-2 md:divide-x">
          <Card className="overflow-hidden mask-b-from-80%">
            <div className="flex items-center gap-2">
              <BrainIcon />
              <CardTitle>Stop Chasing. Start Attracting.</CardTitle>
            </div>
            <CardDescription>
              Inbound campaigns generate conversations with agents exploring
              brokerages.
            </CardDescription>
            <LLMModelSelectorSkeleton />
          </Card>
          <Card className="overflow-hidden mask-b-from-80%">
            <div className="flex items-center gap-2">
              <MouseBoxIcon />
              <CardTitle>Automated Discovery Calls</CardTitle>
            </div>
            <CardDescription>
              Automated conversations qualify agents and book right on your
              calendar.
            </CardDescription>
            <TextToWorkflowBuilderSkeleton />
          </Card>
        </div>
        <div className="w-full">
          <Card className="relative w-full max-w-none overflow-hidden">
            <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px]"></div>
            <div className="flex items-center gap-2">
              <NativeIcon />
              <CardTitle>Automate Your Brokerage Operations</CardTitle>
            </div>
            <CardDescription>
              Once an agent joins, onboarding and brokerage systems activate
              automatically.
            </CardDescription>
            <NativeToolsIntegrationSkeleton />
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-2">
              <FingerprintIcon />
              <CardTitle>Agent Onboarding</CardTitle>
            </div>
            <CardDescription>
              Agents move from signed to operational automatically. Documents
              are collected, systems configured, and training assigned.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <RealtimeSyncIcon />
              <CardTitle>Virtual Office</CardTitle>
            </div>
            <CardDescription>
              A centralized hub where agents access training, systems, and
              resources independently.
            </CardDescription>
          </Card>
          <Card>
            <div className="flex items-center gap-2">
              <SDKIcon />
              <CardTitle>Agent Production</CardTitle>
            </div>
            <CardDescription>
              Agents get the infrastructure needed to generate business. Lead
              generation, marketing tools, and operational support are built in.
            </CardDescription>
          </Card>
        </div>
      </div>
    </Container>
  );
};

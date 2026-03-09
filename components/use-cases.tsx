"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Badge } from "./badge";
import { SectionHeading } from "./seciton-heading";
import { SubHeading } from "./subheading";
import {
  DevopsIcon,
  PhoneIcon,
  GraphIcon,
  DatabaseIcon,
  RocketIcon,
  TelescopeIcon,
} from "@/icons/card-icons";
import { Scale } from "./scale";
import { motion } from "motion/react";

export const UseCases = () => {
  const useCases = [
    {
      title: "Recruiting",
      description:
        "Generate recruiting conversations with agents exploring new brokerages.",
      icon: <PhoneIcon className="text-brand size-6" />,
    },
    {
      title: "Onboarding",
      description:
        "Move new agents from signed to operational automatically.",
      icon: <RocketIcon className="text-brand size-6" />,
    },
    {
      title: "Virtual Office",
      description:
        "Give agents a centralized hub for training, resources, and systems.",
      icon: <DatabaseIcon className="text-brand size-6" />,
    },
    {
      title: "Lead Generation",
      description:
        "Provide agents with marketing systems and lead generation tools.",
      icon: <GraphIcon className="text-brand size-6" />,
    },
    {
      title: "Operations",
      description:
        "Standardize brokerage systems and internal workflows.",
      icon: <DevopsIcon className="text-brand size-6" />,
    },
    {
      title: "Reporting",
      description:
        "Track recruiting activity, onboarding progress, and agent performance.",
      icon: <TelescopeIcon className="text-brand size-6" />,
    },
  ];
  const [activeUseCase, setActiveUseCase] = useState<number | null>(null);
  return (
    <Container className="border-divide relative overflow-hidden border-x px-4 md:px-8">
      <div className="relative flex flex-col items-center py-20">
        <Badge text="Capabilities" />
        <SectionHeading className="mt-4">
          Everything Your Brokerage Needs to Grow
        </SectionHeading>

        <SubHeading as="p" className="mx-auto mt-6 max-w-lg">
          Recruit, onboard, and support agents with one operating system.
        </SubHeading>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              onMouseEnter={() => setActiveUseCase(index)}
              key={useCase.title}
              className="relative"
            >
              {activeUseCase === index && (
                <motion.div
                  layoutId="scale"
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <Scale />
                </motion.div>
              )}
              <div className="relative z-10 rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
                <div className="flex items-center gap-2">{useCase.icon}</div>
                <h3 className="mt-4 mb-2 text-lg font-medium">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

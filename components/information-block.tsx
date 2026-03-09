"use client";
import React, { useState } from "react";
import { Scale } from "./scale";
import { motion } from "motion/react";
import {
  BoltIcon,
  CloudCheckIcon,
  ShieldSplitIcon,
  SparklesIcon,
} from "@/icons/card-icons";

export const InformationBlock = () => {
  const useCases = [
    {
      title: "Operator Built",
      description:
        "Built by brokerage owners who have actually recruited and scaled real teams.",
      icon: <CloudCheckIcon className="text-brand size-6" />,
    },
    {
      title: "Systems That Actually Work",
      description:
        "Every system we install was developed inside real brokerage operations.",
      icon: <BoltIcon className="text-brand size-6" />,
    },
    {
      title: "Real Estate Is Different",
      description:
        "Most real estate technology companies have never operated a brokerage.",
      icon: <ShieldSplitIcon className="text-brand size-6" />,
    },
    {
      title: "Abundance Mindset",
      description:
        "We believe there is enough business for every brokerage that installs the right systems.",
      icon: <SparklesIcon className="text-brand size-6" />,
    },
  ];
  const [activeUseCase, setActiveUseCase] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {useCases.map((useCase, index) => (
        <div
          onMouseEnter={() => setActiveUseCase(index)}
          key={useCase.title}
          className="relative h-full"
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
          <div className="relative z-10 h-full rounded-lg bg-gray-50 p-4 transition duration-200 hover:bg-transparent md:p-5 dark:bg-neutral-800">
            <div className="flex items-center gap-2">{useCase.icon}</div>
            <h3 className="mt-4 mb-2 text-base font-medium">{useCase.title}</h3>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              {useCase.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

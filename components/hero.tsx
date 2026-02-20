"use client";
import React, { useState, useEffect } from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { FeaturedImages } from "@/components/ui/simple-cta-with-images";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./button";
import { Badge } from "./badge";
import Link from "next/link";
import { GridBackground } from "./ui/grid-background";
import { Dot } from "./common/dots";

type DemoType = "recruiting" | "onboarding" | "training";

interface Demo {
  id: DemoType;
  label: string;
  video: string;
  poster: string;
}

const demos: Demo[] = [
  {
    id: "recruiting",
    label: "Recruiting",
    video: "/videos/recruiting-demo.mp4",
    poster: "/videos/recruiting-poster.jpg",
  },
  {
    id: "onboarding",
    label: "Onboarding",
    video: "/videos/onboarding-demo.mp4",
    poster: "/videos/onboarding-poster.jpg",
  },
  {
    id: "training",
    label: "Training",
    video: "/videos/training-demo.mp4",
    poster: "/videos/training-poster.jpg",
  },
];

export const Hero = () => {
  const [activeDemo, setActiveDemo] = useState<DemoType>("recruiting");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentDemo = demos.find((demo) => demo.id === activeDemo) || demos[0];

  return (
    <Container className="border-divide relative flex flex-col items-center justify-center border-x px-4 pt-16 pb-16 md:pt-32 md:pb-24">
      <Dot top left />
      <Dot top right />
      <Dot bottom left />
      <Dot bottom right />

      <GridBackground />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center"
      >
        <Badge text="For Brokerage Owners & Team Leaders." />
        <Heading className="mt-4 text-center">
          Grow Your Brokerage <br /> in Months{" "}
          <span className="text-brand">Not Years</span>
        </Heading>

        <SubHeading className="mx-auto mt-6 max-w-2xl text-center">
          Recruiting, onboarding, training, and lead generation—turnkey processes to scale to 100 agents in 5 months.
        </SubHeading>

        <div className="mt-8 flex items-center gap-4">
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
          className="items-center justify-center mt-10"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 w-full max-w-5xl"
        >
          <div className="mb-8 flex flex-col items-center justify-center space-y-6">
            <div className="inline-flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-white/50 px-6 py-2 shadow-sm backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-800/50">
              {demos.map((demo, index) => (
                <React.Fragment key={demo.id}>
                  <button
                    onClick={() => setActiveDemo(demo.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeDemo === demo.id
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-500 hover:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                    }`}
                  >
                    {demo.label}
                    {activeDemo === demo.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 -z-10 rounded-lg bg-white shadow-sm dark:bg-neutral-700"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                  {index < demos.length - 1 && (
                    <div className="h-4 w-px bg-gray-300 dark:bg-neutral-600" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-video w-full bg-gray-900"
                >
                  {isClient ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster={currentDemo.poster}
                      className="h-full w-full object-cover"
                      key={currentDemo.video}
                    >
                      <source src={currentDemo.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-200 dark:bg-neutral-800">
                      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 dark:border-neutral-700 dark:border-t-white" />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
              >
                <div className="flex items-center gap-3 rounded-full bg-neutral-900/95 px-6 py-3 shadow-xl backdrop-blur-md ring-1 ring-white/10 dark:bg-neutral-800/95">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                      <svg
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-medium text-white">
                        {currentDemo.label}
                      </p>
                      <p className="text-xs text-gray-400">
                        See how it works in action
                      </p>
                    </div>
                  </div>
                  <Button
                    className="ml-2 px-4 py-1.5 text-sm"
                    data-cal-namespace="zoom"
                    data-cal-link="mvalentine/zoom"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

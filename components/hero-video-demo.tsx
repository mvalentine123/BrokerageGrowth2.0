"use client";
import React, { useState, useEffect } from "react";
import { Container } from "./container";
import { motion, AnimatePresence } from "motion/react";
import { Dot } from "./common/dots";
import { GridBackground } from "./ui/grid-background";

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

export const HeroVideoDemo = () => {
  const [activeDemo, setActiveDemo] = useState<DemoType>("recruiting");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentDemo = demos.find((demo) => demo.id === activeDemo) || demos[0];

  return (
    <Container className="border-divide relative flex items-center justify-center border-x bg-gray-50 px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32 dark:bg-neutral-900">
      <Dot top left />
      <Dot top right />
      <Dot bottom left />
      <Dot bottom right />

      <GridBackground />

      <div className="relative z-10 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex flex-col items-center justify-center space-y-6"
        >
          <div className="inline-flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-white/50 px-6 py-2 backdrop-blur-sm dark:border-neutral-700 dark:bg-neutral-800/50">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
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

            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
          </div>

          <div className="absolute -inset-x-20 -inset-y-20 -z-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-30 blur-3xl" />
        </motion.div>
      </div>
    </Container>
  );
};

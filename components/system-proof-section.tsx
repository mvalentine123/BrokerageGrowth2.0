"use client";
import React, { useState, useEffect } from "react";
import { Container } from "./container";
import { motion } from "motion/react";
import { GridBackground } from "./common/grid-background";

const capabilityLines = [
  { text: "Recruiting that books real", highlight: "conversations", suffix: "." },
  { text: "Onboarding that drives", highlight: "week-one adoption", suffix: "." },
  { text: "Training that creates", highlight: "production", suffix: ", not just completion." },
  { text: "Follow-up that runs", highlight: "daily", suffix: " without you chasing." },
];

const metricCards = [
  {
    title: "12 Appointments",
    subtitle: "Booked This Week",
    rotation: -2,
    delay: 0.1,
    position: { top: "5%", left: "5%" },
  },
  {
    title: "Reply Rate",
    subtitle: "37%",
    rotation: 1.5,
    delay: 0.2,
    position: { top: "15%", right: "10%" },
  },
  {
    title: "New Agent",
    subtitle: "Joined",
    rotation: -1,
    delay: 0.3,
    position: { top: "40%", left: "0%" },
  },
  {
    title: "Onboarding Progress",
    subtitle: "82%",
    rotation: 2,
    delay: 0.4,
    position: { top: "50%", right: "5%" },
  },
  {
    title: "Pipeline",
    subtitle: "44 Agents",
    rotation: -1.5,
    delay: 0.5,
    position: { bottom: "20%", left: "15%" },
  },
  {
    title: "Follow-up",
    subtitle: "Triggered",
    rotation: 0.5,
    delay: 0.6,
    position: { bottom: "5%", right: "15%" },
  },
];

export const SystemProofSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <Container className="border-divide relative overflow-hidden border-x py-20 md:py-32">
      <GridBackground />

      <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Built for modern brokerages
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl dark:text-neutral-50">
            Recruiting isn't outreach.
            <br />
            It's conversions.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
            The fastest-growing brokerages don't rely on motivation.
            They run systems that turn conversations into appointments,
            appointments into agents, and agents into production.
          </p>

          <div className="mt-8 space-y-3">
            {capabilityLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut",
                }}
                className="text-base leading-relaxed text-neutral-700 md:text-lg dark:text-neutral-200"
              >
                {line.text}{" "}
                <span className="font-semibold text-orange-600 dark:text-orange-500">
                  {line.highlight}
                </span>
                {line.suffix}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative h-[500px] md:h-[600px]">
          {metricCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: card.delay,
                ease: "easeOut",
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              animate={{
                y: [0, -4, 0],
                transition: {
                  duration: 6 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              style={{
                rotate: isMobile ? 0 : card.rotation,
                ...card.position,
              }}
              className="absolute rounded-xl border border-neutral-200 bg-white p-6 shadow-lg dark:border-neutral-700 dark:bg-neutral-800"
            >
              <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                {card.title}
              </div>
              <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {card.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

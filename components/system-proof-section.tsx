"use client";
import React, { useState, useEffect } from "react";
import { Container } from "./container";
import { motion } from "motion/react";

const leftCards = [
  {
    title: "12 Appointments",
    subtitle: "Booked This Week",
    delay: 0.1,
    rotation: -1.5,
  },
  {
    title: "Reply Rate",
    subtitle: "37%",
    delay: 0.2,
    rotation: 1,
  },
  {
    title: "44 Agents",
    subtitle: "in Pipeline",
    delay: 0.3,
    rotation: -0.5,
  },
];

const rightCards = [
  {
    title: "3 New Agents",
    subtitle: "Joined",
    delay: 0.1,
    rotation: 1.5,
  },
  {
    title: "Onboarding Completion",
    subtitle: "82%",
    delay: 0.2,
    rotation: -1,
  },
  {
    title: "Follow-Up Sequence",
    subtitle: "Triggered",
    delay: 0.3,
    rotation: 0.5,
  },
];

export const SystemProofSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Container className="border-divide relative overflow-hidden border-x py-20 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] opacity-30 [background-size:16px_16px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-neutral-900/50" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-neutral-200/20 to-transparent blur-3xl dark:from-neutral-700/10" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center lg:flex-row lg:items-start lg:gap-12">
        <div className="hidden lg:flex lg:w-1/4 lg:flex-col lg:gap-6 lg:pt-32">
          {leftCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                  delay: card.delay,
                  ease: [0.22, 1, 0.36, 1],
                },
                y: {
                  duration: 8 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 0.8,
                  delay: card.delay,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              style={{
                rotate: isMobile ? 0 : card.rotation,
              }}
              className="group rounded-xl border border-neutral-200/80 bg-white p-6 shadow-lg shadow-neutral-200/50 transition-shadow hover:shadow-xl hover:shadow-neutral-300/50 dark:border-neutral-700/80 dark:bg-neutral-800 dark:shadow-neutral-900/50 dark:hover:shadow-neutral-900/70"
            >
              <div className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                {card.title}
              </div>
              <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {card.subtitle}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center lg:w-1/2"
        >
          <h2 className="text-[2.75rem] font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-6xl lg:text-[4rem] dark:text-neutral-50">
            Brokerages don&apos;t grow from motivation.
            <br />
            They grow from systems.
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400"
          >
            The fastest-growing brokerages don&apos;t rely on hope or hustle.
            <br />
            They run recruiting infrastructure that turns conversations into
            appointments,
            <br />
            appointments into agents, and agents into production.
          </motion.p>

          <div className="mt-12 space-y-4 text-left lg:text-center">
            {[
              {
                text: "Recruiting",
                highlight: true,
                rest: " that books real conversations.",
              },
              {
                text: "Follow-up",
                highlight: true,
                rest: " that runs daily without you chasing.",
              },
              {
                text: "Onboarding",
                highlight: true,
                rest: " that drives week-one adoption.",
              },
              {
                text: "Training",
                highlight: true,
                rest: " that creates production, not just completion.",
              },
            ].map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-lg leading-relaxed text-neutral-700 md:text-xl dark:text-neutral-300"
              >
                <span className="font-semibold text-orange-600 dark:text-orange-500">
                  {line.text}
                </span>
                {line.rest}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <div className="hidden lg:flex lg:w-1/4 lg:flex-col lg:gap-6 lg:pt-32">
          {rightCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                  delay: card.delay,
                  ease: [0.22, 1, 0.36, 1],
                },
                y: {
                  duration: 8 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 0.8,
                  delay: card.delay,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              style={{
                rotate: isMobile ? 0 : card.rotation,
              }}
              className="group rounded-xl border border-neutral-200/80 bg-white p-6 shadow-lg shadow-neutral-200/50 transition-shadow hover:shadow-xl hover:shadow-neutral-300/50 dark:border-neutral-700/80 dark:bg-neutral-800 dark:shadow-neutral-900/50 dark:hover:shadow-neutral-900/70"
            >
              <div className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
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

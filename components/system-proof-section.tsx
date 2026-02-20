"use client";
import React, { useState, useEffect } from "react";
import { Container } from "./container";
import { motion } from "motion/react";

const leftCards = [
  {
    title: "90%+",
    subtitle: "Reply rate",
    delay: 0.1,
  },
  {
    title: "New inbound reply",
    subtitle: "Qualified",
    delay: 0.2,
  },
  {
    title: "4 Live",
    subtitle: "Conversations",
    delay: 0.3,
  },
];

const rightCards = [
  {
    title: "Recruiting",
    subtitle: "Best channel wins",
    delay: 0.1,
  },
  {
    title: "Conversation",
    subtitle: "No templates. No approvals.",
    delay: 0.2,
  },
  {
    title: "Follow-up",
    subtitle: "Triggered",
    delay: 0.3,
  },
];

export const SystemProofSection = () => {
  return (
    <Container className="border-divide border-x py-20 md:py-32">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center lg:flex-row lg:items-start lg:gap-12">
        <div className="hidden lg:flex lg:w-1/4 lg:flex-col lg:gap-4 lg:pt-32">
          {leftCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: card.delay,
                ease: "easeOut",
              }}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
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
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:w-1/2"
        >
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 md:text-5xl lg:text-6xl dark:text-neutral-50">
            Messaging isn't just about sends.
            <br />
            It's about replies.
          </h2>

          <div className="mt-8 space-y-2 text-left lg:text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg leading-relaxed text-neutral-700 md:text-xl dark:text-neutral-200"
            >
              <span className="font-semibold text-blue-600 dark:text-blue-500">
                iMessage
              </span>{" "}
              automation. 90% reply rates.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-lg leading-relaxed text-neutral-700 md:text-xl dark:text-neutral-200"
            >
              <span className="font-semibold text-green-600 dark:text-green-500">
                SMS
              </span>{" "}
              without footers. No spam markers.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-lg leading-relaxed text-neutral-700 md:text-xl dark:text-neutral-200"
            >
              <span className="font-semibold text-emerald-600 dark:text-emerald-500">
                WhatsApp
              </span>{" "}
              without templates. No approvals.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="text-lg leading-relaxed text-neutral-700 md:text-xl dark:text-neutral-200"
            >
              <span className="font-semibold text-orange-600 dark:text-orange-500">
                Twilio
              </span>{" "}
              routing. Your existing numbers.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="mt-8 text-xl font-semibold leading-relaxed text-neutral-900 md:text-2xl dark:text-neutral-50"
          >
            All four. Your{" "}
            <span className="text-brand">GHL</span>. Your infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="mt-6 space-y-2"
          >
            <p className="text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-300">
              Because agencies shouldn't look like spam.
            </p>
            <p className="text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-300">
              You should look human.
            </p>
          </motion.div>
        </motion.div>

        <div className="hidden lg:flex lg:w-1/4 lg:flex-col lg:gap-4 lg:pt-32">
          {rightCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: card.delay,
                ease: "easeOut",
              }}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
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

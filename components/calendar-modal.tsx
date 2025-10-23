"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CloseIcon } from "@/icons/general";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendarModal = ({ isOpen, onClose }: CalendarModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      const script = document.createElement("script");
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (typeof window !== "undefined" && (window as any).Cal) {
          const Cal = (window as any).Cal;
          Cal("init", "zoom", { origin: "https://app.cal.com" });

          Cal.ns.zoom("inline", {
            elementOrSelector: "#my-cal-inline-zoom",
            config: { layout: "month_view" },
            calLink: "mvalentine/zoom",
          });

          Cal.ns.zoom("ui", {
            cssVarsPerTheme: {
              light: { "cal-brand": "#204156" },
              dark: { "cal-brand": "#fafafa" },
            },
            hideEventTypeDetails: true,
            layout: "month_view",
          });
        }
      };

      return () => {
        document.body.style.overflow = "auto";
        const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-4 z-[101] mx-auto my-auto flex h-fit max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:inset-8 dark:bg-neutral-900"
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-neutral-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Book a Call
              </h2>
              <button
                onClick={onClose}
                className="flex size-8 items-center justify-center rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800"
                aria-label="Close calendar"
              >
                <CloseIcon className="size-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-6">
              <div
                id="my-cal-inline-zoom"
                className="h-full min-h-[600px] w-full"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

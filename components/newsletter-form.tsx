"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { SendIcon } from "@/icons/bento-icons";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;

    const value = email.trim();
    if (!value) {
      setStatus("error");
      setMessage("Please enter your email.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: value }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      setStatus("error");
      setMessage(typeof data.error === "string" ? data.error : "Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <p className="text-footer-link text-sm font-medium text-green-600 dark:text-green-400">
        Thanks! Check your inbox for the blueprint.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 w-full">
      <div className="flex w-full items-center rounded-xl border border-gray-300 bg-gray-200 p-1 placeholder-gray-600 dark:border-neutral-700 dark:bg-neutral-800">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="flex-1 bg-transparent px-2 text-sm outline-none focus:outline-none disabled:opacity-70"
          aria-label="Email for newsletter"
          autoComplete="email"
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="my-0 flex size-8 shrink-0 items-center justify-center rounded-lg px-0 py-0 text-center disabled:opacity-70"
        >
          <SendIcon />
        </Button>
      </div>
      {status === "error" && message && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}

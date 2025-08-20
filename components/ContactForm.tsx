"use client";

import { useState } from "react";
import { Button } from "@/components/Button";

export default function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState<null | "ok" | "fail">(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state)
      });
      const data = await res.json();
      setSent(data.ok ? "ok" : "fail");
      if (data.ok) setState({ name: "", email: "", message: "" });
    } catch {
      setSent("fail");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4" aria-label="Contact form">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[hsl(var(--content))]">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand-primary"
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--content))]">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand-primary"
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[hsl(var(--content))]">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand-primary"
          aria-required="true"
        />
      </div>

      <Button type="submit" variant="cta" aria-label="Send message" disabled={loading}>
        {loading ? "Sending..." : sent === "ok" ? "Sent ✓" : "Send"}
      </Button>
      {sent === "fail" && <p className="text-sm text-red-600">Something went wrong. Try again.</p>}
      
    </form>
  );
}

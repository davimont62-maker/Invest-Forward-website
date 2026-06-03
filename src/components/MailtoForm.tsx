"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";

type MailtoFormProps = {
  subject: string;
  className: string;
  children: ReactNode;
};

const recipient = "enquiries@investforward.co.uk";

export default function MailtoForm({ subject, className, children }: MailtoFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  function openMailClient(form: HTMLFormElement) {
    const formData = new FormData(form);
    const lines: string[] = [];

    formData.forEach((value, key) => {
      if (key === "subject") {
        return;
      }

      const text = String(value).trim();

      if (text) {
        const label = key
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (letter) => letter.toUpperCase());
        lines.push(`${label}: ${text}`);
      }
    });

    const body = encodeURIComponent(lines.join("\n\n"));
    const encodedSubject = encodeURIComponent(subject);
    window.location.href = `mailto:${recipient}?subject=${encodedSubject}&body=${body}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("subject", subject);
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (response.ok && result.ok) {
        setStatus("sent");
        setMessage("Thank you. Your enquiry has been sent to Invest Forward.");
        form.reset();
        return;
      }

      if (result.fallback) {
        openMailClient(form);
        setStatus("idle");
        return;
      }

      setStatus("error");
      setMessage(result.message || "There was a problem sending your enquiry.");
    } catch {
      setStatus("error");
      setMessage("There was a problem sending your enquiry. Please email the team directly.");
    }
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <input type="hidden" name="subject" value={subject} />
      {children}
      {message ? (
        <p className={`form-status ${status === "sent" ? "is-success" : "is-error"}`} aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}

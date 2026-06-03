"use client";

import type { FormEvent, ReactNode } from "react";

type MailtoFormProps = {
  subject: string;
  className: string;
  children: ReactNode;
};

const recipient = "enquiries@investforward.co.uk";

export default function MailtoForm({ subject, className, children }: MailtoFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const lines: string[] = [];

    formData.forEach((value, key) => {
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

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

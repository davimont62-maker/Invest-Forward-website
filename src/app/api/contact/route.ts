import nodemailer from "nodemailer";

export const runtime = "nodejs";

const defaultRecipient = "enquiries@investforward.co.uk";

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function labelFromKey(key: string) {
  return key
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const subject = clean(formData.get("subject")) || "Invest Forward website enquiry";

  if (!name || !email) {
    return Response.json({ ok: false, message: "Please provide your name and email." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
  const smtpPort = Number(process.env.SMTP_PORT || "465");
  const smtpUser = process.env.SMTP_USER || defaultRecipient;
  const smtpPass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO || defaultRecipient;

  if (!smtpPass) {
    return Response.json(
      {
        ok: false,
        fallback: true,
        message: "Email delivery is not configured yet.",
      },
      { status: 503 },
    );
  }

  const rows: string[] = [];

  formData.forEach((value, key) => {
    if (key === "subject") {
      return;
    }

    const text = clean(value);

    if (text) {
      rows.push(`${labelFromKey(key)}: ${text}`);
    }
  });

  const text = [
    "New Invest Forward website enquiry",
    "",
    ...rows,
    "",
    `Submitted: ${new Date().toISOString()}`,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #17202a; line-height: 1.5;">
      <h2 style="margin: 0 0 16px;">New Invest Forward website enquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        ${rows
          .map((row) => {
            const [label, ...rest] = row.split(": ");
            const value = rest.join(": ");
            return `<tr><th style="text-align:left; vertical-align:top; padding:8px 12px; border-bottom:1px solid #e5e7eb; width:190px;">${escapeHtml(label)}</th><td style="padding:8px 12px; border-bottom:1px solid #e5e7eb;">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`;
          })
          .join("")}
      </table>
    </div>
  `;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"Invest Forward Website" <${smtpUser}>`,
    to,
    replyTo: email,
    subject,
    text,
    html,
  });

  return Response.json({ ok: true, message: "Your enquiry has been sent." });
}

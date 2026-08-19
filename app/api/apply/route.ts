import { NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_EMAIL = process.env.APPLICATION_NOTIFY_EMAIL || "manuel@trance-ai.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Vuria <onboarding@resend.dev>";

type Payload = {
  founderName: string;
  email: string;
  role: string;
  companyName: string;
  oneLiner: string;
  problem: string;
  stage: string;
  demoLink?: string;
  backers?: string;
  source?: string;
  company_website?: string;
};

const requiredFields: (keyof Payload)[] = [
  "founderName",
  "email",
  "role",
  "companyName",
  "oneLiner",
  "problem",
  "stage",
];

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.company_website) {
    return NextResponse.json({ ok: true });
  }

  for (const field of requiredFields) {
    if (!body[field] || !String(body[field]).trim()) {
      return NextResponse.json({ error: `Missing ${field}.` }, { status: 400 });
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set — application not sent.");
    return NextResponse.json({ error: "Server not configured." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      replyTo: body.email,
      subject: `Vuria application: ${body.companyName}`,
      text: [
        `Founder: ${body.founderName} (${body.role})`,
        `Email: ${body.email}`,
        `Company: ${body.companyName}`,
        `One-liner: ${body.oneLiner}`,
        `Stage: ${body.stage}`,
        `Problem: ${body.problem}`,
        body.demoLink ? `Demo link: ${body.demoLink}` : null,
        body.backers ? `Existing funding/backers: ${body.backers}` : null,
        body.source ? `Heard about us via: ${body.source}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend rejected the send", error);
      return NextResponse.json({ error: "Failed to send." }, { status: 502 });
    }
  } catch (err) {
    console.error("Resend send failed", err);
    return NextResponse.json({ error: "Failed to send." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

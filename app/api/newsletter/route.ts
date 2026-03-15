import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.NEWSLETTER_FROM_EMAIL;
const NOTIFY_EMAIL = process.env.NEWSLETTER_NOTIFY_EMAIL;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && value.length > 0 && EMAIL_REGEX.test(value.trim());
}

export async function POST(request: Request) {
  if (!RESEND_API_KEY || !FROM_EMAIL || !NOTIFY_EMAIL) {
    console.error("Newsletter API: Missing RESEND_API_KEY, NEWSLETTER_FROM_EMAIL, or NEWSLETTER_NOTIFY_EMAIL");
    return NextResponse.json(
      { error: "Newsletter signup is not configured." },
      { status: 503 }
    );
  }

  let body: { email?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const rawEmail = body?.email;
  if (!isValidEmail(rawEmail)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const email = rawEmail.trim().toLowerCase();
  const resend = new Resend(RESEND_API_KEY);

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: [NOTIFY_EMAIL],
        subject: `New footer signup: ${email}`,
        text: `A new subscriber signed up via the footer.\n\nEmail: ${email}`,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: "You're in — here's the blueprint",
        text: "Thanks for signing up. You're on the list for the recruiting systems and growth infrastructure behind scaling to 100 agents.",
        html: "<p>Thanks for signing up. You're on the list for the recruiting systems and growth infrastructure behind scaling to 100 agents.</p>",
      }),
    ]);
  } catch (err) {
    console.error("Newsletter signup error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }

  try {
    await resend.contacts.create({
      email,
      unsubscribed: false,
    });
  } catch (contactErr) {
    // Contact creation is best-effort; don't fail the request if it errors (e.g. duplicate)
    console.warn("Newsletter: could not create Resend contact:", contactErr);
  }

  return NextResponse.json({ success: true });
}

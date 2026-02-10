import { NextResponse } from "next/server";
import type { ContactFormData } from "@/components/forms/ContactForm";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactFormData;

    if (!data.name || !data.email || !data.projectDetails) {
      return NextResponse.json(
        { error: "Name, email, and project details are required" },
        { status: 400 }
      );
    }

    // Wire to Resend, SendGrid, or Azure Function here.
    // Example with Resend: await resend.emails.send({ from, to, subject, html });
    // For now we accept and return success so the form works in development.
    if (process.env.CONTACT_EMAIL_ENABLED !== "true") {
      return NextResponse.json({ ok: true });
    }

    // TODO: Send email via your preferred provider
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/data/site";

// Nodemailer needs the Node.js runtime (not Edge).
export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const MONO =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

/**
 * Portfolio-styled HTML email (dark card, coral accent, terminal header).
 * Uses table layout + inline styles for broad email-client support.
 */
function renderEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin:0;padding:0;background-color:#06070a;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#06070a;font-size:1px;line-height:1px;">New message from ${safeName} via your portfolio.</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#06070a;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background-color:#0b0e14;border:1px solid #20262e;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="height:3px;background-color:#d97757;line-height:3px;font-size:3px;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:16px 24px;border-bottom:1px solid #20262e;font-family:${MONO};font-size:13px;color:#6b7480;">
                <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:#ff5f56;margin-right:6px;"></span>
                <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:#ffbd2e;margin-right:6px;"></span>
                <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background-color:#27c93f;margin-right:12px;"></span>
                marc@esteban:~$ new-message
              </td>
            </tr>
            <tr>
              <td style="padding:28px 24px 4px;">
                <div style="font-family:${MONO};font-size:13px;color:#d97757;margin-bottom:8px;">$ new portfolio contact</div>
                <div style="font-family:${SANS};font-size:22px;font-weight:700;color:#e6e8ec;">You&rsquo;ve got a new message</div>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px 4px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:6px 0;font-family:${MONO};font-size:12px;letter-spacing:0.5px;color:#d97757;width:78px;vertical-align:top;">NAME</td>
                    <td style="padding:6px 0;font-family:${SANS};font-size:15px;color:#e6e8ec;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;font-family:${MONO};font-size:12px;letter-spacing:0.5px;color:#d97757;vertical-align:top;">EMAIL</td>
                    <td style="padding:6px 0;font-family:${SANS};font-size:15px;"><a href="mailto:${safeEmail}" style="color:#d97757;text-decoration:none;">${safeEmail}</a></td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 24px 26px;">
                <div style="font-family:${MONO};font-size:12px;letter-spacing:0.5px;color:#6b7480;margin-bottom:8px;">MESSAGE</div>
                <div style="background-color:#12161d;border:1px solid #20262e;border-left:3px solid #d97757;border-radius:8px;padding:16px 18px;font-family:${SANS};font-size:15px;line-height:1.65;color:#cbd2dc;">${safeMessage}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px 22px;border-top:1px solid #20262e;font-family:${MONO};font-size:12px;color:#6b7480;">
                Sent from your portfolio contact form &middot; reply to this email to respond to ${safeName}.
              </td>
            </tr>
          </table>
          <div style="font-family:${MONO};font-size:11px;color:#3a424d;margin-top:16px;">marc esteban &mdash; portfolio</div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  // Honeypot: silently accept bot submissions without sending mail.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Server-side validation.
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 },
    );
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO || site.email;

  if (!user || !pass) {
    // Misconfiguration — don't leak details, but log for the operator.
    console.error(
      "Contact form: GMAIL_USER / GMAIL_APP_PASSWORD env vars are not set.",
    );
    return NextResponse.json(
      { error: "Email service is not configured yet. Please email me directly." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `New portfolio message from ${name}`,
      text: `New portfolio contact\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
      html: renderEmail({ name, email, message }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: failed to send email —", err);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 502 },
    );
  }
}

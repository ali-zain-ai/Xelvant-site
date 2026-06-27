import { NextResponse } from "next/server";
import { Resend } from "resend";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { name, email, store, revenue, challenge } = body;

    // Validate required fields
    if (!name || !email || !store || !revenue) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const firstName = name.split(" ")[0];
    const senderAddress = process.env.CONTACT_EMAIL || "hello@xelvant.dev";
    const fromAddress = "Xelvant <hello@xelvant.dev>";

    // ─── Email to Xelvant team ───
    await resend.emails.send({
      from: fromAddress,
      to: senderAddress,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      text: `New Inquiry\n\nName: ${name}\nEmail: ${email}\nWebsite: ${store}\nMonthly Revenue: ${revenue}\n${challenge ? `Challenge: ${challenge}\n` : ""}\n\nReply to this email to respond directly to ${name}.`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f7f7f8;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f8;padding:40px 20px;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

  <!-- Header -->
  <tr><td style="background:#09090b;padding:32px 40px;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td><span style="font-size:22px;font-weight:800;color:#eebc4a;letter-spacing:-0.5px;">X</span><span style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">elvant</span></td>
        <td align="right"><span style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#eebc4a;font-weight:600;">New Lead</span></td>
      </tr>
    </table>
  </td></tr>

  <!-- Title -->
  <tr><td style="padding:32px 40px 16px;">
    <h1 style="margin:0;font-size:24px;font-weight:700;color:#09090b;">New Client Inquiry</h1>
    <p style="margin:6px 0 0;font-size:14px;color:#6b7280;">Submitted from xelvant.dev contact form</p>
  </td></tr>

  <!-- Divider -->
  <tr><td style="padding:0 40px;"><div style="height:1px;background:#e5e7eb;"></div></td></tr>

  <!-- Details -->
  <tr><td style="padding:24px 40px;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding:12px 0;vertical-align:top;width:140px;">
          <span style="font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#9ca3af;font-weight:600;">Full Name</span>
        </td>
        <td style="padding:12px 0;font-size:15px;font-weight:600;color:#111827;">${name}</td>
      </tr>
      <tr><td colspan="2" style="padding:0;"><div style="height:1px;background:#f3f4f6;"></div></td></tr>
      <tr>
        <td style="padding:12px 0;vertical-align:top;">
          <span style="font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#9ca3af;font-weight:600;">Email</span>
        </td>
        <td style="padding:12px 0;font-size:15px;color:#111827;">
          <a href="mailto:${email}" style="color:#b37903;text-decoration:none;font-weight:500;">${email}</a>
        </td>
      </tr>
      <tr><td colspan="2" style="padding:0;"><div style="height:1px;background:#f3f4f6;"></div></td></tr>
      <tr>
        <td style="padding:12px 0;vertical-align:top;">
          <span style="font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#9ca3af;font-weight:600;">Website</span>
        </td>
        <td style="padding:12px 0;font-size:15px;color:#111827;">
          <a href="${store}" style="color:#b37903;text-decoration:none;font-weight:500;">${store}</a>
        </td>
      </tr>
      <tr><td colspan="2" style="padding:0;"><div style="height:1px;background:#f3f4f6;"></div></td></tr>
      <tr>
        <td style="padding:12px 0;vertical-align:top;">
          <span style="font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#9ca3af;font-weight:600;">Revenue</span>
        </td>
        <td style="padding:12px 0;">
          <span style="display:inline-block;background:#fef9ee;color:#b37903;font-size:13px;font-weight:700;padding:4px 12px;border-radius:20px;">${revenue}</span>
        </td>
      </tr>
      ${challenge ? `
      <tr><td colspan="2" style="padding:0;"><div style="height:1px;background:#f3f4f6;"></div></td></tr>
      <tr>
        <td style="padding:12px 0;vertical-align:top;">
          <span style="font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#9ca3af;font-weight:600;">Challenge</span>
        </td>
        <td style="padding:12px 0;font-size:15px;color:#374151;line-height:1.6;">${challenge}</td>
      </tr>
      ` : ""}
    </table>
  </td></tr>

  <!-- Action -->
  <tr><td style="padding:8px 40px 32px;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td style="background:#f9fafb;border-radius:12px;padding:16px 20px;">
        <p style="margin:0;font-size:13px;color:#6b7280;text-align:center;">
          Hit <strong>Reply</strong> to respond directly to ${firstName}
        </p>
      </td></tr>
    </table>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>
      `,
    });

    // ─── Auto-reply to client ───
    await resend.emails.send({
      from: fromAddress,
      replyTo: senderAddress,
      to: email,
      subject: `Your Inquiry is Under Review - Xelvant`,
      text: `Hi ${firstName},\n\nThank you for reaching out to Xelvant.\n\nYour inquiry has been successfully received. Our intelligence team is currently reviewing your details and will follow up with you within 24 hours.\n\nBest regards,\nThe Xelvant Team\nhttps://xelvant.dev`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#F0EDE5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F0EDE5;padding:60px 20px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 20px 40px -10px rgba(0,70,67,0.1);border:1px solid rgba(0,70,67,0.08);">

  <!-- Header -->
  <tr><td style="background-color:#002221;padding:48px 40px;text-align:center;">
    <span style="font-size:32px;font-weight:800;color:#F0EDE5;letter-spacing:-1px;">Xelvant</span>
    <div style="margin-top:12px;font-size:11px;text-transform:uppercase;letter-spacing:4px;color:#4A6361;font-weight:600;">E-Commerce Intelligence</div>
  </td></tr>

  <!-- Gold Accent Line -->
  <tr><td><div style="height:4px;background-color:#004643;"></div></td></tr>

  <!-- Body Content -->
  <tr><td style="padding:48px 48px 16px;">
    <h1 style="margin:0;font-size:24px;font-weight:700;color:#002221;letter-spacing:-0.5px;line-height:1.3;">
      Inquiry Received, ${firstName}.
    </h1>
    <p style="margin:24px 0 0;font-size:16px;color:#4A6361;line-height:1.8;">
      Thank you for contacting Xelvant. Your details have been successfully secured in our system. Our intelligence team is currently reviewing your e-commerce profile and revenue data.
    </p>
    <p style="margin:24px 0 0;font-size:16px;color:#4A6361;line-height:1.8;">
      You can expect a direct response from our strategy team within <strong>24 hours</strong> regarding your next steps.
    </p>
  </td></tr>

  <!-- Submission Details -->
  <tr><td style="padding:32px 48px;">
    <div style="background-color:#F0EDE5;border-radius:8px;padding:24px;">
      <h2 style="margin:0 0 16px;font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:#004643;font-weight:700;">Submission Summary</h2>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:12px 0;font-size:14px;color:#4A6361;border-bottom:1px solid rgba(0,70,67,0.1);">Website</td>
          <td style="padding:12px 0;font-size:14px;font-weight:600;color:#002221;text-align:right;border-bottom:1px solid rgba(0,70,67,0.1);">${store}</td>
        </tr>
        <tr>
          <td style="padding:12px 0;font-size:14px;color:#4A6361;">Revenue Range</td>
          <td style="padding:12px 0;font-size:14px;font-weight:600;color:#004643;text-align:right;">${revenue}</td>
        </tr>
      </table>
    </div>
  </td></tr>

  <!-- Footer -->
  <tr><td style="padding:48px;background-color:#ffffff;border-top:1px solid rgba(0,70,67,0.08);text-align:center;">
    <p style="margin:0;font-size:13px;color:#4A6361;">
      If you have any urgent questions, simply reply directly to this email.
    </p>
    <p style="margin:24px 0 0;font-size:12px;color:#8E9A99;">
      &copy; ${new Date().getFullYear()} Xelvant. All rights reserved.<br>
      E-Commerce Intelligence &bull; <a href="https://xelvant.dev" style="color:#004643;text-decoration:none;font-weight:600;">xelvant.dev</a>
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Something went wrong: ${message}` },
      { status: 500 }
    );
  }
}

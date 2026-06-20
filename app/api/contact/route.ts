import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Force Node.js runtime (required for Nodemailer on Vercel)
export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, store, revenue, challenge } = body;

    // Validate required fields
    if (!name || !email || !store || !revenue) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();

    const firstName = name.split(" ")[0];

    // ─── Email to Xelvant team ───
    await transporter.sendMail({
      from: {
        name: "Xelvant Revenue Audit",
        address: process.env.SMTP_USER!,
      },
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `Revenue Audit Request from ${name}`,
      headers: {
        "X-Mailer": "Xelvant Contact System",
        "X-Priority": "1",
      },
      text: `New Revenue Audit Request\n\nName: ${name}\nEmail: ${email}\nStore: ${store}\nMonthly Revenue: ${revenue}\n${challenge ? `Challenge: ${challenge}\n` : ""}\n\nReply to this email to respond directly to ${name}.`,
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
    <h1 style="margin:0;font-size:24px;font-weight:700;color:#09090b;">Revenue Audit Request</h1>
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
          <span style="font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#9ca3af;font-weight:600;">Store URL</span>
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

    // ─── Auto-reply to client (Premium) ───
    await transporter.sendMail({
      from: {
        name: "Xelvant",
        address: process.env.SMTP_USER!,
      },
      to: email,
      subject: `${firstName}, we received your audit request`,
      headers: {
        "X-Mailer": "Xelvant Contact System",
        "List-Unsubscribe": "<mailto:hello@xelvant.dev?subject=unsubscribe>",
        "Precedence": "bulk",
      },
      text: `Hi ${firstName},\n\nThank you for requesting a Revenue Audit from Xelvant.\n\nWe have received your details and our team will review your store within 24 hours. You will hear from us soon with next steps.\n\nWhat happens next:\n1. We review your store data (read-only access)\n2. We identify revenue leaks and growth opportunities\n3. We send you a clear, actionable report\n\nIf you have any questions in the meantime, simply reply to this email.\n\nBest regards,\nThe Xelvant Team\nhttps://xelvant.dev`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f7f7f8;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f8;padding:40px 20px;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

  <!-- Header with logo -->
  <tr><td style="background:#09090b;padding:36px 40px;text-align:center;">
    <span style="font-size:28px;font-weight:800;color:#eebc4a;letter-spacing:-0.5px;">X</span><span style="font-size:28px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">elvant</span>
    <p style="margin:8px 0 0;font-size:12px;text-transform:uppercase;letter-spacing:3px;color:#6b7280;">Revenue Intelligence</p>
  </td></tr>

  <!-- Gold accent bar -->
  <tr><td><div style="height:3px;background:linear-gradient(90deg,#b37903,#eebc4a,#b37903);"></div></td></tr>

  <!-- Greeting -->
  <tr><td style="padding:40px 40px 8px;">
    <h1 style="margin:0;font-size:26px;font-weight:700;color:#09090b;line-height:1.3;">
      Thank you, ${firstName}
    </h1>
    <p style="margin:12px 0 0;font-size:15px;color:#4b5563;line-height:1.7;">
      We have received your Revenue Audit request and our team is already on it. You will hear from us within <strong style="color:#09090b;">24 hours</strong>.
    </p>
  </td></tr>

  <!-- Divider -->
  <tr><td style="padding:24px 40px 0;"><div style="height:1px;background:#e5e7eb;"></div></td></tr>

  <!-- What happens next -->
  <tr><td style="padding:28px 40px 0;">
    <h2 style="margin:0 0 20px;font-size:14px;text-transform:uppercase;letter-spacing:2px;color:#9ca3af;font-weight:700;">What happens next</h2>
    
    <table width="100%" cellpadding="0" cellspacing="0">
      <!-- Step 1 -->
      <tr>
        <td style="width:48px;vertical-align:top;padding:0 0 20px;">
          <div style="width:36px;height:36px;border-radius:10px;background:#fef9ee;text-align:center;line-height:36px;">
            <span style="font-size:16px;font-weight:800;color:#b37903;">1</span>
          </div>
        </td>
        <td style="vertical-align:top;padding:2px 0 20px;">
          <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">Store Review</p>
          <p style="margin:4px 0 0;font-size:13px;color:#6b7280;line-height:1.5;">We analyze your store data with read-only access. Your data stays private and encrypted.</p>
        </td>
      </tr>
      <!-- Step 2 -->
      <tr>
        <td style="width:48px;vertical-align:top;padding:0 0 20px;">
          <div style="width:36px;height:36px;border-radius:10px;background:#fef9ee;text-align:center;line-height:36px;">
            <span style="font-size:16px;font-weight:800;color:#b37903;">2</span>
          </div>
        </td>
        <td style="vertical-align:top;padding:2px 0 20px;">
          <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">Identify Opportunities</p>
          <p style="margin:4px 0 0;font-size:13px;color:#6b7280;line-height:1.5;">We find revenue leaks, weak cohorts, and hidden growth opportunities in your data.</p>
        </td>
      </tr>
      <!-- Step 3 -->
      <tr>
        <td style="width:48px;vertical-align:top;padding:0 0 4px;">
          <div style="width:36px;height:36px;border-radius:10px;background:#fef9ee;text-align:center;line-height:36px;">
            <span style="font-size:16px;font-weight:800;color:#b37903;">3</span>
          </div>
        </td>
        <td style="vertical-align:top;padding:2px 0 4px;">
          <p style="margin:0;font-size:15px;font-weight:600;color:#111827;">Actionable Report</p>
          <p style="margin:4px 0 0;font-size:13px;color:#6b7280;line-height:1.5;">You receive a clear, prioritized action plan ranked by revenue impact.</p>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- Divider -->
  <tr><td style="padding:24px 40px 0;"><div style="height:1px;background:#e5e7eb;"></div></td></tr>

  <!-- Your details summary -->
  <tr><td style="padding:28px 40px 0;">
    <h2 style="margin:0 0 16px;font-size:14px;text-transform:uppercase;letter-spacing:2px;color:#9ca3af;font-weight:700;">Your Submission</h2>
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:12px;overflow:hidden;">
      <tr>
        <td style="padding:14px 20px;font-size:13px;color:#6b7280;border-bottom:1px solid #e5e7eb;">Store</td>
        <td style="padding:14px 20px;font-size:14px;font-weight:600;color:#111827;text-align:right;border-bottom:1px solid #e5e7eb;">${store}</td>
      </tr>
      <tr>
        <td style="padding:14px 20px;font-size:13px;color:#6b7280;">Revenue</td>
        <td style="padding:14px 20px;font-size:14px;font-weight:600;color:#b37903;text-align:right;">${revenue}</td>
      </tr>
    </table>
  </td></tr>

  <!-- CTA -->
  <tr><td style="padding:32px 40px;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr><td align="center">
        <a href="https://xelvant.dev" style="display:inline-block;background:#09090b;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:14px 32px;border-radius:10px;letter-spacing:0.3px;">
          Visit Xelvant &rarr;
        </a>
      </td></tr>
    </table>
  </td></tr>

  <!-- Footer -->
  <tr><td style="background:#f9fafb;padding:24px 40px;border-top:1px solid #e5e7eb;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <p style="margin:0;font-size:12px;color:#9ca3af;">
            &copy; ${new Date().getFullYear()} Xelvant. All rights reserved.
          </p>
          <p style="margin:4px 0 0;font-size:12px;color:#9ca3af;">
            Revenue Intelligence for E-commerce
          </p>
        </td>
        <td align="right" style="vertical-align:top;">
          <a href="https://xelvant.dev" style="font-size:12px;color:#b37903;text-decoration:none;font-weight:500;">xelvant.dev</a>
        </td>
      </tr>
    </table>
  </td></tr>

</table>

<!-- Sub-footer -->
<table width="560" cellpadding="0" cellspacing="0">
  <tr><td style="padding:20px 0;text-align:center;">
    <p style="margin:0;font-size:11px;color:#9ca3af;">
      You are receiving this because you requested a Revenue Audit on xelvant.dev.
      <br>Questions? Reply to this email or contact us at <a href="mailto:hello@xelvant.dev" style="color:#b37903;text-decoration:none;">hello@xelvant.dev</a>
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

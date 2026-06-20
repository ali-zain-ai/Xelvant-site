import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to Xelvant team
    await transporter.sendMail({
      from: `"Xelvant Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Revenue Audit Request — ${name}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #e5e5e5; border-radius: 12px; overflow: hidden;">
          <div style="padding: 32px; border-bottom: 1px solid #222;">
            <h1 style="font-size: 20px; font-weight: 700; color: #eebc4a; margin: 0 0 4px;">
              New Revenue Audit Request
            </h1>
            <p style="font-size: 13px; color: #888; margin: 0;">
              Submitted from xelvant.dev contact form
            </p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px; width: 140px; vertical-align: top;">Full Name</td>
                <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #fff;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 10px 0; font-size: 14px; color: #fff;">
                  <a href="mailto:${email}" style="color: #eebc4a; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Store URL</td>
                <td style="padding: 10px 0; font-size: 14px; color: #fff;">${store}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Monthly Revenue</td>
                <td style="padding: 10px 0; font-size: 14px; font-weight: 600; color: #eebc4a;">${revenue}</td>
              </tr>
              ${challenge ? `
              <tr>
                <td style="padding: 10px 0; color: #888; font-size: 13px; vertical-align: top;">Challenge</td>
                <td style="padding: 10px 0; font-size: 14px; color: #fff;">${challenge}</td>
              </tr>
              ` : ""}
            </table>
          </div>
          <div style="padding: 20px 32px; background: #0a0a0a; text-align: center;">
            <p style="font-size: 11px; color: #555; margin: 0;">
              Reply directly to this email to respond to ${name}
            </p>
          </div>
        </div>
      `,
    });

    // Auto-reply to the client
    await transporter.sendMail({
      from: `"Xelvant" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your audit request — Xelvant",
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111; color: #e5e5e5; border-radius: 12px; overflow: hidden;">
          <div style="padding: 32px; border-bottom: 1px solid #222;">
            <h1 style="font-size: 20px; font-weight: 700; color: #eebc4a; margin: 0;">
              Thanks, ${name}
            </h1>
          </div>
          <div style="padding: 32px;">
            <p style="font-size: 14px; line-height: 1.7; color: #ccc; margin: 0 0 16px;">
              We received your revenue audit request and will review your store details within 24 hours.
            </p>
            <p style="font-size: 14px; line-height: 1.7; color: #ccc; margin: 0 0 16px;">
              If we need anything else, we will reach out to you directly at this email address.
            </p>
            <p style="font-size: 14px; line-height: 1.7; color: #888; margin: 0;">
              — The Xelvant Team
            </p>
          </div>
          <div style="padding: 20px 32px; background: #0a0a0a; text-align: center;">
            <p style="font-size: 11px; color: #555; margin: 0;">
              xelvant.dev · Revenue Intelligence for E-commerce
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

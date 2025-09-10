import nodemailer from "nodemailer";
import pug from "pug";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Gmail SMTP Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Compile Pug template
    const templatePath = path.join(process.cwd(), 'src', 'templates', 'emails', 'contact.pug');
    const htmlTemplate = pug.renderFile(templatePath, {
      name,
      email,
      phone,
      subject,
      message,
      priority: subject.toLowerCase().includes('urgent') ? 'urgent' : 'normal'
    });

    // Mail Options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CLIENT_EMAIL,
      subject: `Contact Form: ${subject}`,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Email sending failed. Please try again." },
      { status: 500 }
    );
  }
}
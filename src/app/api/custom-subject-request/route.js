import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import pug from 'pug';
import path from 'path';

export async function POST(request) {
  try {
    const { name, email, phone, grade, subject, preferredTime, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !grade || !subject) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Compile Pug template
    const templatePath = path.join(process.cwd(), 'src', 'templates', 'emails', 'custom-subject-request.pug');
    const htmlTemplate = pug.renderFile(templatePath, {
      name,
      email,
      phone,
      grade,
      subject,
      preferredTime: preferredTime || 'Not specified',
      message: message || '',
      timestamp: new Date().toLocaleString('en-US', { 
        timeZone: 'Asia/Kolkata', 
        dateStyle: 'full', 
        timeStyle: 'medium' 
      })
    });

    // Mail Options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CLIENT_EMAIL,
      subject: `Custom Subject Request: ${subject} - ${name}`,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Custom subject request submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Request submission failed. Please try again." },
      { status: 500 }
    );
  }
}
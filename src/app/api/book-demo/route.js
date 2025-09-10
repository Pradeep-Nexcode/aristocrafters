import nodemailer from "nodemailer";
import pug from "pug";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { 
      name, 
      email, 
      phone, 
      grade, 
      subject, 
      preferredDate, 
      preferredTime, 
      message 
    } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !grade || !subject) {
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
    const templatePath = path.join(process.cwd(), 'src', 'templates', 'emails', 'demo-booking.pug');
    const htmlTemplate = pug.renderFile(templatePath, {
      studentName: name,
      parentName: name,
      email,
      phone,
      grade,
      subjects: [subject],
      school: '',
      preferredDate: preferredDate || '',
      preferredTime: preferredTime || '',
      specificRequirements: message || '',
      previousExperience: ''
    });

    // Mail Options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CLIENT_EMAIL,
      subject: `Demo Class Booking Request: ${name} - ${subject}`,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Demo class booking request submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Booking request failed. Please try again." },
      { status: 500 }
    );
  }
}
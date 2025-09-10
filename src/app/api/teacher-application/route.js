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
      qualification, 
      experience, 
      subjects, 
      preferredMode, 
      availability, 
      expectedSalary, 
      additionalInfo 
    } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !qualification || !subjects || subjects.length === 0) {
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
    const templatePath = path.join(process.cwd(), 'src', 'templates', 'emails', 'teacher-application.pug');
    const htmlTemplate = pug.renderFile(templatePath, {
      name,
      email,
      phone,
      qualification,
      experience,
      subjects,
      preferredMode,
      availability,
      expectedSalary,
      additionalInfo
    });

    // Mail Options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CLIENT_EMAIL,
      subject: `New Teacher Application: ${name}`,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Teacher application submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Application submission failed. Please try again." },
      { status: 500 }
    );
  }
}
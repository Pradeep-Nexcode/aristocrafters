import nodemailer from "nodemailer";
import pug from "pug";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { 
      studentName, 
      parentName, 
      email, 
      phone, 
      grade, 
      board, 
      subjects, 
      preferredTiming, 
      additionalInfo 
    } = await request.json();

    // Validate required fields
    if (!studentName || !parentName || !email || !phone || !grade || !board || !subjects || subjects.length === 0) {
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
    const templatePath = path.join(process.cwd(), 'src', 'templates', 'emails', 'student-registration.pug');
    const htmlTemplate = pug.renderFile(templatePath, {
      studentName,
      parentName,
      email,
      phone,
      grade,
      board,
      subjects,
      timing: preferredTiming,
      classFormat: 'Online', // You can add this field to the form if needed
      address: '', // You can add this field to the form if needed
      additionalRequirements: additionalInfo || '' // You can add this field to the form if needed
    });

    // Mail Options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CLIENT_EMAIL,
      subject: `New Student Registration: ${studentName}`,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Student registration submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Registration submission failed. Please try again." },
      { status: 500 }
    );
  }
}
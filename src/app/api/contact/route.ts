import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Configure your email transporter securely using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // The email you will receive
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // Send to your own email
      subject: `New Partner Inquiry from ${name} (Rocketdesk)`,
      html: `
        <h2>New Partner Inquiry form submission</h2>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email", error);
    return NextResponse.json(
      { message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

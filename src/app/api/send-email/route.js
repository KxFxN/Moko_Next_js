import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, surname, phone, email, message } = body;

    console.log("Received request:", { name, surname, phone, email, message });

    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
    });

    console.log("OAuth2 client set up");

    const accessToken = await oauth2Client.getAccessToken();
    console.log("Access token obtained");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    console.log("Transporter created");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Moko Thailand From ${name}`,
      text: `
      ${message}

      Name: ${name} ${surname}
      Phone: ${phone}
      Email: ${email}
      `,
    };

    console.log("Sending email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Temporary GET endpoint to verify the API route
export async function GET() {
  return NextResponse.json({
    success: true,
    message: "API working",
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, subject, message } = body;

    // ---------- Validation ----------

    if (!name || name.trim().length < 3) {
      return NextResponse.json(
        {
          success: false,
          message: "Name must be at least 3 characters.",
        },
        { status: 400 }
      );
    }

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address.",
        },
        { status: 400 }
      );
    }

    const cleanedPhone = phone.replace(/\D/g, "");

    if (
      cleanedPhone.length !== 10 &&
      !(cleanedPhone.length === 12 && cleanedPhone.startsWith("91"))
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid phone number.",
        },
        { status: 400 }
      );
    }

    if (!subject || subject.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Subject is required.",
        },
        { status: 400 }
      );
    }

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is required.",
        },
        { status: 400 }
      );
    }

    // ---------- Send Email ----------

    const response = await resend.emails.send({
      from: "DSERVE <contact@dserve.co>",

      to: "dserveecosolutions@gmail.com",

      replyTo: email,

      subject: `New DSERVE Website Enquiry - ${subject}`,

      html: `
        <div style="font-family:Arial;padding:20px">

          <h2>New Website Enquiry</h2>

          <hr>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>

          <hr>

          <h3>Message</h3>

          <p>${message}</p>

        </div>
      `,
    });

    console.log("Resend Response:", response);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });

  } catch (error: any) {

    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
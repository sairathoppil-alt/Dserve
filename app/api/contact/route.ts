import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = body;

    const data = await resend.emails.send({
      from: "DSERVE <contact@dserve.co>",
      to: ["dserveecosolutions@gmail.com"],
      replyTo: email,

      subject: subject || "New DSERVE Enquiry",

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

          <p><strong>Subject:</strong> ${subject || "Not provided"}</p>

          <hr />

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        </div>
      `,
    });

    console.log("EMAIL SENT:", data);

    return Response.json({
      success: true,
      data,
    });

  } catch (error: any) {
    console.error("RESEND ERROR:", error);

    return Response.json(
      {
        success: false,
        message: error?.message || "Failed to send email",
      },
      {
        status: 500,
      }
    );
  }
}
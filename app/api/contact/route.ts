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

      from: "onboarding@resend.dev",

      to: "dserveecosolutions@gmail.com",

      subject: subject || "New DSERVE Enquiry",

      html: `
        <div style="font-family:Arial;padding:20px">

          <h2>New Contact Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <p><strong>Message:</strong></p>

          <p>${message}</p>

        </div>
      `,
    });

    return Response.json(data);

  } catch (error) {

    return Response.json(
      {
        error,
      },
      {
        status: 500,
      }
    );
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON data from the request
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, or message' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // You can change this after domain verification
      to: 'natnaeldarsema@gmail.com',
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
                .header { background: linear-gradient(135deg, #4361ee, #3a0ca3); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                .content { background: #f8f9fa; padding: 20px; }
                .details { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #4361ee; margin: 15px 0; }
                .footer { background: #e9ecef; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; color: #6c757d; }
            </style>
        </head>
        <body>
            <div class="header">
                <h2>📧 New Portfolio Contact</h2>
            </div>
            <div class="content">
                <p>You've received a new message from your portfolio website:</p>
                <div class="details">
                    <p><strong>👤 Name:</strong> ${name}</p>
                    <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>💬 Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br>')}</p>
                </div>
                <p>You can reply directly to this email to respond to ${name}.</p>
            </div>
            <div class="footer">
                <p>This message was sent from your portfolio contact form</p>
                <p>© ${new Date().getFullYear()} Your Portfolio</p>
            </div>
        </body>
        </html>
      `,
      text: `
        New Portfolio Message from ${name}
        
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
        
        ---
        Sent from your portfolio contact form
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email through Resend service' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json(
      { message: 'Email sent successfully!', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Add OPTIONS method for CORS preflight requests
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
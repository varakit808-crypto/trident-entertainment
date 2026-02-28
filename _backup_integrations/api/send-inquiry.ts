import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, type, date, message } = req.body;

    // Validate required fields
    if (!name || !email || !type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Map service type to readable name
    const serviceNames: Record<string, string> = {
      muse: 'The Live Muse (Paint & Sip)',
      curator: 'The Curator (Mixology)',
      signature: 'The Signature (Private Event)',
    };

    const serviceName = serviceNames[type] || type;

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Trident Entertainment <inquiries@trident-entertainment.com>',
      to: ['tridententertainment3@gmail.com'],
      replyTo: email,
      subject: `New Inquiry: ${serviceName} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0c0e0c; padding: 30px; text-align: center;">
            <h1 style="color: #c5a059; margin: 0; font-size: 24px;">New Booking Inquiry</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 2px solid #c5a059; padding-bottom: 10px;">Client Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #ddd; font-weight: bold; width: 140px;">Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Service:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #ddd;">${serviceName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Preferred Date:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #ddd;">${date || 'Not specified'}</td>
              </tr>
            </table>
            
            <h3 style="color: #333; margin-top: 25px;">Event Details & Requests:</h3>
            <div style="background: white; padding: 15px; border-left: 3px solid #c5a059; margin-top: 10px;">
              ${message || 'No additional details provided.'}
            </div>
          </div>
          
          <div style="background: #0c0e0c; padding: 20px; text-align: center;">
            <p style="color: #666; margin: 0; font-size: 12px;">
              This inquiry was submitted via trident-entertainment.com
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

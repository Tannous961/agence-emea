import { Resend } from 'resend';
import { BRAND } from '@/lib/constants/brand';

export interface ContactEmailPayload {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? BRAND.email;
  const from = process.env.RESEND_FROM ?? `${BRAND.name} <onboarding@resend.dev>`;

  const { name, email, company, budget, message } = payload;

  if (!apiKey) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[contact] RESEND_API_KEY not set — logging submission instead');
      console.log('Contact form submission:', payload);
      return;
    }
    throw new Error('Email service is not configured');
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>New contact enquiry — ${escapeHtml(BRAND.name)}</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || '—')}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget || '—')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `[${BRAND.name}] New enquiry from ${name}`,
    html,
  });

  if (error) {
    console.error('[contact] Resend error:', error);
    throw new Error(error.message);
  }
}

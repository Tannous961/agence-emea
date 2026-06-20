'use server';

import { sendContactEmail } from '@/lib/email/send-contact-email';

export interface ContactFormState {
  status: 'idle' | 'success' | 'error';
  message?: string;
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = String(formData.get('website') ?? '').trim();
  if (honeypot) {
    return { status: 'success', message: "Thank you — we'll be in touch within one business day." };
  }

  const name    = String(formData.get('name') ?? '').trim();
  const email   = String(formData.get('email') ?? '').trim();
  const company = String(formData.get('company') ?? '').trim();
  const budget  = String(formData.get('budget') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!name || !email || !message) {
    return { status: 'error', message: 'Please fill in all required fields.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' };
  }

  try {
    await sendContactEmail({ name, email, company, budget, message });
  } catch (err) {
    console.error('[contact] submission failed:', err);
    return {
      status: 'error',
      message: 'Something went wrong. Please try again or email us directly.',
    };
  }

  return {
    status: 'success',
    message: "Thank you — we'll be in touch within one business day.",
  };
}

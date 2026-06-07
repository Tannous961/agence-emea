'use server';

export interface ContactFormState {
  status: 'idle' | 'success' | 'error';
  message?: string;
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
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

  // In production: send to your CRM / email provider here.
  // Example: await sendgrid.send({ to: 'hello@agence-emea.com', ... })
  console.log('Contact form submission:', { name, email, company, budget, message });

  return {
    status: 'success',
    message: "Thank you — we'll be in touch within one business day.",
  };
}

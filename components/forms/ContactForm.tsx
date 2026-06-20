'use client';

import { useActionState, useState, useCallback } from 'react';
import { submitContact, type ContactFormState } from '@/app/actions/contact';
import { cn } from '@/lib/utils';

const initial: ContactFormState = { status: 'idle' };

const budgets = [
  'Under $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
  'Not sure yet',
];

type FieldErrors = Record<string, string>;

function validateEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}
function validateName(v: string) {
  return v.trim().length >= 2;
}
function validateMessage(v: string) {
  return v.trim().length >= 10;
}

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = useCallback((name: string, value: string) => {
    let error = '';
    if (name === 'name'    && !validateName(value))    error = 'Please enter your full name (min. 2 characters).';
    if (name === 'email'   && !validateEmail(value))   error = 'Please enter a valid email address.';
    if (name === 'message' && !validateMessage(value)) error = 'Please describe your project (min. 10 characters).';
    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  }, []);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validate(name, value);
  }, [validate]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (touched[name]) validate(name, value);
  }, [touched, validate]);

  const inputCls = (field: string) => cn(
    'w-full bg-transparent border-b py-3 outline-none transition-colors duration-200',
    'font-body font-light text-[var(--color-cream)] text-[1rem]',
    'placeholder:text-ink-meta',
    errors[field] && touched[field]
      ? 'border-red-400/70'
      : 'border-black/20 focus:border-[#0000FF]',
  );

  const labelCls = 'block font-body font-light uppercase text-ink-body mb-2';
  const labelStyle = { fontSize: '0.72rem', letterSpacing: '0.28em' };
  const errorCls = 'mt-1.5 font-body font-light text-red-400/80';
  const errorStyle = { fontSize: '0.8rem' };

  if (state.status === 'success') {
    return (
      <div className="py-20 flex flex-col items-start">
        {/* Check icon */}
        <div className="w-12 h-12 rounded-full border border-[#0000FF]/40 flex items-center justify-center mb-8">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10l4 4 8-8" stroke="#0000FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="font-display font-semibold uppercase text-[var(--color-cream)] mb-4"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: 0.95 }}>
          Message Received.
        </h3>
        <p className="font-body font-light text-ink-body leading-relaxed max-w-md"
          style={{ fontSize: '1rem' }}>
          One of our regional team members will respond within <span className="text-ink">one business day</span>. We will reach out from the office closest to you.
        </p>
        <p className="mt-6 font-body font-light text-ink-meta uppercase"
          style={{ fontSize: '0.7rem', letterSpacing: '0.28em' }}>
          Beirut · Lagos · Dubai · Riyadh
        </p>
      </div>
    );
  }

  return (
    <form action={action} noValidate aria-label="Contact form" className="relative">
      {/* Honeypot — bots only */}
      <input type="text" name="website" hidden tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Name */}
        <div>
          <label htmlFor="name" className={labelCls} style={labelStyle}>
            Full Name <span className="text-[#0000FF]" aria-hidden="true">*</span>
          </label>
          <input
            id="name" name="name" type="text" required
            autoComplete="name"
            aria-required="true"
            aria-invalid={touched.name && !!errors.name}
            aria-describedby={errors.name && touched.name ? 'error-name' : undefined}
            className={inputCls('name')}
            placeholder="Your name"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.name && errors.name && (
            <p id="error-name" role="alert" className={errorCls} style={errorStyle}>{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelCls} style={labelStyle}>
            Email <span className="text-[#0000FF]" aria-hidden="true">*</span>
          </label>
          <input
            id="email" name="email" type="email" required
            autoComplete="email"
            aria-required="true"
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={errors.email && touched.email ? 'error-email' : undefined}
            className={inputCls('email')}
            placeholder="you@company.com"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.email && errors.email && (
            <p id="error-email" role="alert" className={errorCls} style={errorStyle}>{errors.email}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className={labelCls} style={labelStyle}>Company</label>
          <input
            id="company" name="company" type="text"
            autoComplete="organization"
            className={inputCls('company')}
            placeholder="Your organisation"
          />
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className={labelCls} style={labelStyle}>Budget Range</label>
          <div className="relative">
            <select
              id="budget" name="budget"
              className={cn(
                inputCls('budget'),
                'bg-[#F5F5F5] appearance-none pr-8',
                'text-ink-body',
              )}
              defaultValue=""
            >
              <option value="" disabled className="text-ink-body bg-[#F5F5F5]">Select budget</option>
              {budgets.map((b) => <option key={b} value={b} className="bg-[#F5F5F5] text-ink-body">{b}</option>)}
            </select>
            {/* Dropdown chevron */}
            <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2" aria-hidden="true">
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M1 1l5 5 5-5" stroke="rgba(17,17,17,0.35)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label htmlFor="message" className={labelCls} style={labelStyle}>
            Tell us about your project <span className="text-[#0000FF]" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message" name="message" rows={5} required
            aria-required="true"
            aria-invalid={touched.message && !!errors.message}
            aria-describedby={errors.message && touched.message ? 'error-message' : undefined}
            className={cn(inputCls('message'), 'resize-none')}
            placeholder="Describe your project, goals, and timeline..."
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.message && errors.message && (
            <p id="error-message" role="alert" className={errorCls} style={errorStyle}>{errors.message}</p>
          )}
        </div>
      </div>

      {/* Server-side error */}
      {state.status === 'error' && (
        <p role="alert" className="mt-5 font-body font-light text-red-400/80 border border-red-400/20 px-4 py-3"
          style={{ fontSize: '0.92rem' }}>
          {state.message}
        </p>
      )}

      <div className="mt-10">
        <button
          type="submit"
          disabled={pending}
          className={cn(
            'inline-flex items-center gap-3 font-body font-light uppercase',
            'border border-[#0000FF] bg-[#0000FF] text-white px-8 py-4',
            'hover:bg-[#111] hover:text-white hover:border-[#111] transition-all duration-200',
            'active:scale-[0.97]',
            'focus-visible:ring-2 focus-visible:ring-[#0000FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F5]',
            pending && 'opacity-60 pointer-events-none',
          )}
          style={{ fontSize: '0.8rem', letterSpacing: '0.24em' }}
          aria-busy={pending}
        >
          {pending ? (
            <>
              {/* Spinner */}
              <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5"/>
                <path d="M7 1.5A5.5 5.5 0 0112.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send Enquiry
              <span className="w-5 h-px bg-current inline-block" aria-hidden="true" />
            </>
          )}
        </button>
        <p className="mt-3 font-body font-light text-ink-meta" style={{ fontSize: '0.78rem' }}>
          We respond within one business day.
        </p>
      </div>
    </form>
  );
}

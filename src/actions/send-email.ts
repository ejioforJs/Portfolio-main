'use server';

import { Resend } from 'resend';

import { env } from '@/env.mjs';
import { formSchema, TFormSchema } from '@/lib/form-schema';

const contactEmail = env.CONTACT_EMAIL || 'ejioforjames12@gmail.com';

export const sendEmailAction = async (values: TFormSchema) => {
  const parsedValues = formSchema.safeParse(values);

  if (!parsedValues.success) {
    return {
      error: 'Please enter a valid email address and message.',
    };
  }

  if (!env.RESEND_API_KEY) {
    return {
      error: `Email service is not configured yet. Please email ${contactEmail} directly.`,
    };
  }

  try {
    const resend = new Resend(env.RESEND_API_KEY);
    const { email, message } = parsedValues.data;

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: contactEmail,
      subject: 'Message from contact form',
      replyTo: email,
      text: `email: ${email} \nmessage: ${message}`,
    });

    return {
      data: 'Email sent successfully!',
    };
  } catch {
    return {
      error: 'Something went wrong. Please try again or email me directly.',
    };
  }
};

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { RESEND_API_KEY } from '$env/static/private';

// Rate limiting simple en memoria (se reinicia al reiniciar el servidor)
const emailAttempts = new Map<string, { count: number; lastAttempt: number }>();
const MAX_EMAILS_PER_HOUR = 2;
const ONE_HOUR = 60 * 60 * 1000;

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	try {
		const { name, email, subject } = await request.json();

		if (!name || !email || !subject) {
			return json({ error: 'All fields are required' }, { status: 400 });
		}

		if (subject.length > 2000) {
			return json({ error: 'Message is too long' }, { status: 400 });
		}

		const clientIP = getClientAddress();
		const now = Date.now();
		const attemptData = emailAttempts.get(clientIP);

		if (attemptData) {
			if (now - attemptData.lastAttempt > ONE_HOUR) {
				emailAttempts.set(clientIP, { count: 1, lastAttempt: now });
			} else if (attemptData.count >= MAX_EMAILS_PER_HOUR) {
				const timeLeft = Math.ceil((ONE_HOUR - (now - attemptData.lastAttempt)) / 60000);
				return json(
					{ error: `Too many requests. Please try again in ${timeLeft} minutes.` },
					{ status: 429 }
				);
			} else {
				attemptData.count++;
				attemptData.lastAttempt = now;
			}
		} else {
			emailAttempts.set(clientIP, { count: 1, lastAttempt: now });
		}

		if (!RESEND_API_KEY) {
			console.error('RESEND_API_KEY is not configured');
			return json({ error: 'Email service not configured' }, { status: 500 });
		}

		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${RESEND_API_KEY}`
			},
			body: JSON.stringify({
				from: 'Portfolio Contact <onboarding@resend.dev>',
				to: ['adrianisrael.616@gmail.com'],
				subject: `Portfolio Contact: ${name}`,
				html: `
					<h2>New Contact Form Submission</h2>
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Message:</strong></p>
					<p>${subject.replace(/\n/g, '<br>')}</p>
				`
			})
		});

		if (!response.ok) {
			const error = await response.text();
			console.error('Resend API error:', error);
			return json({ error: 'Failed to send email' }, { status: 500 });
		}

		return json({ success: true });
	} catch (error) {
		console.error('Error processing contact form:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};

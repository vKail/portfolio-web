<script lang="ts">
	import '../styles/contact.css';

	let name = '';
	let email = '';
	let subject = '';
	let isSubmitting = false;
	let submitStatus: 'idle' | 'success' | 'error' = 'idle';
	let errorMessage = '';

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		isSubmitting = true;
		submitStatus = 'idle';
		errorMessage = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name,
					email,
					subject,
				}),
			});

			if (response.ok) {
				submitStatus = 'success';
				name = '';
				email = '';
				subject = '';
			} else {
				const data = await response.json();
				submitStatus = 'error';
				errorMessage = data.error || 'Failed to send message. Please try again.';
			}
		} catch (error) {
			console.error('Error sending email:', error);
			submitStatus = 'error';
			errorMessage = 'Network error. Please check your connection and try again.';
		} finally {
			isSubmitting = false;
		}
	};
</script>

<div class="w-full px-4 sm:px-6 flex justify-center">
	<div class="contact-container">
		<h2 class="form-title">Get In Touch</h2>
		<p class="contact-intro">
			I'm always excited to connect with new people and explore opportunities to collaborate on interesting projects. Whether you have a question, want to discuss a potential project, or just want to say hi, feel free to reach out. I'd love to hear from you and see how we can work together to create something amazing.
		</p>
		<form class="contact-form" on:submit={handleSubmit} id="contact-form">

		<div class="form-group">
			<label for="name" class="form-label">Name</label>
			<input
				type="text"
				id="name"
				class="form-input"
				bind:value={name}
				required
				placeholder="Your name"
			/>
		</div>

		<div class="form-group">
			<label for="email" class="form-label">Email</label>
			<input
				type="email"
				id="email"
				class="form-input"
				bind:value={email}
				required
				placeholder="your.email@example.com"
			/>
		</div>

		<div class="form-group">
			<label for="subject" class="form-label">Subject</label>
			<textarea
				id="subject"
				class="form-input form-textarea"
				bind:value={subject}
				required
				placeholder="Your message"
			></textarea>
		</div>

			<button type="submit" class="form-button" disabled={isSubmitting}>
				{isSubmitting ? 'Sending...' : 'Send Message'}
			</button>

			{#if submitStatus === 'success'}
				<p class="status-message success">Message sent successfully! I'll get back to you soon.</p>
			{/if}
			{#if submitStatus === 'error'}
				<p class="status-message error">{errorMessage}</p>
			{/if}
		</form>
	</div>
</div>

<style>
	.contact-container {
		max-width: 600px;
		width: 100%;
	}

	.contact-intro {
		color: var(--color-text-muted);
		line-height: 1.6;
		margin-bottom: 2rem;
		font-size: 0.9rem;
	}

	@media (min-width: 640px) {
		.contact-intro {
			line-height: 1.7;
			margin-bottom: 2.5rem;
			font-size: 1rem;
		}
	}

	.status-message {
		margin-top: 1.5rem;
		padding: 0.875rem;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		text-align: center;
	}

	@media (min-width: 640px) {
		.status-message {
			padding: 1rem;
			font-size: 0.95rem;
		}
	}

	.status-message.success {
		background-color: rgba(7, 131, 156, 0.1);
		border: 1px solid rgba(7, 131, 156, 0.3);
		color: #07839C;
	}

	.status-message.error {
		background-color: rgba(239, 68, 68, 0.1);
		border: 1px solid rgba(239, 68, 68, 0.3);
		color: #ef4444;
	}

	.form-button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
</style>

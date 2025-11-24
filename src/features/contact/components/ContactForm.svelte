<script lang="ts">
	import '../styles/contact.css';

	let name = '';
	let email = '';
	let subject = '';

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		console.log({ name, email, subject });
	};
</script>

<div class="w-full px-6 flex justify-center">
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

			<button type="submit" class="form-button">Send Message</button>
		</form>
	</div>
</div>

<style>
	.contact-container {
		max-width: 600px;
		width: 100%;
	}

	.contact-intro {
		color: rgba(255, 255, 255, 0.75);
		line-height: 1.7;
		margin-bottom: 2.5rem;
		font-size: 1rem;
	}
</style>

<script>
	import ContactForm from '../../features/contact/components/ContactForm.svelte';
	import { fadeInOnScroll } from '$lib/utils/intersection-observer';
</script>

<div class="min-h-screen">
	<div class="pt-12 pb-8 px-4 sm:px-8 fade-in" use:fadeInOnScroll style="color: var(--color-text);">
		<h1 class="text-3xl sm:text-4xl md:text-5xl font-bold" style="color: var(--color-text);">Contact</h1>
		<p class="text-base md:text-lg mt-2" style="color: var(--color-text-muted);">Let's connect</p>
	</div>

	<div class="flex flex-col items-center pt-8 fade-in-delay-100 w-full" use:fadeInOnScroll>
		<ContactForm />
	</div>
</div>

<script>
	import Presentation from '../features/home/components/Presentation.svelte';
	import About from '../features/home/components/About.svelte';
	import Experience from '../features/home/components/Experience.svelte';
	import FeaturedProjects from '../features/home/components/FeaturedProjects.svelte';
	import Skills from '../features/home/components/Skills.svelte';
	import ContactCTA from '../features/home/components/ContactCTA.svelte';
	import { fadeInOnScroll } from '$lib/utils/intersection-observer';
</script>

<div class="home-page">
	<div class="pt-12 pb-8 px-4 sm:px-8 fade-in" use:fadeInOnScroll style="color: var(--color-text);">
		<h1 class="text-3xl sm:text-4xl md:text-5xl font-bold" id="hero-title" style="color: var(--color-text);">Adrian Jurado</h1>
		<p class="text-base md:text-lg mt-2" style="color: var(--color-text-muted);">Software Engineer</p>
	</div>
<!-- 
	<section class="min-h-[80vh] flex flex-col justify-center items-center px-8" id="presentation">
		<div class="presentation-wrapper flex justify-center w-full">
			<Presentation />
		</div>
	</section> -->

	<div class="fade-in-delay-200" use:fadeInOnScroll>
		<About />
	</div>
	
	<div class="fade-in-delay-300" use:fadeInOnScroll>
		<Experience />
	</div>
	
	<div class="fade-in-delay-400" use:fadeInOnScroll>
		<FeaturedProjects />
	</div>
	
	<div class="fade-in-delay-500" use:fadeInOnScroll>
		<Skills />
	</div>
	
	<div class="fade-in-delay-100" use:fadeInOnScroll>
		<ContactCTA />
	</div>
</div>

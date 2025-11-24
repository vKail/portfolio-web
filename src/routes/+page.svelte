<script>
	import Presentation from '../features/home/components/Presentation.svelte';
	import SoftSkills from '../features/home/components/SoftSkills.svelte';
	import About from '../features/home/components/About.svelte';
	import Experience from '../features/home/components/Experience.svelte';
	import FeaturedProjects from '../features/home/components/FeaturedProjects.svelte';
	import Skills from '../features/home/components/Skills.svelte';
	import ContactCTA from '../features/home/components/ContactCTA.svelte';
</script>

<div class="home-page">
	<div class="pt-12 pb-8 px-8">
		<h1 class="text-4xl md:text-5xl font-bold text-white/90" id="hero-title">Adrian Jurado</h1>
		<p class="text-base md:text-lg text-white/50 mt-2">Software Engineer</p>
	</div>

	<section class="min-h-[80vh] flex flex-col justify-center items-center px-8" id="presentation">
		<div class="presentation-wrapper flex justify-center w-full">
			<Presentation />
		</div>
	</section>

	<About />
	
	<div id="soft-skills" class="flex justify-center w-full py-16 px-8">
		<SoftSkills />
	</div>
	
	<Experience />
	
	<FeaturedProjects />
	
	<Skills />
	
	<ContactCTA />
</div>

<script>
	import ProfileInfo from '../../features/profile/components/ProfileInfo.svelte';
	import Methodologies from '../../features/profile/components/Methodologies.svelte';
	import Languages from '../../features/profile/components/Languages.svelte';
	import TechnicalInterests from '../../features/profile/components/TechnicalInterests.svelte';
	import SocialLinks from '../../features/profile/components/SocialLinks.svelte';
	import { fadeInOnScroll } from '$lib/utils/intersection-observer';
</script>

<div class="min-h-screen">
	<div class="pt-12 pb-8 px-4 sm:px-8 max-w-[1000px] mx-auto fade-in" use:fadeInOnScroll style="color: var(--color-text);">
		<h1 class="text-3xl sm:text-4xl md:text-5xl font-bold" style="color: var(--color-text);">Profile</h1>
		<p class="text-base md:text-lg mt-2" style="color: var(--color-text-muted);">About me and my journey</p>
	</div>

	<div class="flex flex-col items-center">
		<div class="fade-in-delay-100 w-full max-w-[1000px]" use:fadeInOnScroll><ProfileInfo /></div>
		<div class="fade-in-delay-200 w-full max-w-[1000px]" use:fadeInOnScroll><Methodologies /></div>
		<div class="fade-in-delay-300 w-full max-w-[1000px]" use:fadeInOnScroll><Languages /></div>
		<div class="fade-in-delay-400 w-full max-w-[1000px]" use:fadeInOnScroll><TechnicalInterests /></div>
		<div class="fade-in-delay-500 w-full max-w-[1000px]" use:fadeInOnScroll><SocialLinks /></div>
	</div>
</div>

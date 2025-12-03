<script>
	import ProjectsList from '../../features/projects/components/ProjectsList.svelte';
	import { fadeInOnScroll } from '$lib/utils/intersection-observer';
</script>

<div class="min-h-screen">
	<div class="pt-12 pb-8 px-4 sm:px-8 fade-in" use:fadeInOnScroll style="color: var(--color-text);">
		<h1 class="text-3xl sm:text-4xl md:text-5xl font-bold" style="color: var(--color-text);">Projects</h1>
		<p class="text-base md:text-lg mt-2" style="color: var(--color-text-muted);">Things I've built</p>
	</div>

	<div class="flex flex-col items-center pt-8 fade-in-delay-100 w-full" use:fadeInOnScroll>
		<ProjectsList />
	</div>
</div>

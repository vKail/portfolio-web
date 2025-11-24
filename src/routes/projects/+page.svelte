<script>
	import ProjectsList from '../../features/projects/components/ProjectsList.svelte';
</script>

<div class="min-h-screen">
	<div class="pt-12 pb-8 px-8">
		<h1 class="text-4xl md:text-5xl font-bold text-white/90">Projects</h1>
		<p class="text-base md:text-lg text-white/50 mt-2">Things I've built</p>
	</div>

	<div class="flex flex-col items-center pt-8">
		<ProjectsList />
	</div>
</div>

<script>
	import ProjectCard from './ProjectCard.svelte';
	import { projectsData } from '../data/projects.data.ts';
</script>

<div class="w-full max-w-7xl px-6">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each projectsData as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>

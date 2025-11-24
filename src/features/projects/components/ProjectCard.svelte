<script lang="ts">
	import '../styles/projects.css';

	export let project: {
		id: string;
		name: string;
		image: string;
		tools: string[];
		description: string;
		year: number;
	};
</script>

<a href={`/projects/${project.id}`} class="project-card block">
	<div class="project-image">
		<span>📦</span>
	</div>
	<div class="project-content">
		<h3 class="project-name">{project.name}</h3>
		<div class="project-tools">
			{#each project.tools as tool}
				<span class="project-tool">{tool}</span>
			{/each}
		</div>
		<p class="project-description">{project.description}</p>
		<p class="project-year">{project.year}</p>
	</div>
</a>

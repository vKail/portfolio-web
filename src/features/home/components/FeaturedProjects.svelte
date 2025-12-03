<script lang="ts">
	import { featuredProjects } from '../data/featured-projects.data';
	import { ExternalLink } from '@lucide/svelte';
	import '../styles/sections.css';
</script>

<section class="max-w-[1000px] w-full py-12 sm:py-16 px-4 sm:px-8 mx-auto" id="featured-projects" style="color: var(--color-text);">
	<h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 before:content-[''] before:inline-block before:w-8 sm:before:w-10 before:h-0.5 before:bg-[#07839C]" style="color: var(--color-text);">
		Some Things I've Built
	</h2>
	
	<div class="flex flex-col gap-16 sm:gap-20 md:gap-24">
		{#each featuredProjects as project, index}
			<div class="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center relative">
				<!-- Image - changes position based on index -->
				<div class="md:col-span-7 {index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'} row-start-1 relative rounded-lg overflow-hidden group">
					<img src={project.image} alt={project.name} class="w-full aspect-video object-cover opacity-70 transition-all duration-300 group-hover:opacity-90 group-hover:scale-105" style="border: 1px solid var(--color-border);" />
				</div>
				
				<!-- Content - changes position and alignment based on index -->
				<div class="md:col-span-6 {index % 2 === 0 ? 'md:col-start-7' : 'md:col-start-1'} row-start-1 z-10 {index % 2 === 0 ? 'md:text-right' : 'md:text-left'}">
					<p class="text-[#07839C] text-xs sm:text-sm font-medium mb-2">Featured Project</p>
					<h3 class="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 transition-colors duration-300 hover:text-[#07839C]" style="color: var(--color-text);">
						<a href={project.link}>{project.name}</a>
					</h3>
					
					<div class="p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 shadow-lg" style="background-color: var(--color-card); border: 1px solid var(--color-border);">
						<p class="leading-relaxed text-sm sm:text-[0.95rem]" style="color: var(--color-text-muted);">{project.description}</p>
					</div>
					
					<div class="flex flex-wrap gap-3 sm:gap-4 mb-3 sm:mb-4 {index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}">
						{#each project.technologies as tech}
							<span class="text-xs sm:text-sm font-mono" style="color: var(--color-text-muted);">{tech}</span>
						{/each}
					</div>
					
					<a href={project.link} class="text-muted-60 transition-colors duration-300 hover:text-[#07839C] inline-flex items-center gap-2">
						<ExternalLink size={18} class="sm:hidden" />
						<ExternalLink size={20} class="hidden sm:block" />
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

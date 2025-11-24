<script lang="ts">
	import { scrollAnimation } from '$lib/utils/scroll-animation';
	import { featuredProjects } from '../data/featured-projects.data';
	import '../styles/sections.css';
</script>

<section class="max-w-[1000px] w-full py-16 px-8 mx-auto fade-in" use:scrollAnimation id="featured-projects">
	<h2 class="text-3xl md:text-4xl font-semibold text-white mb-8 flex items-center gap-4 before:content-[''] before:inline-block before:w-10 before:h-0.5 before:bg-white/30">
		Some Things I've Built
	</h2>
	
	<div class="flex flex-col gap-24">
		{#each featuredProjects as project, index}
			<div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
				<!-- Image - changes position based on index -->
				<div class="md:col-span-7 {index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'} row-start-1 relative rounded-lg overflow-hidden group">
					<div class="w-full aspect-video bg-gradient-to-br from-[#34d399]/15 to-[#60A5FA]/15 flex items-center justify-center text-6xl opacity-70 transition-opacity duration-300 group-hover:opacity-90">
						📦
					</div>
					<div class="absolute inset-0 bg-[#34d399]/10 transition-colors duration-300 group-hover:bg-[#34d399]/0"></div>
				</div>
				
				<!-- Content - changes position and alignment based on index -->
				<div class="md:col-span-6 {index % 2 === 0 ? 'md:col-start-7' : 'md:col-start-1'} row-start-1 z-10 {index % 2 === 0 ? 'md:text-right' : 'md:text-left'}">
					<p class="text-[#34d399] text-sm font-medium mb-2">Featured Project</p>
					<h3 class="text-2xl font-semibold text-white mb-4 transition-colors duration-300 hover:text-[#34d399]">
						<a href={project.link}>{project.name}</a>
					</h3>
					
					<div class="bg-[#1e293b]/90 p-6 rounded-lg mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/5">
						<p class="text-white/80 leading-relaxed text-[0.95rem]">{project.description}</p>
					</div>
					
					<div class="flex flex-wrap gap-4 mb-4 {index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}">
						{#each project.technologies as tech}
							<span class="text-white/60 text-sm font-mono">{tech}</span>
						{/each}
					</div>
					
					<a href={project.link} class="text-white/60 text-xl transition-colors duration-300 hover:text-[#34d399] inline-block">
						→
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

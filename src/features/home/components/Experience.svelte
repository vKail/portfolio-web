<script lang="ts">
	import { scrollAnimation } from '$lib/utils/scroll-animation';
	import { experienceData } from '../data/experience.data';
	import '../styles/sections.css';
</script>

<section class="max-w-[1000px] w-full py-16 px-8 mx-auto fade-in" use:scrollAnimation id="experience">
	<h2 class="text-3xl md:text-4xl font-semibold text-white mb-8 flex items-center gap-4 before:content-[''] before:inline-block before:w-10 before:h-0.5 before:bg-white/30">
		Where I've Worked
	</h2>
	
	<div class="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-[#34d399] before:to-[#34d399]/10">
		{#each experienceData as exp}
			<div class="relative mb-12 pl-8 before:content-[''] before:absolute before:left-[-2.5rem] before:top-0 before:w-3 before:h-3 before:bg-[#34d399] before:border-3 before:border-[#1e293b] before:rounded-full before:transition-transform before:duration-300 hover:before:scale-125">
				<div class="mb-3">
					<h3 class="text-xl font-semibold text-white mb-1">{exp.role}</h3>
					<p class="text-[1.05rem] text-[#34d399] mb-1">{exp.company}</p>
					<div class="flex gap-4 flex-wrap mb-2">
						<span class="text-sm text-white/50">{exp.period}</span>
						<span class="text-sm text-white/50">{exp.type}</span>
					</div>
				</div>
				
				<p class="text-white/75 leading-relaxed mb-4">{exp.description}</p>
				
				<div class="flex flex-wrap gap-2">
					{#each exp.technologies as tech}
						<span class="bg-[#34d399]/10 text-[#34d399] px-3 py-1 rounded text-xs border border-[#34d399]/20">{tech}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

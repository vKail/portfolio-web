<script lang="ts">
	import { experienceData } from '../data/experience.data';
	import '../styles/sections.css';
</script>

<section class="max-w-[1000px] w-full py-16 px-8 mx-auto" id="experience">
	<h2 class="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-8 flex items-center gap-4 before:content-[''] before:inline-block before:w-10 before:h-0.5 before:bg-[#07839C]">
		Where I've Worked
	</h2>
	
	<div class="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-[#07839C]/30">
		{#each experienceData as exp, i}
			<div class="relative mb-12 pl-8 before:content-[''] before:absolute before:left-[-2.5rem] before:top-0 before:w-3 before:h-3 before:bg-[#07839C] before:border-3 before:border-[#1e293b] before:rounded-full before:transition-transform before:duration-300 hover:before:scale-125">
				<div class="mb-3">
					<h3 class="text-xl font-semibold text-[var(--color-text)] mb-1">{exp.role}</h3>
					<p class="text-[1.05rem] text-[#07839C] mb-1">{exp.company}</p>
					<div class="flex gap-4 flex-wrap mb-2">
						<span class="text-sm text-[var(--color-text)]/50">{exp.period}</span>
						<span class="text-sm text-[var(--color-text)]/50">{exp.type}</span>
					</div>
				</div>
				
				<p class="text-[var(--color-text)]/75 leading-relaxed mb-4">{exp.description}</p>
				
				<div class="flex flex-wrap gap-2">
					{#each exp.technologies as tech}
						<span class="bg-[#07839C]/10 text-[#07839C] px-3 py-1 rounded text-xs border border-[#07839C]/20">{tech}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

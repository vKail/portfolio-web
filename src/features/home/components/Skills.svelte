<script lang="ts">
	import { skillsData } from '../data/skills.data';
	import '../styles/sections.css';
</script>

<section class="max-w-[1000px] w-full py-16 px-8 mx-auto" id="skills">
	<h2 class="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-8 flex items-center gap-4 before:content-[''] before:inline-block before:w-10 before:h-0.5 before:bg-[#07839C]">
		Skills & Technologies
	</h2>
	
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each skillsData.categories as category, i}
			<div class="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#07839C]/30">
				<h3 class="text-xl font-semibold text-[var(--color-text)] mb-4">{category.name}
				</h3>
				<div class="flex flex-wrap gap-3">
					{#each category.skills as skill}
						<span class="skill-badge-bg text-muted-80 px-4 py-2 rounded-md text-sm border border-[var(--color-border)] transition-all duration-300 hover:bg-[#07839C]/10 hover:border-[#07839C]/30 hover:-translate-y-0.5">
							{skill}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<script lang="ts">
	import { scrollAnimation } from '$lib/utils/scroll-animation';
	import { skillsData } from '../data/skills.data';
	import '../styles/sections.css';
</script>

<section class="max-w-[1000px] w-full py-16 px-8 mx-auto fade-in" use:scrollAnimation id="skills">
	<h2 class="text-3xl md:text-4xl font-semibold text-white mb-8 flex items-center gap-4 before:content-[''] before:inline-block before:w-10 before:h-0.5 before:bg-white/30">
		Skills & Technologies
	</h2>
	
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each skillsData.categories as category}
			<div class="bg-white/[0.02] border border-white/5 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#34d399]/30">
				<h3 class="text-xl font-semibold text-[#34d399] mb-4 flex items-center gap-2 before:content-['▹'] before:text-2xl">
					{category.name}
				</h3>
				<div class="flex flex-wrap gap-3">
					{#each category.skills as skill}
						<span class="bg-[#60A5FA]/10 text-white/80 px-4 py-2 rounded-md text-sm border border-[#60A5FA]/20 transition-all duration-300 hover:bg-[#60A5FA]/20 hover:border-[#60A5FA]/40 hover:-translate-y-0.5">
							{skill}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

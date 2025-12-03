<script lang="ts">
	import { aboutData } from '../data/about.data';
	import '../styles/sections.css';
	import { Code2 } from '@lucide/svelte';
</script>

<section class="max-w-[1000px] w-full py-16 px-8 mx-auto" id="about">
	<h2 class="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-8 flex items-center gap-4 before:content-[''] before:inline-block before:w-10 before:h-0.5 before:bg-[#07839C]">
		About Me
	</h2>
	
	<div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-center">
		<div class="md:col-span-3">
			{#each aboutData.paragraphs as paragraph, i}
				<p class="text-muted-80 leading-relaxed mb-6 text-[1.05rem]">{paragraph}</p>
			{/each}
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
				{#each aboutData.highlights as highlight}
					<div class="flex items-center gap-2 text-muted-70 text-[0.95rem] before:content-['▹'] before:text-[#07839C] before:text-xl">
						{highlight}
					</div>
				{/each}
			</div>
		</div>
		
		<div class="md:col-span-2 relative group">
			<div class="w-full aspect-square bg-[var(--color-surface)] rounded-lg flex items-center justify-center text-6xl opacity-60 border border-[var(--color-border)] relative z-10">
				<Code2 size={120} class="text-[#07839C]" strokeWidth={1.5} />
			</div>
		</div>
	</div>
</section>

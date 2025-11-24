<script lang="ts">
	import { scrollAnimation } from '$lib/utils/scroll-animation';
	import { aboutData } from '../data/about.data';
	import '../styles/sections.css';
</script>

<section class="max-w-[1000px] w-full py-16 px-8 mx-auto fade-in" use:scrollAnimation id="about">
	<h2 class="text-3xl md:text-4xl font-semibold text-white mb-8 flex items-center gap-4 before:content-[''] before:inline-block before:w-10 before:h-0.5 before:bg-white/30">
		About Me
	</h2>
	
	<div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-center">
		<div class="md:col-span-3">
			{#each aboutData.paragraphs as paragraph}
				<p class="text-white/80 leading-relaxed mb-6 text-[1.05rem]">{paragraph}</p>
			{/each}
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
				{#each aboutData.highlights as highlight}
					<div class="flex items-center gap-2 text-white/70 text-[0.95rem] before:content-['▹'] before:text-[#34d399] before:text-xl">
						{highlight}
					</div>
				{/each}
			</div>
		</div>
		
		<div class="md:col-span-2 relative group">
			<div class="w-full aspect-square bg-gradient-to-br from-[#34d399]/10 to-[#60A5FA]/10 rounded-lg flex items-center justify-center text-6xl opacity-60 border-2 border-[#34d399]/20 relative z-10">
				👨‍💻
			</div>
			<div class="hidden md:block absolute top-5 left-5 w-full h-full border-2 border-[#34d399] rounded-lg transition-transform duration-300 group-hover:translate-x-2.5 group-hover:translate-y-2.5"></div>
		</div>
	</div>
</section>

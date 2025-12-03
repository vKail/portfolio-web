<script lang="ts">
	import { profileData } from '../data/profile.data';
</script>

<section id="interests" class="max-w-4xl w-full px-6 py-12">
	<h2 class="text-3xl font-semibold text-[var(--color-text)] mb-8">Technical Interests & Goals</h2>
	
	<div class="space-y-8">
		{#each profileData.interests as interest}
			<div class="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg hover:border-[#07839C]/30 transition-all duration-300">
				<h3 class="text-2xl font-semibold text-[var(--color-text)] mb-3">{interest.area}</h3>
				<p class="text-muted-70 leading-relaxed mb-4">{interest.description}</p>
				
				<div class="flex flex-wrap gap-2">
					{#each interest.technologies as tech}
						<span class="bg-white/5 text-[var(--color-text)]/90 px-3 py-1 rounded text-sm border border-[var(--color-border)]">
							{tech}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	
	<div class="mt-8 p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg">
		<p class="text-muted-80 leading-relaxed">
			<span class="text-[#07839C] font-semibold">Career Goal:</span> I'm actively working to specialize in 
			<span class="text-[var(--color-text)] font-semibold">Frontend Development</span> and 
			<span class="text-[var(--color-text)] font-semibold">UX/UI Design</span>. My aim is to create beautiful, 
			accessible, and performant web applications that provide exceptional user experiences.
		</p>
	</div>
</section>

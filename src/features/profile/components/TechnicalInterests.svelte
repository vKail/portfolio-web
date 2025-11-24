<script lang="ts">
	import { profileData } from '../data/profile.data';
</script>

<section id="interests" class="max-w-4xl w-full px-6 py-12">
	<h2 class="text-3xl font-semibold text-white mb-8">Technical Interests & Goals</h2>
	
	<div class="space-y-8">
		{#each profileData.interests as interest}
			<div class="p-6 bg-white/[0.02] border border-white/5 rounded-lg hover:border-[#34d399]/30 transition-all duration-300">
				<h3 class="text-2xl font-semibold text-white mb-3">{interest.area}</h3>
				<p class="text-white/70 leading-relaxed mb-4">{interest.description}</p>
				
				<div class="flex flex-wrap gap-2">
					{#each interest.technologies as tech}
						<span class="bg-[#60A5FA]/10 text-[#60A5FA] px-3 py-1 rounded text-sm border border-[#60A5FA]/20">
							{tech}
						</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	
	<div class="mt-8 p-6 bg-gradient-to-r from-[#34d399]/10 to-[#60A5FA]/10 border border-[#34d399]/20 rounded-lg">
		<p class="text-white/80 leading-relaxed">
			<span class="text-[#34d399] font-semibold">Career Goal:</span> I'm actively working to specialize in 
			<span class="text-[#60A5FA] font-semibold">Frontend Development</span> and 
			<span class="text-[#60A5FA] font-semibold">UX/UI Design</span>. My aim is to create beautiful, 
			accessible, and performant web applications that provide exceptional user experiences.
		</p>
	</div>
</section>

<script lang="ts">
	import { profileData } from '../data/profile.data';
</script>

<section id="methodologies" class="max-w-4xl w-full px-6 py-12">
	<h2 class="text-3xl font-semibold text-white mb-8">Work Methodologies & Values</h2>
	
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div>
			<h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
				<span class="text-2xl">⚙️</span> Methodologies
			</h3>
			<ul class="space-y-3">
				{#each profileData.methodologies as methodology}
					<li class="flex items-start gap-3 text-white/80">
						<span class="text-[#34d399] mt-1">▹</span>
						<span>{methodology}</span>
					</li>
				{/each}
			</ul>
		</div>
		
		<div>
			<h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
				<span class="text-2xl">💎</span> Core Values
			</h3>
			<ul class="space-y-3">
				{#each profileData.values as value}
					<li class="flex items-start gap-3 text-white/80">
						<span class="text-[#34d399] mt-1">▹</span>
						<span>{value}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	
	<div class="mt-8 p-6 bg-white/[0.02] border border-white/5 rounded-lg">
		<p class="text-white/70 leading-relaxed">
			As a <span class="text-[#34d399] font-semibold">junior developer</span>, I'm committed to continuous growth and learning. 
			I believe in writing clean, maintainable code and always putting the user first. My goal is to contribute to 
			projects that challenge me while delivering real value to users.
		</p>
	</div>
</section>

<script lang="ts">
	import { profileData } from '../data/profile.data';
</script>

<section id="languages" class="max-w-4xl w-full px-6 py-12">
	<h2 class="text-3xl font-semibold text-[var(--color-text)] mb-8">Languages</h2>
	
	<div class="space-y-6">
		{#each profileData.languages as lang}
			<div>
				<div class="flex justify-between items-center mb-2">
					<h3 class="text-lg font-medium text-[var(--color-text)]">{lang.name}</h3>
					<span class="text-sm text-muted-60">{lang.level}</span>
				</div>
				<div class="w-full h-2 status-badge-bg rounded-full overflow-hidden">
					<div 
						class="h-full bg-[#07839C] rounded-full transition-all duration-500"
						style="width: {lang.proficiency}%"
					></div>
				</div>
			</div>
		{/each}
	</div>
</section>

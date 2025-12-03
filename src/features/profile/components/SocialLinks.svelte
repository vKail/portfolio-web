<script lang="ts">
	import { profileData } from '../data/profile.data';
</script>

<section id="connect" class="max-w-4xl w-full px-6 py-12">
	<h2 class="text-3xl font-semibold text-[var(--color-text)] mb-8">Let's Connect</h2>
	
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each profileData.socialLinks as link}
			<a 
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg hover:border-[#07839C]/50 transition-all duration-300 hover:-translate-y-1 text-center group"
			>
				<div class="text-4xl mb-3">{link.icon}</div>
				<h3 class="text-lg font-semibold text-[var(--color-text)] group-hover:text-[#07839C] transition-colors">
					{link.platform}
				</h3>
			</a>
		{/each}
	</div>
	
	<div class="mt-8 text-center">
		<p class="text-muted-70 mb-4">Currently available for freelance projects and full-time opportunities</p>
		<a 
			href="/contact" 
			class="inline-block py-3 px-8 border-2 border-[#07839C] text-[#07839C] rounded-md font-semibold transition-all duration-300 hover:bg-[#07839C] hover:text-[var(--color-text)] hover:-translate-y-1"
		>
			Get In Touch
		</a>
	</div>
</section>

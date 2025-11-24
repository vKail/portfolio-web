<script lang="ts">
	import { profileData } from '../data/profile.data';
</script>

<section id="connect" class="max-w-4xl w-full px-6 py-12">
	<h2 class="text-3xl font-semibold text-white mb-8">Let's Connect</h2>
	
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each profileData.socialLinks as link}
			<a 
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class="p-6 bg-white/[0.02] border border-white/5 rounded-lg hover:border-[#34d399]/50 transition-all duration-300 hover:-translate-y-1 text-center group"
			>
				<div class="text-4xl mb-3">{link.icon}</div>
				<h3 class="text-lg font-semibold text-white group-hover:text-[#34d399] transition-colors">
					{link.platform}
				</h3>
			</a>
		{/each}
	</div>
	
	<div class="mt-8 text-center">
		<p class="text-white/70 mb-4">Currently available for freelance projects and full-time opportunities</p>
		<a 
			href="/contact" 
			class="inline-block py-3 px-8 bg-[#34d399] text-[#0f172a] rounded-md font-semibold transition-all duration-300 hover:bg-[#10b981] hover:-translate-y-1 hover:shadow-lg"
		>
			Get In Touch
		</a>
	</div>
</section>

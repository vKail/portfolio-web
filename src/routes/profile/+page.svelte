<script>
	import ProfileInfo from '../../features/profile/components/ProfileInfo.svelte';
	import Methodologies from '../../features/profile/components/Methodologies.svelte';
	import Languages from '../../features/profile/components/Languages.svelte';
	import TechnicalInterests from '../../features/profile/components/TechnicalInterests.svelte';
	import SocialLinks from '../../features/profile/components/SocialLinks.svelte';
</script>

<div class="min-h-screen">
	<div class="pt-12 pb-8 px-8">
		<h1 class="text-4xl md:text-5xl font-bold text-white/90">Profile</h1>
		<p class="text-base md:text-lg text-white/50 mt-2">About me and my journey</p>
	</div>

	<div class="flex flex-col items-center">
		<ProfileInfo />
		<Methodologies />
		<Languages />
		<TechnicalInterests />
		<SocialLinks />
	</div>
</div>

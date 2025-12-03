<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="description" content="Personal Portfolio" />
</svelte:head>

<div class="flex min-h-screen overflow-x-hidden">
	<Sidebar />
	<main class="main-content flex-grow p-4 overflow-y-auto">
		{@render children()}
	</main>
	<ThemeToggle />
</div>

<style>
	.main-content {
		margin-left: 200px;
		height: 100vh;
		transition: margin-left 0.3s ease;
	}

	@media (max-width: 768px) {
		.main-content {
			margin-left: 0;
			padding-top: 4rem;
		}
	}
</style>

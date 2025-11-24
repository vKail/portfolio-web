<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Sidebar from '$lib/components/Sidebar.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="description" content="Personal Portfolio" />
</svelte:head>

<div class="flex min-h-screen overflow-x-hidden">
	<Sidebar />
	<main class="flex-grow p-4 overflow-y-auto" style="margin-left: 240px; height: 100vh;">
		{@render children()}
	</main>
</div>

<script lang="ts">
	import { theme, toggleTheme } from '$lib/stores/theme';
	import { Sun, Moon } from '@lucide/svelte';
</script>

<button
	on:click={toggleTheme}
	class="theme-toggle"
	aria-label="Toggle theme"
>
	{#if $theme === 'light'}
		<Moon size={20} />
	{:else}
		<Sun size={20} />
	{/if}
</button>

<style>
	.theme-toggle {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background: var(--color-primary);
		color: white;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 12px rgba(7, 131, 156, 0.3);
		transition: all 0.3s ease;
		z-index: 1000;
	}

	.theme-toggle:hover {
		transform: scale(1.1);
		box-shadow: 0 6px 16px rgba(7, 131, 156, 0.4);
	}

	.theme-toggle:active {
		transform: scale(0.95);
	}
</style>

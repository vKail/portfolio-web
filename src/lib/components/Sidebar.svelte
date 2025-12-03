<script lang="ts">
	import { page } from '$app/stores';
	import { Home, User, FolderCode, Mail, Menu, X } from '@lucide/svelte';
	import { goto } from '$app/navigation';
	
	let isOpen = false;
	
	$: currentPath = $page.url.pathname;
	$: currentHash = $page.url.hash;
	$: homeOpen = currentPath === '/';
	$: profileOpen = currentPath === '/profile';
	
	function toggleSidebar() {
		isOpen = !isOpen;
	}
	
	function closeSidebar() {
		if (window.innerWidth < 768) {
			isOpen = false;
		}
	}
	
	function navigateToHome(event: MouseEvent) {
		event.preventDefault();
		event.stopPropagation();
		goto('/').then(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
		closeSidebar();
	}
	
	function navigateToProfile(event: MouseEvent) {
		event.preventDefault();
		event.stopPropagation();
		goto('/profile').then(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
		closeSidebar();
	}
	
	function navigateToProjects(event: MouseEvent) {
		event.preventDefault();
		goto('/projects').then(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
		closeSidebar();
	}
	
	function navigateToContact(event: MouseEvent) {
		event.preventDefault();
		goto('/contact').then(() => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
		closeSidebar();
	}
	
	function handleLinkClick(event: MouseEvent) {
		closeSidebar();
		setTimeout(() => {
			const href = (event.currentTarget as HTMLAnchorElement).getAttribute('href');
			if (href?.includes('#')) {
				const hash = href.split('#')[1];
				const element = document.getElementById(hash);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}
		}, 100);
	}
</script>

<!-- Mobile Menu Button -->
<button 
	class="mobile-menu-btn" 
	class:open={isOpen}
	onclick={toggleSidebar}
	aria-label="Toggle menu"
>
	{#if isOpen}
		<X size={24} />
	{:else}
		<Menu size={24} />
	{/if}
</button>

<!-- Overlay -->
<button 
	class="sidebar-overlay" 
	class:visible={isOpen}
	onclick={closeSidebar}
	aria-label="Close menu"
></button>

<div class="sidebar-container" class:open={isOpen}>
	<p class="sidebar-title">Frontend Developer</p>
	<nav class="sidebar-nav">
		<details open={homeOpen}>
			<summary class:active={currentPath === '/'} onclick={navigateToHome}>
				<Home size={18} />
				<span>Home</span>
			</summary>
			<ul>
				<li><a href="/#about" class:active={currentPath === '/' && (currentHash === '' || currentHash === '#about')} onclick={handleLinkClick}>About</a></li>
				<li><a href="/#experience" class:active={currentPath === '/' && currentHash === '#experience'} onclick={handleLinkClick}>Experience</a></li>
				<li><a href="/#featured-projects" class:active={currentPath === '/' && currentHash === '#featured-projects'} onclick={handleLinkClick}>Featured</a></li>
			</ul>
		</details>
		<details open={profileOpen}>
			<summary class:active={currentPath === '/profile'} onclick={navigateToProfile}>
				<User size={18} />
				<span>Profile</span>
			</summary>
			<ul>
				<li><a href="/profile#personal-info" class:active={currentPath === '/profile' && currentHash === '#personal-info'} onclick={handleLinkClick}>Personal Info</a></li>
				<li><a href="/profile#experience" class:active={currentPath === '/profile' && currentHash === '#experience'} onclick={handleLinkClick}>Experience</a></li>
				<li><a href="/profile#skills" class:active={currentPath === '/profile' && currentHash === '#skills'} onclick={handleLinkClick}>Skills</a></li>
				<li><a href="/profile#interests" class:active={currentPath === '/profile' && currentHash === '#interests'} onclick={handleLinkClick}>Interests</a></li>
				<li><a href="/profile#connect" class:active={currentPath === '/profile' && currentHash === '#connect'} onclick={handleLinkClick}>Connect</a></li>
			</ul>
		</details>
		<a href="/projects" class="nav-link" class:active={currentPath.startsWith('/projects')} onclick={navigateToProjects}>
			<FolderCode size={18} />
			<span>Projects</span>
		</a>
		<a href="/contact" class="nav-link" class:active={currentPath === '/contact'} onclick={navigateToContact}>
			<Mail size={18} />
			<span>Contact</span>
		</a>
	</nav>
</div>

<style>
	.mobile-menu-btn {
		position: fixed;
		top: 1rem;
		left: 1rem;
		z-index: 150;
		background-color: var(--color-surface);
		border: 1px solid var(--color-border);
		color: var(--color-text);
		padding: 0.5rem;
		border-radius: 0.5rem;
		cursor: pointer;
		display: none;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.mobile-menu-btn.open {
		left: 216px;
	}

	.mobile-menu-btn:hover {
		background-color: var(--color-primary);
		color: white;
		transform: scale(1.05);
	}

	.sidebar-overlay {
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 90;
		display: none;
		cursor: pointer;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.3s ease;
	}

	.sidebar-container {
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		background-color: transparent;
		z-index: 100;
		padding: 2rem 1rem;
		transition: all 0.3s ease;
	}

	@media (max-width: 768px) {
		.mobile-menu-btn {
			display: flex;
		}

		.sidebar-overlay {
			display: block;
		}

		.sidebar-overlay.visible {
			opacity: 1;
			pointer-events: auto;
		}

		.sidebar-container {
			background-color: var(--color-background);
			border-right: 1px solid var(--color-border);
			box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
			transform: translateX(-100%);
		}

		.sidebar-container.open {
			transform: translateX(0);
		}
	}

	.sidebar-title {
		font-size: 0.75rem;
		padding: 0 0.5rem 1.5rem;
		color: var(--color-text-muted);
		font-weight: 500;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		transition: color 0.3s ease;
	}

	.sidebar-nav {
		display: flex;
		flex-direction: column;
		width: 200px;
		height: calc(100vh - 8rem);
		padding: 0;
		font-size: 0.95rem;
		overflow-y: auto;
		gap: 0.5rem;
	}

	.sidebar-nav::-webkit-scrollbar {
		width: 3px;
	}

	.sidebar-nav::-webkit-scrollbar-track {
		background: transparent;
	}

	.sidebar-nav::-webkit-scrollbar-thumb {
		background: var(--color-border);
		border-radius: 2px;
	}

	details {
		border-radius: 0.5rem;
	}

	summary {
		cursor: pointer;
		padding: 0.875rem 1rem;
		color: var(--color-text-muted);
		transition: all 0.2s ease;
		font-weight: 500;
		margin-bottom: 0;
		border-radius: 0.5rem;
		list-style: none;
		user-select: none;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background-color: transparent;
	}

	summary::-webkit-details-marker {
		display: none;
	}

	summary::marker {
		display: none;
	}

	summary:hover {
		color: var(--color-text);
		background-color: transparent;
		transform: translateX(4px);
	}

	summary.active {
		color: var(--color-primary);
		background-color: transparent;
	}

	ul {
		padding: 0.25rem 0 0.5rem 0;
		margin-left: 2.5rem;
		border-left: 2px solid transparent;
		font-size: 0.875rem;
		list-style: none;
		transition: border-color 0.2s ease;
	}

	details[open] > ul {
		border-left-color: var(--color-border);
	}

	li {
		padding: 0.125rem 0;
	}

	a {
		color: var(--color-text-muted);
		text-decoration: none;
		transition: all 0.2s ease;
		display: block;
		padding: 0.5rem 0.75rem;
		border-radius: 0.375rem;
		font-size: 0.875rem;
	}

	a:hover {
		color: var(--color-text);
		background-color: transparent;
		transform: translateX(4px);
	}

	a.active {
		color: var(--color-primary);
		background-color: transparent;
		font-weight: 500;
		position: relative;
	}

	a.active::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 3px;
		height: 60%;
		background-color: var(--color-primary);
		border-radius: 2px;
	}

	.nav-link {
		cursor: pointer;
		padding: 0.875rem 1rem;
		color: var(--color-text-muted);
		transition: all 0.2s ease;
		font-weight: 500;
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		background-color: transparent;
		text-decoration: none;
	}

	.nav-link:hover {
		color: var(--color-text);
		background-color: transparent;
		transform: translateX(4px);
	}

	.nav-link.active {
		color: var(--color-primary);
		background-color: transparent;
	}
</style>

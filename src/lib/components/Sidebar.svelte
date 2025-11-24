<script lang="ts">
	import { page } from '$app/stores';
	
	$: currentPath = $page.url.pathname;
	$: currentHash = $page.url.hash;
</script>

<div class="sidebar-container">
	<p class="sidebar-title">Frontend Developer</p>
	<nav class="sidebar-nav">
		<details open>
			<summary class:active={currentPath === '/'}>🏠 Home</summary>
			<ul>
				<li><a href="/#hero-title" class:active={currentPath === '/' && currentHash === '#hero-title'}>Presentation</a></li>
				<li><a href="/#about" class:active={currentPath === '/' && currentHash === '#about'}>About</a></li>
				<li><a href="/#experience" class:active={currentPath === '/' && currentHash === '#experience'}>Experience</a></li>
				<li><a href="/#featured-projects" class:active={currentPath === '/' && currentHash === '#featured-projects'}>Featured</a></li>
			</ul>
		</details>
		<details>
			<summary class:active={currentPath === '/profile'}>👤 Profile</summary>
			<ul>
				<li><a href="/profile#personal-info" class:active={currentPath === '/profile' && currentHash === '#personal-info'}>Personal Info</a></li>
				<li><a href="/profile#experience" class:active={currentPath === '/profile' && currentHash === '#experience'}>Experience</a></li>
				<li><a href="/profile#skills" class:active={currentPath === '/profile' && currentHash === '#skills'}>Skills</a></li>
				<li><a href="/profile#interests" class:active={currentPath === '/profile' && currentHash === '#interests'}>Interests</a></li>
				<li><a href="/profile#connect" class:active={currentPath === '/profile' && currentHash === '#connect'}>Connect</a></li>
			</ul>
		</details>
		<details>
			<summary class:active={currentPath === '/projects'}>💻 Projects</summary>
			<ul>
				<li><a href="/projects" class:active={currentPath === '/projects'}>All Projects</a></li>
			</ul>
		</details>
		<details>
			<summary class:active={currentPath === '/contact'}>📧 Contact</summary>
			<ul>
				<li><a href="/contact#contact-form" class:active={currentPath === '/contact' && currentHash === '#contact-form'}>Contact Form</a></li>
			</ul>
		</details>
	</nav>
</div>

<style>
	.sidebar-container {
		position: fixed;
		left: 0;
		top: 0;
		height: 100vh;
		background-color: rgba(30, 41, 59, 0.8);
		border-right: 2px solid rgba(100, 116, 139, 0.5);
		backdrop-filter: blur(8px);
		z-index: 100;
	}

	.sidebar-title {
		font-size: 1rem;
		padding: 1rem;
		border-bottom: 2px solid rgba(100, 116, 139, 0.5);
		color: rgba(255, 255, 255, 0.9);
		font-weight: 500;
	}

	.sidebar-nav {
		display: flex;
		flex-direction: column;
		width: 240px;
		height: calc(100vh - 3.5rem);
		padding: 1rem;
		font-size: 1.125rem;
		overflow-y: auto;
	}

	summary {
		cursor: pointer;
		padding: 0.75rem 0.5rem;
		color: rgba(255, 255, 255, 0.7);
		transition: color 0.2s ease;
		font-weight: 500;
		margin-bottom: 0.25rem;
	}

	summary:hover {
		color: rgba(255, 255, 255, 0.95);
	}

	summary.active {
		color: #34d399;
	}

	ul {
		padding: 0.5rem 0;
		margin-left: 1.75rem;
		border-left: 2px solid rgba(100, 116, 139, 0.3);
		font-size: 0.95rem;
	}

	li {
		padding: 0.35rem 0;
	}

	a {
		color: rgba(255, 255, 255, 0.6);
		text-decoration: none;
		transition: color 0.2s ease;
		display: block;
		padding: 0.25rem 0.75rem;
		border-radius: 0.25rem;
	}

	a:hover {
		color: rgba(255, 255, 255, 0.9);
		background-color: rgba(255, 255, 255, 0.05);
	}

	a.active {
		color: #34d399;
		background-color: rgba(52, 211, 153, 0.1);
	}
</style>

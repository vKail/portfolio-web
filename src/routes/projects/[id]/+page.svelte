<script lang="ts">
	import { page } from '$app/stores';
	import { projectsData } from '../../../features/projects/data/projects.data';
	import { projectDetailsData } from '../../../features/projects/data/project-details.data';
	import { Github, ExternalLink, Calendar, ArrowLeft } from '@lucide/svelte';
	
	$: projectId = $page.params.id;
	$: project = projectsData.find(p => p.id === projectId);
	$: projectDetails = project ? projectDetailsData[project.id] : null;
</script>

<svelte:head>
	<title>{project?.name || 'Project'} - Adrian Jurado</title>
</svelte:head>

{#if project && projectDetails}
	<div class="min-h-screen">
		<!-- Header -->
		<div class="pt-12 pb-8 px-4 sm:px-8 max-w-[1400px] mx-auto">
			<a href="/projects" class="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-6">
				<ArrowLeft size={20} />
				<span>Back to Projects</span>
			</a>
			
			<h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style="color: var(--color-text);">
				{project.name}
			</h1>
			
			<div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm sm:text-base text-[var(--color-text-muted)] mb-6">
				<div class="flex items-center gap-2">
					<Calendar size={18} />
					<span>{project.year}</span>
				</div>
				{#if project.github}
					<a 
						href={project.github} 
						target="_blank" 
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors"
					>
						<Github size={18} />
						<span class="hidden sm:inline">View on GitHub</span>
						<span class="sm:hidden">GitHub</span>
						<ExternalLink size={16} />
					</a>
				{/if}
			</div>
		</div>

		<!-- Main Content -->
		<div class="max-w-[1400px] mx-auto px-4 sm:px-8 pb-16">
			<!-- Project Image -->
			<div class="max-w-[900px] mx-auto rounded-lg overflow-hidden mb-16 border shadow-lg" style="border-color: var(--color-border);">
				<img 
					src={project.image} 
					alt={project.name} 
					class="w-full aspect-video object-cover opacity-70"
				/>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
				<!-- Main Description -->
				<div class="lg:col-span-3 space-y-8 lg:space-y-12">
					<section>
						<h2 class="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 pb-3 border-b" style="color: var(--color-text); border-color: var(--color-border);">
							Description
						</h2>
						<p class="text-base sm:text-lg leading-relaxed max-w-[800px]" style="color: var(--color-text-muted);">
							{project.description}
						</p>
					</section>

					<!-- Features Section -->
					<section>
						<h2 class="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 pb-3 border-b" style="color: var(--color-text); border-color: var(--color-border);">
							Key Features
						</h2>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-[900px]">
							{#each projectDetails.features as feature}
								<div class="flex items-start gap-3 p-4 rounded-lg transition-colors hover:bg-[var(--color-surface)]">
									<span class="text-[var(--color-primary)] mt-1 text-lg font-bold">▹</span>
									<p class="text-base" style="color: var(--color-text-muted);">{feature}</p>
								</div>
							{/each}
						</div>
					</section>

					<!-- Architecture Section -->
					<section>
						<h2 class="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 pb-3 border-b" style="color: var(--color-text); border-color: var(--color-border);">
							Architecture
						</h2>
						<div class="p-4 sm:p-6 rounded-lg border" style="background-color: var(--color-surface); border-color: var(--color-border);">
							<p class="text-base leading-relaxed max-w-[800px]" style="color: var(--color-text-muted);">
								{projectDetails.architecture}
							</p>
						</div>
					</section>
				</div>
			
				<!-- Sidebar -->
				<div class="lg:col-span-1">
					<div class="lg:sticky lg:top-8 space-y-6">
						<!-- Technologies -->
						<section class="p-4 sm:p-6 rounded-lg border" style="background-color: var(--color-surface); border-color: var(--color-border);">
							<h3 class="text-base sm:text-lg font-semibold mb-4" style="color: var(--color-text);">
								Technologies
							</h3>
							<div class="flex flex-wrap gap-2">
								{#each project.tools as tool}
									<span 
										class="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm border transition-all hover:border-[var(--color-primary)] hover:scale-105"
										style="background-color: var(--color-background); color: var(--color-text-muted); border-color: var(--color-border);"
									>
										{tool}
									</span>
								{/each}
							</div>
						</section>

						<!-- Project Info -->
						<section class="p-4 sm:p-6 rounded-lg border" style="background-color: var(--color-surface); border-color: var(--color-border);">
							<h3 class="text-base sm:text-lg font-semibold mb-4" style="color: var(--color-text);">
								Project Info
							</h3>
							<dl class="space-y-3">
								<div>
									<dt class="text-sm font-medium mb-1" style="color: var(--color-text-muted);">Year</dt>
									<dd class="text-sm sm:text-base" style="color: var(--color-text);">{project.year}</dd>
								</div>
								{#if project.github}
									<div>
										<dt class="text-sm font-medium mb-1" style="color: var(--color-text-muted);">Repository</dt>
										<dd>
											<a 
												href={project.github} 
												target="_blank" 
												rel="noopener noreferrer"
												class="text-sm sm:text-base hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1"
												style="color: var(--color-text);"
											>
												GitHub
												<ExternalLink size={14} />
											</a>
										</dd>
									</div>
								{/if}
							</dl>
						</section>
					</div>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div class="min-h-screen flex items-center justify-center">
		<div class="text-center">
			<h1 class="text-3xl font-bold mb-4" style="color: var(--color-text);">Project Not Found</h1>
			<a href="/projects" class="text-[var(--color-primary)] hover:underline">
				Back to Projects
			</a>
		</div>
	</div>
{/if}

<script>
	import { softSkillsDisplay, startSoftSkillsTyping } from '../uses-cases/softskills.ts';
	import { onMount } from 'svelte';
	
	onMount(() => {
		startSoftSkillsTyping();
	});
</script>

<div class="soft-skills-section">
	<h2 class="section-title">Soft Skills</h2>
	<div class="skills-layout">
		<div class="skills-content">
			<p>
				I consider myself a highly collaborative team player who thrives in group environments. I believe that the best results come from collective effort, where diverse perspectives and skills merge to create something greater than the sum of its parts. I'm always committed to giving my absolute best in every project I undertake, pushing myself to deliver quality work and exceed expectations. When challenges arise and things don't go as planned, I don't see them as failures but as opportunities to learn and grow. My resilience and determination drive me to keep moving forward, adapting to new circumstances, and finding creative solutions to overcome obstacles. I'm constantly seeking ways to improve myself, both professionally and personally, and I embrace feedback as a tool for growth. Working in a team isn't just about completing tasks; it's about building relationships, fostering communication, and creating an environment where everyone can contribute their strengths. I take pride in being reliable, supportive, and always ready to step up when needed.
			</p>
		</div>
		<div class="emoji-container">
			<span class="emoji">💪</span>
		</div>
	</div>
</div>

<style>
	.soft-skills-section {
		max-width: 1000px;
		width: 100%;
		padding: 3rem 0;
	}

	.section-title {
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: 2rem;
		letter-spacing: -0.02em;
	}

	.skills-layout {
		display: flex;
		gap: 3rem;
		align-items: center;
	}

	.skills-content {
		flex: 1;
	}

	.skills-content p {
		font-size: 1.05rem;
		line-height: 1.8;
		color: var(--color-text-muted);
		text-align: justify;
	}

	.emoji-container {
		flex-shrink: 0;
	}

	.emoji {
		font-size: 8rem;
		opacity: 0.6;
		display: block;
	}

	@media (max-width: 768px) {
		.skills-layout {
			flex-direction: column;
		}

		.emoji {
			font-size: 5rem;
		}
	}
</style>

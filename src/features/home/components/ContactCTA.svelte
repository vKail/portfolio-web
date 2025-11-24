<script lang="ts">
	import { scrollAnimation } from '$lib/utils/scroll-animation';
	import '../styles/sections.css';
</script>

<section class="max-w-[1000px] w-full py-16 px-8 mx-auto fade-in" use:scrollAnimation id="contact-cta">
	<div class="text-center py-16 px-8">
		<p class="text-xl text-white/60 mb-4">What's Next?</p>
		<h2 class="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Get In Touch</h2>
		
		<p class="max-w-[600px] mx-auto mb-12 text-white/70 leading-relaxed text-[1.05rem]">
			I'm currently looking for new opportunities and exciting projects to work on. 
			Whether you have a question, want to collaborate, or just want to say hi, 
			my inbox is always open. I'll do my best to get back to you!
		</p>
		
		<a href="/contact" class="inline-block py-5 px-10 bg-transparent text-[#34d399] border-2 border-[#34d399] rounded-md text-[1.05rem] font-semibold transition-all duration-300 hover:bg-[#34d399]/10 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(52,211,153,0.2)]">
			Say Hello
		</a>
		
		<div class="mt-8 flex justify-center gap-8 flex-wrap">
			<a href="/profile" class="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-[#60A5FA]">Learn more about me</a>
			<a href="/projects" class="text-white/60 text-[0.95rem] transition-colors duration-300 hover:text-[#60A5FA]">View all projects</a>
		</div>
	</div>
</section>

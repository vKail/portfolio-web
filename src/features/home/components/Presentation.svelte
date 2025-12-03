<script>
	import { display, startTyping } from '../uses-cases/presentation.ts';
	import '../styles/presentation.css';
	startTyping();
</script>

<div
	class="flex items-end p-6 text-3xl rounded-lg rounded-b-md fade-in"
	style="width: 1200px; max-width: 95vw; border: 1px solid var(--color-border); background-color: var(--color-surface);"
>
	<div class="pr-6 flex items-center fade-in-left">
		<img
			class="opacity-25 image-rendering-pixelated max-w-64 h-auto"
			src="/barca.png"
			alt="pixel-art"
		/>
	</div>

	<div class="flex flex-col fade-in-right">
		<div class="flex-1 whitespace-pre-wrap break-words" style="color: var(--color-text);">
			<pre class="min-h-[540px]">{$display}<span class="cursor"></span></pre>
		</div>
		<div class="flex mt-4 gap-1">
			<div class="w-6 h-6 bg-[#07839C]"></div>
			<div class="w-6 h-6 bg-[#9C2007]"></div>
			<div class="w-6 h-6" style="background-color: var(--color-text);"></div>
			<div class="w-6 h-6" style="background-color: var(--color-border);"></div>
		</div>
	</div>
</div>

<script>
	import { display, startTyping } from '../uses-cases/presentation.ts';
	import '../styles/presentation.css';
	startTyping();
</script>

<div
	class="flex items-end p-6 text-3xl border border-gray-700/50 rounded-lg bg-gray-900/10 rounded-b-md"
	style="width: 1200px; max-width: 95vw;"
>
	<div class="pr-6 flex items-center">
		<img
			class="opacity-25 image-rendering-pixelated max-w-64 h-auto"
			src="/barca.png"
			alt="pixel-art"
		/>
	</div>

	<div class="flex flex-col">
		<div class="flex-1 text-white whitespace-pre-wrap break-words">
			<pre class="min-h-[540px]">{$display}<span class="cursor"></span></pre>
		</div>
		<div class="flex mt-4">
			<div class="w-6 h-6 bg-red-500"></div>
			<div class="w-6 h-6 bg-green-500"></div>
			<div class="w-6 h-6 bg-yellow-500"></div>
			<div class="w-6 h-6 bg-blue-500"></div>
			<div class="w-6 h-6 bg-purple-500"></div>
			<div class="w-6 h-6 bg-pink-500"></div>
			<div class="w-6 h-6 bg-teal-500"></div>
			<div class="w-6 h-6 bg-gray-500"></div>
		</div>
	</div>
</div>

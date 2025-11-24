import { writable } from 'svelte/store';
export const typingSpeed = 25;
export const lineDelay = 300;
import { lines } from '../data/presentation.data.ts';
export const display = writable('');

export const startTyping = () => {
	let currentLine = 0;
	let currentDisplay = '';

	const typeLine = async () => {
		if (currentLine >= lines.length) return;

		let text = lines[currentLine];
		if (currentLine === lines.length - 1) {
			text = text.slice(0, -1);
		}

		for (let i = 0; i < text.length; i++) {
			currentDisplay += text[i];
			display.set(currentDisplay);
			await new Promise((r) => setTimeout(r, typingSpeed));
		}

		currentDisplay += '\n';

		currentLine++;

		setTimeout(typeLine, lineDelay);
	};

	typeLine();
};

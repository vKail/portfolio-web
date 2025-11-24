import { writable } from 'svelte/store';
import { softSkillsLines } from '../data/softskills.data.ts';

export const typingSpeed = 25;
export const lineDelay = 300;

export const softSkillsDisplay = writable('');

export const startSoftSkillsTyping = () => {
	let currentLine = 0;
	let currentDisplay = '';

	const typeLine = async () => {
		if (currentLine >= softSkillsLines.length) return;

		let text = softSkillsLines[currentLine];
		if (currentLine === softSkillsLines.length - 1) {
			text = text.slice(0, -1);
		}

		for (let i = 0; i < text.length; i++) {
			currentDisplay += text[i];
			softSkillsDisplay.set(currentDisplay);
			await new Promise((r) => setTimeout(r, typingSpeed));
		}

		currentDisplay += '\n';

		currentLine++;

		setTimeout(typeLine, lineDelay);
	};

	typeLine();
};

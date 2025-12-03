import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
	if (!browser) return 'light';
	
	const stored = localStorage.getItem('theme');
	if (stored === 'light' || stored === 'dark') {
		return stored;
	}
	
	return 'light';
};

export const theme = writable<Theme>(getInitialTheme());

if (browser) {
	theme.subscribe((value) => {
		localStorage.setItem('theme', value);
		if (value === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
}

export const toggleTheme = () => {
	theme.update((current) => (current === 'light' ? 'dark' : 'light'));
};

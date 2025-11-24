export const scrollAnimation = (node: HTMLElement, threshold = 0.1) => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('fade-in-visible');
				}
			});
		},
		{
			threshold,
			rootMargin: '0px 0px -100px 0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};

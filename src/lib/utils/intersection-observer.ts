interface IntersectionOptions {
	threshold?: number;
	rootMargin?: string;
}

export const fadeInOnScroll = (
	node: HTMLElement,
	options: IntersectionOptions = {}
) => {
	const { threshold = 0.1, rootMargin = '0px' } = options;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Trigger animation
					entry.target.classList.add('fade-in-visible');
					// Stop observing after animation
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold,
			rootMargin
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};

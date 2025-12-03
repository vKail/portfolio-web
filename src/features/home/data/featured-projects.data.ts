export const featuredProjects = [
	{
		id: 'rental-cars',
		name: 'Rental Cars System',
		description: 'Complete vehicle rental management system with online reservations, fleet administration, and multi-role management. Features advanced search, real-time booking, integrated payments with Stripe, and comprehensive financial reporting.',
		image: '/rental-cars.jpeg',
		technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
		link: '/projects',
		featured: true
	},
	{
		id: 'ecuatickets',
		name: 'EcuaTickets Platform',
		description: 'Complete digital platform for interprovincial bus ticket sales in Ecuador. Includes web app for purchases with QR codes, mobile driver app for validation, real-time seat availability, secure payments, and GPS tracking.',
		image: '/ecuatickets-app.png',
		technologies: ['React Native', 'TypeScript', 'Zustand', 'QR Scanner'],
		link: '/projects',
		featured: true
	},
	{
		id: 'championship-football',
		name: 'Championship Football',
		description: 'Full-stack application for managing football championships with REST API and clean architecture. Features real-time updates via WebSocket, automatic league standings calculation, comprehensive statistics, and tournament management.',
		image: '/championship-football.png',
		technologies: ['React', 'TypeScript', 'PostgreSQL', 'Prisma ORM'],
		link: '/projects',
		featured: true
	}
];

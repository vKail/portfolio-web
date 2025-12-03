export interface ProjectDetails {
	id: string;
	features: string[];
	architecture: string;
}

export const projectDetailsData: Record<string, ProjectDetails> = {
	'rental-cars': {
		id: 'rental-cars',
		features: [
			'Advanced vehicle search with filters by category, price, and availability',
			'Real-time reservation system with instant confirmation',
			'Integrated payments with Stripe for secure transactions',
			'Complete administrative panel for fleet management',
			'Multi-role system: client, employee, and administrator',
			'Financial and analytical reports with data visualization'
		],
		architecture: 'Full-stack application built with Next.js 14 using App Router and Server Components. Authentication handled via NextAuth.js with role-based access control. Prisma ORM provides type-safe database operations with PostgreSQL. Zustand manages complex client state while TanStack Query handles server state synchronization. Stripe integration follows best practices with webhook verification for secure payment processing.'
	},
	'championship-football': {
		id: 'championship-football',
		features: [
			'CRUD operations for teams, players, and tournaments',
			'Fixture and match result management',
			'Automatic calculation of league standings and statistics',
			'Real-time updates via WebSocket connections',
			'REST API with comprehensive Swagger documentation',
			'Dockerized deployment with PostgreSQL database'
		],
		architecture: 'REST API developed with clean architecture separating application, domain, infrastructure, and presentation layers. Uses Prisma ORM for type-safe database access and migrations. Docker containerization ensures consistent development and production environments. WebSocket integration provides real-time updates for match scores and league standings.'
	},
	'ecuatickets': {
		id: 'ecuatickets',
		features: [
			'Online ticket purchase with digital QR codes',
			'Mobile driver app for ticket validation via QR scanning',
			'Real-time seat availability and route visualization',
			'Multiple payment methods with secure integration',
			'GPS tracking for buses and passenger registration',
			'Push notifications for trip updates and reminders'
		],
		architecture: 'Complete platform combining web and mobile applications. The mobile apps are developed as PWAs using React Native for cross-platform compatibility. State management with Zustand and data fetching with TanStack Query provide optimal performance. The architecture follows feature-based organization with clean separation of concerns.'
	},
	'pet-control': {
		id: 'pet-control',
		features: [
			'Complete pet registration with detailed profiles',
			'Medical history and vaccination records management',
			'Appointment scheduling with automatic reminders',
			'JWT authentication and authorization system',
			'Dashboard with clinic metrics and statistics',
			'Integrated billing module with invoice generation'
		],
		architecture: 'Full-stack application with React Native mobile frontend and Spring Boot backend. The backend implements clean architecture with clear separation between application, domain, infrastructure, and presentation layers. JWT-based authentication ensures secure API access. The mobile app uses Zustand for state management and Material-UI for consistent design.'
	},
	'gitt-inventory': {
		id: 'gitt-inventory',
		features: [
			'Full CRUD operations for products and equipment',
			'Real-time stock control with automatic updates',
			'Minimum stock alerts and notifications',
			'Management by locations and workshop areas',
			'Dashboard with key metrics and KPIs',
			'Analytical reports and rotation analysis'
		],
		architecture: 'Frontend application built with React and TypeScript following clean architecture by features. Each feature module contains its own presentation components, custom hooks, service layer, and interface definitions. TanStack Query handles server state management with automatic caching and refetching. The shared layer contains reusable utilities and components.'
	},
	'routes-ecuador': {
		id: 'routes-ecuador',
		features: [
			'Optimization algorithms (A*, Dijkstra) for route finding',
			'Geographical data analysis with ML techniques',
			'Travel time prediction using machine learning models',
			'Interactive route visualization with maps',
			'Performance comparison between optimization strategies',
			'Data processing pipelines for Ecuadorian road networks'
		],
		architecture: 'Python-based AI project structured with clear separation between data processing, ML models, algorithms, and visualization modules. Uses Jupyter Notebooks for exploratory data analysis and algorithm development. The codebase is organized to facilitate experimentation while maintaining code quality and reproducibility.'
	},
	'depreciacion-calc': {
		id: 'depreciacion-calc',
		features: [
			'Multiple depreciation methods (linear, declining balance, sum-of-years)',
			'Custom asset category management',
			'Interactive charts and depreciation schedules',
			'PDF report generation with detailed breakdowns',
			'Asset lifecycle tracking and projections',
			'Batch calculation for multiple assets'
		],
		architecture: 'React application with TypeScript using clean architecture organized by features. The depreciation feature contains all related components, hooks, services, and interfaces. Zustand manages application state efficiently. The architecture allows easy addition of new depreciation methods and calculation types.'
	},
	'restaurant-model': {
		id: 'restaurant-model',
		features: [
			'Real-time order management between kitchen and waiters',
			'Interactive table reservation and status tracking',
			'Digital menu with categories and modifiers',
			'Kitchen display system with preparation workflow',
			'Order tracking with live status updates',
			'Invoice generation and payment processing'
		],
		architecture: 'Full-stack application with React frontend and Node.js backend. Socket.io enables real-time communication between kitchen, waiters, and customers. MongoDB provides flexible document storage for menus and orders. The architecture supports high concurrency for simultaneous order processing.'
	}
};

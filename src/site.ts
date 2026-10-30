/**
 * Facts about the class that appear on more than one page.
 * Contact lines that are `null` are hidden everywhere; fill them in when SSV confirms them.
 */
export const site = {
	name: 'Shree Siddhivinayak Classes',
	short: 'SSV Classes',
	url: 'https://siddhivinayakclasses.org',
	tagline: 'Learn it once. Learn it right.',
	description:
		'Shree Siddhivinayak Classes (SSV) teaches Physics, Chemistry and Maths for Standards 11 and 12 (GSEB, GUJCET, NEET). The SSV app brings our video lessons, notes and progress tracking to Android and iPhone.',
	email: 'contact@siddhivinayakclasses.org',
	/** E.164 without spaces, e.g. "+919800000000" */
	phone: null as string | null,
	/** wa.me or chat.whatsapp.com link */
	whatsapp: null as string | null,
	address: null as string | null,
	youtube: 'https://www.youtube.com/@Siddhivinayak-Classes',
	exams: ['GSEB', 'GUJCET', 'NEET'],
	updated: '29 October 2026',
} as const;

export const subjects = [
	{
		key: 'physics',
		name: 'Physics',
		mark: 'Ph',
		color: '#0B5FE0',
		image: '/teachers/physics.webp',
		line: 'Motion, forces, waves and fields, explained with diagrams until the formula makes sense.',
	},
	{
		key: 'chemistry',
		name: 'Chemistry',
		mark: 'Ch',
		color: '#0E7490',
		image: '/teachers/chemistry.webp',
		line: 'Atomic structure, bonding and reactions, with the reasoning behind each equation you balance.',
	},
	{
		key: 'maths',
		name: 'Maths',
		mark: 'Ma',
		color: '#1E3A8A',
		image: '/teachers/maths.webp',
		line: 'Calculus and algebra worked step by step, until you can solve the problems on your own.',
	},
] as const;

export type SubjectKey = (typeof subjects)[number]['key'];

/** The content types an SSV course is organised into, as they appear in the app. */
export const contentTypes = [
	{ name: 'Theory', note: 'The chapter taught from first principles.' },
	{ name: 'Concept boosters', note: 'Short videos on the ideas students get stuck on.' },
	{ name: 'NEET DPP', note: 'Daily practice problems for NEET.' },
	{ name: 'Past papers', note: 'NEET, GUJCET and GSEB previous-year questions, solved.' },
	{ name: 'Notes & PDFs', note: 'Formula sheets and study notes you can download.' },
];

export const nav = [
	{ to: '/', label: 'Home' },
	{ to: '/courses', label: 'Courses' },
	{ to: '/about', label: 'About' },
	{ to: '/contact', label: 'Contact' },
];

export const legal = [
	{ to: '/privacy', label: 'Privacy policy' },
	{ to: '/delete-account', label: 'Delete account' },
	{ to: '/terms', label: 'Terms of use' },
	{ to: '/refund', label: 'Refund policy' },
	{ to: '/delivery', label: 'Delivery policy' },
];

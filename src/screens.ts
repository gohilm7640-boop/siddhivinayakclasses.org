import type { Screen } from './components/Phone';

/** Real captures from the SSV app (demo data only). Admin home is left out on purpose: it shows revenue. */
const NAVY = '#0B1F4D';

export const screens = {
	welcome: { src: '/screens/welcome.webp', alt: 'SSV app welcome screen with the tagline Learn it once. Learn it right. and buttons to create an account or sign in' },
	home: { src: '/screens/home.webp', alt: "SSV app home screen with this week's progress, a lesson to continue and the Start here videos" },
	courses: { src: '/screens/courses.webp', alt: 'Courses screen filtered by subject and content type, showing the How to Learn? course' },
	chapter: { src: '/screens/chapter.webp', alt: 'A chapter in the app listing its videos and PDFs' },
	player: { src: '/screens/player.webp', alt: 'Video lesson playing in the app, titled How to Learn? A message from your teacher' },
	notes: { src: '/screens/notes.webp', alt: 'Notes screen listing Physics and Chemistry PDFs for Standard 12' },
	pdf: { src: '/screens/pdf.webp', alt: 'A Physics PDF open in the app with a Download PDF button' },
	progress: { src: '/screens/progress.webp', alt: 'My progress screen: share of lessons watched, minutes this week and progress per subject' },
	assistant: { src: '/screens/assistant-empty.webp', alt: 'Study assistant screen asking what you are studying, with suggested questions to try' },
	redeem: { src: '/screens/redeem-filled.webp', alt: 'Redeem SSV code screen with a class code entered' },
	locked: { src: '/screens/learner-course-locked.webp', alt: 'A course page for a learner with a Buy course button and a link to redeem an SSV code' },
	adminMenu: { src: '/screens/admin-menu.webp', alt: 'Admin console menu: dashboard, courses, notes library, students, registration codes, reviews, purchases and settings', bar: NAVY },
	adminCodes: { src: '/screens/admin-codes.webp', alt: 'Admin screen for creating a registration code by date and standard' },
} satisfies Record<string, Screen>;

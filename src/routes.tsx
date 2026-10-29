import type { ReactElement } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Home from './pages/Home';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

export type RouteDef = { path: string; title: string; description: string; element: ReactElement };

/** One list drives the router, document titles, prerendered HTML and the sitemap. */
export const routes: RouteDef[] = [
	{
		path: '/',
		title: 'Shree Siddhivinayak Classes | Physics, Chemistry & Maths for Std 11 & 12',
		description:
			'Physics, Chemistry and Maths for Standards 11 and 12 (GSEB, GUJCET, NEET) from Shree Siddhivinayak Classes. Video lessons, notes and progress tracking in the SSV app for Android and iPhone.',
		element: <Home />,
	},
	{
		path: '/courses',
		title: 'Courses | Shree Siddhivinayak Classes',
		description: 'How SSV courses are built: Physics, Chemistry and Maths for Standards 11 and 12, chapter by chapter, with theory videos, concept boosters, past papers and notes.',
		element: <Courses />,
	},
	{
		path: '/about',
		title: 'About | Shree Siddhivinayak Classes',
		description: 'Shree Siddhivinayak Classes teaches Physics, Chemistry and Maths for Standards 11 and 12. Meet the teachers behind the SSV app and how they teach.',
		element: <About />,
	},
	{
		path: '/contact',
		title: 'Contact | Shree Siddhivinayak Classes',
		description: 'Contact Shree Siddhivinayak Classes about admissions, class codes for the SSV app, courses and payments.',
		element: <Contact />,
	},
	{ path: '/privacy', title: 'Privacy policy | Shree Siddhivinayak Classes', description: 'How Shree Siddhivinayak Classes collects, uses and protects your data on this website and in the SSV app.', element: <Legal doc="privacy" /> },
	{ path: '/terms', title: 'Terms of use | Shree Siddhivinayak Classes', description: 'The terms for using the Shree Siddhivinayak Classes website, the SSV app and its courses.', element: <Legal doc="terms" /> },
	{ path: '/refund', title: 'Cancellation and refund policy | Shree Siddhivinayak Classes', description: 'When and how you can cancel an SSV course and get a refund.', element: <Legal doc="refund" /> },
	{ path: '/delivery', title: 'Delivery policy | Shree Siddhivinayak Classes', description: 'How SSV courses and study material are delivered after you pay.', element: <Legal doc="delivery" /> },
];

export const notFound: RouteDef = {
	path: '*',
	title: 'Page not found | Shree Siddhivinayak Classes',
	description: 'This page does not exist.',
	element: <NotFound />,
};

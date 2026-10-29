/**
 * Structured data (schema.org JSON-LD) for search engines and answer engines.
 * Only facts that are on the page: no ratings, prices or counts.
 */
import { faqs } from './sections/Faq';
import { site, subjects } from './site';

const org = {
	'@type': 'EducationalOrganization',
	'@id': `${site.url}/#org`,
	name: site.name,
	alternateName: ['SSV Classes', 'Siddhivinayak Classes', 'SSV'],
	url: `${site.url}/`,
	logo: `${site.url}/brand/logo-512.png`,
	image: `${site.url}/og.jpg`,
	email: site.email,
	slogan: site.tagline,
	description: site.description,
	areaServed: { '@type': 'State', name: 'Gujarat', containedInPlace: { '@type': 'Country', name: 'India' } },
	knowsAbout: ['Physics', 'Chemistry', 'Mathematics', 'GSEB Standard 11', 'GSEB Standard 12', 'GUJCET', 'NEET'],
	sameAs: [site.youtube],
};

const website = {
	'@type': 'WebSite',
	'@id': `${site.url}/#website`,
	url: `${site.url}/`,
	name: site.name,
	inLanguage: 'en-IN',
	publisher: { '@id': `${site.url}/#org` },
};

export const video = {
	'@type': 'VideoObject',
	'@id': `${site.url}/#film`,
	name: 'Siddhivinayak Classes App: Std 11 & 12 Physics, Chemistry and Maths on your phone',
	description: 'A one-minute tour of the SSV app: chapter-by-chapter video lessons, notes and PDFs, progress tracking, the study assistant and class codes.',
	thumbnailUrl: [`${site.url}/brand/intro-poster.webp`, 'https://i.ytimg.com/vi/Ol2yXqqePA0/maxresdefault.jpg'],
	uploadDate: '2026-10-28T19:49:47-07:00',
	duration: 'PT1M8S',
	contentUrl: 'https://www.youtube.com/watch?v=Ol2yXqqePA0',
	embedUrl: 'https://www.youtube-nocookie.com/embed/Ol2yXqqePA0',
	publisher: { '@id': `${site.url}/#org` },
};

const faqPage = {
	'@type': 'FAQPage',
	'@id': `${site.url}/#faq`,
	mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const courses = {
	'@type': 'ItemList',
	name: 'SSV courses',
	itemListElement: subjects.map((s, i) => ({
		'@type': 'ListItem',
		position: i + 1,
		item: {
			'@type': 'Course',
			name: `${s.name} for Standards 11 and 12`,
			description: `${s.line} For the Gujarat board (GSEB), GUJCET and NEET.`,
			educationalLevel: 'Standards 11 and 12 (Higher Secondary)',
			inLanguage: 'en-IN',
			provider: { '@id': `${site.url}/#org` },
			hasCourseInstance: { '@type': 'CourseInstance', courseMode: ['Onsite', 'Online'] },
		},
	})),
};

function breadcrumb(path: string, name: string) {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
			{ '@type': 'ListItem', position: 2, name, item: `${site.url}${path}` },
		],
	};
}

/** The JSON-LD graph for one page. */
export function schemaFor(path: string, name: string): object {
	const graph: object[] = [org, website];
	if (path === '/') graph.push(video, faqPage);
	else graph.push(breadcrumb(path, name));
	if (path === '/courses') graph.push(courses);
	return { '@context': 'https://schema.org', '@graph': graph };
}

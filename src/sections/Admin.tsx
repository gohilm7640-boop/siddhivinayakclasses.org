import { useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';
import { useRef } from 'react';
import Phone from '../components/Phone';
import { MaskedLines, Reveal } from '../components/Reveal';
import { screens } from '../screens';

const jobs = [
	'Add courses, chapters and video lessons',
	'Upload notes and PDFs, free or paid',
	'Create class codes by standard and end date',
	'See students, purchases and course reviews',
	'Set the support contacts students see in the app',
];

export default function Admin() {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
	const backY = useTransform(scrollYProgress, [0, 1], ['-30%', '-70%']);
	const frontY = useTransform(scrollYProgress, [0, 1], ['-40%', '-60%']);

	return (
		<section className="section section--navy graph-paper" aria-labelledby="admin-title">
			<div className="container admin">
				<div ref={ref} className="admin__phones" aria-hidden="true">
					<Phone kind="android" screen={screens.adminMenu} style={{ y: frontY, rotate: -4 }} />
					<Phone kind="ios" screen={screens.adminCodes} style={{ y: backY, rotate: 4 }} />
				</div>
				<div style={{ display: 'grid', gap: 28 }}>
					<span className="overline">For SSV teachers</span>
					<MaskedLines as="h2" id="admin-title" className="h2" inView lines={['Run the whole class', 'from one dashboard.']} />
					<Reveal>
						<p className="lede">The same app has an admin console for the SSV team. Courses, notes, class codes and students are all managed from a phone.</p>
					</Reveal>
					<Reveal delay={0.1}>
						<ul className="check-list">
							{jobs.map((j) => (
								<li key={j}>
									<Check size={18} aria-hidden="true" />
									{j}
								</li>
							))}
						</ul>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

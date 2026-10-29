import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Phone, { type Screen } from '../components/Phone';
import { MaskedLines } from '../components/Reveal';
import { screens } from '../screens';

type Step = { title: string; body: string; points: string[]; screen: Screen; kind: 'ios' | 'android' };

const steps: Step[] = [
	{
		title: 'Every chapter, in order.',
		body: 'Courses follow your standard and subject. Each chapter holds its theory videos, concept boosters and solved past papers, so you always know what comes next.',
		points: ['Filter by Physics, Chemistry or Maths', 'Theory, concept boosters, NEET, GUJCET and GSEB papers'],
		screen: screens.courses,
		kind: 'ios',
	},
	{
		title: 'Lessons from your own teachers.',
		body: 'The same teachers you meet in class, recorded chapter by chapter. Pause, rewind and rewatch the hard parts as often as you need.',
		points: ['Pick up where you stopped', 'Short lessons that fit between classes'],
		screen: screens.player,
		kind: 'ios',
	},
	{
		title: 'Read it. Download it. Revise it.',
		body: 'Formula sheets, study notes and question sets open right inside the app. Save any PDF to your phone for revision before the test.',
		points: ['Notes grouped by subject and chapter', 'Downloads stay on your device'],
		screen: screens.pdf,
		kind: 'ios',
	},
	{
		title: 'See where you stand.',
		body: 'Lessons finished, minutes studied this week and how far you are in each subject, on one screen. Small daily steps you can actually see.',
		points: ['Weekly study minutes', 'Progress ring for every subject'],
		screen: screens.progress,
		kind: 'ios',
	},
	{
		title: 'Stuck? Ask a doubt.',
		body: 'The study assistant explains Physics, Chemistry and Maths questions step by step, at any hour. For anything important, your teacher is one class away.',
		points: ['Step-by-step explanations', 'Suggested questions to get you started'],
		screen: screens.assistant,
		kind: 'ios',
	},
];

function StepBlock({ step, index, onActive }: { step: Step; index: number; onActive: (i: number) => void }) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { margin: '-45% 0px -45% 0px' });
	useEffect(() => {
		if (inView) onActive(index);
	}, [inView, index, onActive]);
	return (
		<motion.div ref={ref} className="story-step" initial={{ opacity: 0.25 }} whileInView={{ opacity: 1 }} viewport={{ margin: '-30% 0px -30% 0px' }} transition={{ duration: 0.5 }}>
			<span className="story-step__num">{String(index + 1).padStart(2, '0')}</span>
			<h3 className="h2">{step.title}</h3>
			<p className="lede">{step.body}</p>
			<ul className="story-step__points">
				{step.points.map((p) => (
					<li key={p}>{p}</li>
				))}
			</ul>
			<div className="story-step__phone">
				<Phone kind={step.kind} screen={step.screen} />
			</div>
		</motion.div>
	);
}

/** "Inside the app": a sticky phone whose screen follows the step being read. */
export default function Story() {
	const [active, setActive] = useState(0);
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
	const tilt = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 0, 6]);
	const step = steps[active]!;

	return (
		<section id="app" className="section section--white" aria-labelledby="app-title">
			<div className="container">
				<div className="section-head">
					<span className="overline">Inside the SSV app</span>
					<MaskedLines as="h2" id="app-title" className="h2" inView lines={['Everything from class,', 'in your pocket.']} />
				</div>
				<div ref={ref} className="story">
					<div className="story__device">
						<div className="story__rail" aria-hidden="true">
							{steps.map((s, i) => (
								<span key={s.title} data-active={i === active} />
							))}
						</div>
						<Phone kind={step.kind} screen={step.screen} style={{ rotate: tilt }} />
					</div>
					<div className="story__steps">
						{steps.map((s, i) => (
							<StepBlock key={s.title} step={s} index={i} onActive={setActive} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

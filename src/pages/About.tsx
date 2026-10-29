import type { CSSProperties } from 'react';
import PageHero from '../components/PageHero';
import { MaskedLines, Reveal, WordReveal } from '../components/Reveal';
import Cta from '../sections/Cta';
import Principles from '../sections/Principles';
import { subjects } from '../site';

export default function About() {
	return (
		<>
			<PageHero overline="About SSV" lines={['Built in', <span key="b">our <span className="accent">classroom.</span></span>]}>
				<p className="lede">Shree Siddhivinayak Classes teaches Physics, Chemistry and Maths to students in Standards 11 and 12, for the Gujarat board, GUJCET and NEET.</p>
			</PageHero>

			<section className="section section--white" aria-label="Why we built the app">
				<div className="container">
					<span className="overline" style={{ marginBottom: 28 }}>
						Why an app
					</span>
					<WordReveal
						className="statement"
						text="A lesson heard once in class is easy to forget, so we recorded ours chapter by chapter and put them next to the notes and past papers that go with them. Students can go back to any lesson when they revise."
					/>
				</div>
			</section>

			<section className="section" aria-labelledby="teachers-title">
				<div className="container">
					<div className="section-head">
						<span className="overline">Teachers</span>
						<MaskedLines as="h2" id="teachers-title" className="h2" inView lines={['Our teachers.']} />
						<p className="lede">Every video in the SSV app is taught by the same teachers students meet in our classroom.</p>
					</div>
					<div className="teachers">
						{subjects.map((s, i) => (
							<Reveal key={s.key} delay={i * 0.08} className="teacher" style={{ '--subject': s.color } as CSSProperties}>
								<div className="teacher__img">
									<img src={s.image} alt={`Your SSV ${s.name} teacher on a lesson cover`} width={960} height={540} loading="lazy" decoding="async" />
								</div>
								<div className="teacher__label">
									<strong>{s.name}</strong>
									<span>{s.mark}</span>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<Principles />
			<Cta />
		</>
	);
}

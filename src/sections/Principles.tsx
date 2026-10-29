import { Atom, StepsArt, WaveArt } from '../components/Art';
import { MaskedLines, Reveal } from '../components/Reveal';
import { site } from '../site';

const principles = [
	{ title: 'Chapter by chapter', body: 'Chapters follow the order of the syllabus, and each topic builds on the one before it.', art: <StepsArt /> },
	{ title: 'Concept first, then questions', body: 'Understand why it works, then practise it on real previous-year questions from the boards, GUJCET and NEET.', art: <WaveArt /> },
	{ title: 'Made by SSV', body: 'Our own teachers make every video and note in the app.', art: <Atom still label="" /> },
];

export default function Principles() {
	return (
		<section className="section section--white" aria-labelledby="principles-title">
			<div className="container">
				<div className="section-head">
					<span className="overline">Teaching</span>
					<MaskedLines as="h2" id="principles-title" className="h2" inView lines={['How SSV teaches.']} />
				</div>
				<div className="principles">
					{principles.map((p, i) => (
						<Reveal key={p.title} delay={i * 0.08} className="principle">
							<div className="principle__art" aria-hidden="true">
								{p.art}
							</div>
							<h3 className="h3">{p.title}</h3>
							<p className="muted">{p.body}</p>
						</Reveal>
					))}
				</div>
				<Reveal className="exam-strip" aria-label="Exams we prepare for">
					{site.exams.map((e) => (
						<strong key={e}>{e}</strong>
					))}
					<span>Standards 11 and 12, Gujarat board and entrance exams.</span>
				</Reveal>
			</div>
		</section>
	);
}

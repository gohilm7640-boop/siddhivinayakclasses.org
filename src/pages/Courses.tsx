import type { CSSProperties } from 'react';
import { SubjectArt } from '../components/Art';
import PageHero from '../components/PageHero';
import Phone from '../components/Phone';
import { MaskedLines, Reveal } from '../components/Reveal';
import { screens } from '../screens';
import Cta from '../sections/Cta';
import { contentTypes, subjects } from '../site';

const standards = [
	{ num: '11', title: 'Standard 11', body: 'The foundation year. Every idea that Standard 12 and the entrance exams lean on, built carefully from the start.' },
	{ num: '12', title: 'Standard 12', body: 'Board exam year. The full syllabus for GSEB, with the GUJCET and NEET questions that test it.' },
];

export default function Courses() {
	return (
		<>
			<PageHero overline="Courses" lines={['Physics, Chemistry', <span key="m">and <span className="accent">Maths.</span></span>]}>
				<p className="lede">For Standards 11 and 12. Taught chapter by chapter by the teachers of Shree Siddhivinayak Classes, for the Gujarat board, GUJCET and NEET.</p>
			</PageHero>

			<section className="section--tight" aria-labelledby="standards-title">
				<div className="container">
					<h2 id="standards-title" className="sr-only">
						Standards
					</h2>
					<div className="grid-2">
						{standards.map((s, i) => (
							<Reveal key={s.num} delay={i * 0.08} className={`card standard-card ${i === 1 ? 'standard-card--navy' : ''}`}>
								<span className="standard-card__num">{s.num}</span>
								<h3 className="h3">{s.title}</h3>
								<p className="muted">{s.body}</p>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="section" aria-labelledby="subjects-heading">
				<div className="container">
					<div className="section-head">
						<span className="overline">Subjects</span>
						<MaskedLines as="h2" id="subjects-heading" className="h2" inView lines={['One teacher', 'for each subject.']} />
					</div>
					<div className="grid-3">
						{subjects.map((s, i) => (
							<Reveal key={s.key} delay={i * 0.08} className="card subject-card" style={{ '--subject': s.color } as CSSProperties}>
								<div className="subject-card__art">
									<SubjectArt subject={s.key} />
								</div>
								<div className="subject-card__body">
									<span className="overline">{s.mark}</span>
									<h3 className="h3">{s.name}</h3>
									<p className="muted">{s.line}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<section className="section section--white" aria-labelledby="built-title">
				<div className="container split">
					<div>
						<div className="section-head" style={{ marginBottom: 40 }}>
							<span className="overline">Inside a course</span>
							<MaskedLines as="h2" id="built-title" className="h2" inView lines={['How every course', 'is built.']} />
							<p className="lede">A course is one topic, split into chapters. Inside each chapter, lessons are grouped by type so you can learn, then practise.</p>
						</div>
						<Reveal>
							<ul className="types">
								{contentTypes.map((t) => (
									<li key={t.name}>
										<strong>{t.name}</strong>
										<span>{t.note}</span>
									</li>
								))}
							</ul>
						</Reveal>
					</div>
					<Reveal className="split__phones" aria-hidden="true">
						<Phone kind="ios" screen={screens.chapter} />
						<Phone kind="android" screen={screens.notes} />
					</Reveal>
				</div>
			</section>

			<section className="section" aria-labelledby="access-title">
				<div className="container">
					<div className="section-head">
						<span className="overline">Access</span>
						<MaskedLines as="h2" id="access-title" className="h2" inView lines={['Who gets what.']} />
						<p className="lede">Course prices are shown in the app before you pay. Payments are one-time, through Razorpay.</p>
					</div>
					<Reveal className="table-wrap">
						<table className="access-table">
							<caption className="sr-only">What each kind of student can open in the SSV app</caption>
							<thead>
								<tr>
									<th scope="col">Content</th>
									<th scope="col">SSV student with a class code</th>
									<th scope="col">Everyone else</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">Free lessons and notes</th>
									<td data-label="SSV student">Open</td>
									<td data-label="Everyone else">Open after you create an account</td>
								</tr>
								<tr>
									<th scope="row">Paid courses</th>
									<td data-label="SSV student">Unlocked by your code until the date SSV sets</td>
									<td data-label="Everyone else">Buy each course once</td>
								</tr>
								<tr>
									<th scope="row">Paid PDFs</th>
									<td data-label="SSV student">Unlocked by your code</td>
									<td data-label="Everyone else">Buy each PDF once</td>
								</tr>
								<tr>
									<th scope="row">Courses with their own end date</th>
									<td data-label="SSV student">Need to be bought after that date</td>
									<td data-label="Everyone else">Buy each course once</td>
								</tr>
							</tbody>
						</table>
					</Reveal>
				</div>
			</section>

			<Cta />
		</>
	);
}

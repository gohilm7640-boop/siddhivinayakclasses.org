import { Link, NavLink } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { legal, site } from '../site';
import { legalDocs } from './legalDocs';

export default function Legal({ doc }: { doc: keyof typeof legalDocs }) {
	const d = legalDocs[doc];
	return (
		<>
			<PageHero overline={`Last updated ${site.updated}`} lines={[d.title]}>
				<p className="lede">{d.intro}</p>
			</PageHero>
			<section className="section--tight" style={{ paddingTop: 0 }}>
				<div className="container legal">
					<nav className="legal__toc" aria-label="Policies">
						{legal.map((l) => (
							<NavLink key={l.to} to={l.to}>
								{l.label}
							</NavLink>
						))}
					</nav>
					<article className="legal__body">
						{d.sections.map((s) => (
							<section key={s.title}>
								<h2>{s.title}</h2>
								{s.body && <p>{s.body}</p>}
								{s.bullets && (
									<ul>
										{s.bullets.map((b) => (
											<li key={b}>{b}</li>
										))}
									</ul>
								)}
								{s.link && (
									<p>
										{s.link.to.startsWith('/') ? <Link to={s.link.to}>{s.link.label}</Link> : <a href={s.link.to}>{s.link.label}</a>}
									</p>
								)}
							</section>
						))}
					</article>
				</div>
			</section>
		</>
	);
}

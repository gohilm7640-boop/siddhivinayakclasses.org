import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Orbits } from '../components/Art';
import { Reveal } from '../components/Reveal';
import { site } from '../site';

export default function Cta() {
	return (
		<section className="cta graph-paper" aria-labelledby="cta-title">
			<div className="container cta__inner">
				<Reveal className="cta__logo">
					<Orbits />
					<img src="/brand/logo-256.webp" alt="" width={84} height={84} loading="lazy" />
				</Reveal>
				<Reveal delay={0.05}>
					<h2 id="cta-title" className="display" style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}>
						Learn it once.
						<br />
						<span className="tagline">Learn it right.</span>
					</h2>
				</Reveal>
				<Reveal delay={0.1}>
					<p className="lede">The SSV app is coming soon to Android and iPhone. SSV students, ask at the office for your class code so you are ready on day one.</p>
				</Reveal>
				<Reveal delay={0.15} className="btn-row" style={{ justifyContent: 'center' }}>
					<Link to="/contact" className="btn btn--light">
						Contact the class <ArrowRight size={18} />
					</Link>
					<a href={`mailto:${site.email}?subject=Tell%20me%20when%20the%20SSV%20app%20is%20out`} className="btn btn--ghost-light">
						<Mail size={18} aria-hidden="true" /> Tell me when it’s out
					</a>
				</Reveal>
			</div>
		</section>
	);
}

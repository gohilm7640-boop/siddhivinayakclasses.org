import { Link } from 'react-router-dom';
import { legal, nav, site } from '../site';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__top">
					<div className="footer__brand">
						<Link to="/" className="brand">
							<img src="/brand/logo-256.webp" alt="" width={36} height={36} loading="lazy" />
							<span>{site.name}</span>
						</Link>
						<p>Physics, Chemistry and Maths for Standards 11 and 12, for GSEB boards, GUJCET and NEET. The SSV app is coming soon to Android and iPhone.</p>
					</div>
					<div className="footer__col">
						<h2>Site</h2>
						{nav.map((n) => (
							<Link key={n.to} to={n.to}>
								{n.label}
							</Link>
						))}
					</div>
					<div className="footer__col">
						<h2>Policies</h2>
						{legal.map((n) => (
							<Link key={n.to} to={n.to}>
								{n.label}
							</Link>
						))}
						<a href={`mailto:${site.email}`}>Email us</a>
						<a href={site.youtube} target="_blank" rel="noopener noreferrer">
							YouTube
						</a>
					</div>
				</div>
				<div className="footer__word" aria-hidden="true">
					Learn it right.
				</div>
				<div className="footer__bottom">
					<span>
						© {new Date().getFullYear()} {site.name}
					</span>
					<span>{site.tagline}</span>
				</div>
			</div>
		</footer>
	);
}

import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function NotFound() {
	return (
		<PageHero overline="404" lines={['This page', <span key="b">isn't <span className="accent">here.</span></span>]}>
			<p className="lede">The link may be old or mistyped.</p>
			<div className="btn-row">
				<Link to="/" className="btn">
					Go home <ArrowRight size={18} />
				</Link>
				<Link to="/contact" className="btn btn--outline">
					Contact us
				</Link>
			</div>
		</PageHero>
	);
}

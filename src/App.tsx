import { MotionConfig } from 'framer-motion';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { notFound, routes } from './routes';
import { site } from './site';

/** Keeps title, description and canonical in step with client-side navigation. */
function useRouteHead() {
	const { pathname: raw, hash } = useLocation();
	const pathname = raw.length > 1 ? raw.replace(/\/+$/, '') : raw;
	useEffect(() => {
		const route = routes.find((r) => r.path === pathname) ?? notFound;
		document.title = route.title;
		document.querySelector('meta[name="description"]')?.setAttribute('content', route.description);
		document.querySelector('link[rel="canonical"]')?.setAttribute('href', site.url + (pathname === '/' ? '/' : pathname));
		if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
		else window.scrollTo(0, 0);
	}, [pathname, hash]);
}

export default function App() {
	useRouteHead();
	return (
		<MotionConfig reducedMotion="user">
			<a className="skip-link" href="#main">
				Skip to content
			</a>
			<Header />
			<main id="main" tabIndex={-1}>
				<Routes>
					{routes.map((r) => (
						<Route key={r.path} path={r.path} element={r.element} />
					))}
					<Route path="*" element={notFound.element} />
				</Routes>
			</main>
			<Footer />
		</MotionConfig>
	);
}

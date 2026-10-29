import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { Menu, Volume2, VolumeX, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { nav, site } from '../site';
import { setSound, useSound } from '../sound';

export default function Header() {
	const { scrollY, scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
	const [solid, setSolid] = useState(false);
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();
	const menuBtn = useRef<HTMLButtonElement>(null);
	const closeBtn = useRef<HTMLButtonElement>(null);
	const sound = useSound();

	useMotionValueEvent(scrollY, 'change', (y) => setSolid(y > 12));
	useEffect(() => setOpen(false), [pathname]);

	useEffect(() => {
		if (!open) return;
		document.body.style.overflow = 'hidden';
		closeBtn.current?.focus();
		const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
		window.addEventListener('keydown', onKey);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKey);
			menuBtn.current?.focus();
		};
	}, [open]);

	return (
		<>
			<motion.div className="progress-bar" style={{ scaleX: progress }} aria-hidden="true" />
			<header className={`header ${solid ? 'header--solid' : ''}`}>
				<div className="container header__inner">
					<Link to="/" className="brand" aria-label={`${site.name}, home`}>
						<img src="/brand/logo-256.webp" alt="" width={36} height={36} />
						<span>{site.short}</span>
					</Link>
					<nav className="nav" aria-label="Main">
						{nav.map((n) => (
							<NavLink key={n.to} to={n.to} end={n.to === '/'}>
								{n.label}
							</NavLink>
						))}
					</nav>
					<div className="header__actions">
						<button className="sound-btn" aria-pressed={sound} aria-label="Sound effects" title={sound ? 'Sound on' : 'Sound off'} onClick={() => setSound(!sound)}>
							{sound ? <Volume2 size={20} strokeWidth={1.8} /> : <VolumeX size={20} strokeWidth={1.8} />}
						</button>
						<Link to="/contact" className="btn header__cta">
							Get a class code
						</Link>
						<button ref={menuBtn} className="menu-btn" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}>
							<Menu size={24} strokeWidth={1.8} />
						</button>
					</div>
				</div>
			</header>
			<AnimatePresence>
				{open && (
					<motion.div
						id="mobile-menu"
						className="mobile-menu"
						role="dialog"
						aria-modal="true"
						aria-label="Menu"
						initial={{ clipPath: 'inset(0 0 100% 0)' }}
						animate={{ clipPath: 'inset(0 0 0% 0)' }}
						exit={{ clipPath: 'inset(0 0 100% 0)' }}
						transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
					>
						<div className="mobile-menu__top">
							<Link to="/" className="brand" onClick={() => setOpen(false)}>
								<img src="/brand/logo-256.webp" alt="" width={36} height={36} />
								<span>{site.short}</span>
							</Link>
							<button ref={closeBtn} className="menu-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
								<X size={26} strokeWidth={1.8} />
							</button>
						</div>
						<nav aria-label="Main">
							{nav.map((n, i) => (
								<motion.div key={n.to} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05, duration: 0.5 }}>
									<NavLink to={n.to} end={n.to === '/'}>
										{n.label}
									</NavLink>
								</motion.div>
							))}
						</nav>
						<div className="mobile-menu__foot">
							<Link to="/contact" className="btn btn--light">
								Get a class code
							</Link>
							<a href={`mailto:${site.email}`}>{site.email}</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

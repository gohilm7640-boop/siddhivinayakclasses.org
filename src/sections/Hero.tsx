import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, Smartphone } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Orbits } from '../components/Art';
import Phone from '../components/Phone';
import { MaskedLines } from '../components/Reveal';
import { screens } from '../screens';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
	const ref = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

	// Phones drift apart and the orbit turns as the hero scrolls away.
	const iosY = useTransform(scrollYProgress, [0, 1], ['-50%', '-22%']);
	const andY = useTransform(scrollYProgress, [0, 1], ['-44%', '-70%']);
	const iosX = useTransform(scrollYProgress, [0, 1], [0, -40]);
	const andX = useTransform(scrollYProgress, [0, 1], [0, 50]);
	const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 40]);
	const copyY = useTransform(scrollYProgress, [0, 1], [0, 120]);
	const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

	// Gentle tilt toward the pointer.
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 20 });
	const rotX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 20 });

	return (
		<section ref={ref} className="hero graph-paper" aria-labelledby="hero-title">
			<div className="container hero__grid">
				<motion.div className="hero__copy" style={{ y: copyY, opacity: copyOpacity }}>
					<motion.span className="overline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
						Standards 11 &amp; 12 · GSEB · GUJCET · NEET
					</motion.span>
					<MaskedLines
						id="hero-title"
						className="display hero__title"
						lines={[
							<span key="a">Learn it once.</span>,
							<span key="b">
								Learn it <span className="accent">right.</span>
							</span>,
						]}
					/>
					<motion.p className="lede" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease }}>
						Physics, Chemistry and Maths lessons from the teachers of Shree Siddhivinayak Classes. The SSV app puts each chapter's videos, notes and solved past papers on your phone.
					</motion.p>
					<motion.div className="btn-row" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45, ease }}>
						<a href="#app" className="btn">
							See the app <ArrowDown size={18} />
						</a>
						<Link to="/contact" className="btn btn--outline">
							Get a class code <ArrowRight size={18} />
						</Link>
					</motion.div>
					<motion.p className="hero__note" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
						<Smartphone size={18} aria-hidden="true" /> The app is coming soon to Google Play and the App Store.
					</motion.p>
				</motion.div>

				<div
					className="hero__stage"
					onPointerMove={(e) => {
						if (e.pointerType !== 'mouse') return;
						const r = e.currentTarget.getBoundingClientRect();
						mx.set((e.clientX - r.left) / r.width - 0.5);
						my.set((e.clientY - r.top) / r.height - 0.5);
					}}
					onPointerLeave={() => {
						mx.set(0);
						my.set(0);
					}}
				>
					<motion.div className="hero__orbits" style={{ rotate: orbitRotate }}>
						<Orbits />
					</motion.div>
					<motion.div className="hero__phones" style={{ rotateY: rotY, rotateX: rotX }}>
						<motion.div className="hero__phone hero__phone--android" style={{ y: andY, x: andX }}>
							<motion.div initial={{ opacity: 0, y: 140, rotate: 8 }} animate={{ opacity: 1, y: 0, rotate: 4 }} transition={{ duration: 1.2, delay: 0.35, ease }}>
								<Phone kind="android" screen={screens.home} priority />
							</motion.div>
						</motion.div>
						<motion.div className="hero__phone hero__phone--ios" style={{ y: iosY, x: iosX }}>
							<motion.div initial={{ opacity: 0, y: 160, rotate: -8 }} animate={{ opacity: 1, y: 0, rotate: -4 }} transition={{ duration: 1.2, delay: 0.2, ease }}>
								<Phone kind="ios" screen={screens.welcome} priority />
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
			<a href="#film" className="hero__scroll">
				Scroll
				<span />
			</a>
		</section>
	);
}

import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState, type CSSProperties } from 'react';
import { SubjectArt } from '../components/Art';
import { MaskedLines, Reveal } from '../components/Reveal';
import { subjects } from '../site';

/** Three big subject rows; on desktop the teacher's lesson cover follows the cursor over a row. */
export default function Subjects() {
	const [hovered, setHovered] = useState<number | null>(null);
	const [canHover, setCanHover] = useState(false);
	const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 28 });
	const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 28 });

	useEffect(() => {
		const mq = window.matchMedia('(hover: hover) and (min-width: 961px)');
		const update = () => setCanHover(mq.matches);
		update();
		mq.addEventListener('change', update);
		return () => mq.removeEventListener('change', update);
	}, []);

	return (
		<section id="subjects" className="section" aria-labelledby="subjects-title">
			<div className="container">
				<div className="section-head">
					<span className="overline">What we teach</span>
					<MaskedLines as="h2" id="subjects-title" className="h2" inView lines={['Three subjects.', 'Taught properly.']} />
				</div>
				<div
					className="subject-list"
					onPointerMove={(e) => {
						x.set(e.clientX + 24);
						y.set(e.clientY - 90);
					}}
					onPointerLeave={() => setHovered(null)}
				>
					{subjects.map((s, i) => (
						<Reveal key={s.key} delay={i * 0.06}>
							<div
								className="subject-row"
								style={{ '--subject': s.color } as CSSProperties}
								onPointerEnter={(e) => {
									// first hover: place the preview at the cursor instead of springing in from the corner
									if (hovered === null) {
										x.jump(e.clientX + 24);
										y.jump(e.clientY - 90);
									}
									setHovered(i);
								}}
							>
								<span className="subject-row__mark">{s.mark}</span>
								<h3 className="subject-row__name">{s.name}</h3>
								<p className="subject-row__line">{s.line}</p>
								<div className="subject-row__art">
									<SubjectArt subject={s.key} />
								</div>
								<div className="subject-row__thumb">
									<img src={s.image} alt={`${s.name} lesson cover with your SSV ${s.name} teacher`} width={960} height={540} loading="lazy" decoding="async" />
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
			<AnimatePresence>
				{canHover && hovered !== null && (
					<motion.div
						className="subject-peek"
						style={{ x, y }}
						initial={{ opacity: 0, scale: 0.85 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.85 }}
						transition={{ duration: 0.25 }}
						aria-hidden="true"
					>
						<AnimatePresence initial={false}>
							<motion.img key={hovered} src={subjects[hovered]!.image} alt="" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'absolute', inset: 0 }} />
						</AnimatePresence>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}

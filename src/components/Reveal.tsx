import { motion, type HTMLMotionProps } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

/** Fades and lifts its children in the first time they scroll into view. */
export function Reveal({ delay = 0, y = 28, ...rest }: HTMLMotionProps<'div'> & { delay?: number; y?: number }) {
	return (
		<motion.div
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '0px 0px -12% 0px' }}
			transition={{ duration: 0.8, delay, ease }}
			{...rest}
		/>
	);
}

/** Headline that rises line by line from behind a mask. */
export function MaskedLines({ lines, as: Tag = 'h1', id, className, delay = 0, inView = false }: { lines: React.ReactNode[]; as?: 'h1' | 'h2'; id?: string; className?: string; delay?: number; inView?: boolean }) {
	// The trigger sits on the heading: the masked spans start fully clipped, so they never register as in view themselves.
	const MotionTag = motion[Tag];
	const trigger = inView ? { whileInView: 'shown', viewport: { once: true, margin: '0px 0px -10% 0px' } } : { animate: 'shown' };
	return (
		<MotionTag id={id} className={className} initial="hidden" {...trigger}>
			{lines.map((line, i) => (
				<span className="line" key={i} style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.06em' }}>
					<motion.span
						style={{ display: 'inline-block' }}
						variants={{ hidden: { y: '105%' }, shown: { y: '0%', transition: { duration: 0.9, delay: delay + i * 0.09, ease } } }}
					>
						{line}
					</motion.span>
				</span>
			))}
		</MotionTag>
	);
}

/** Words that brighten one after another as the block enters the viewport. */
export function WordReveal({ text, className }: { text: string; className?: string }) {
	const words = text.split(' ');
	return (
		<motion.p className={className} initial="hidden" whileInView="shown" viewport={{ once: true, margin: '0px 0px -15% 0px' }} transition={{ staggerChildren: 0.035 }}>
			{words.map((w, i) => (
				<motion.span key={i} className="word" variants={{ hidden: { opacity: 0.18 }, shown: { opacity: 1 } }} transition={{ duration: 0.4 }}>
					{w}
				</motion.span>
			))}
		</motion.p>
	);
}

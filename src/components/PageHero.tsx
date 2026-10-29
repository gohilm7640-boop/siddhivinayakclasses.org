import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { MaskedLines } from './Reveal';

export default function PageHero({ overline, lines, children }: { overline: string; lines: ReactNode[]; children?: ReactNode }) {
	return (
		<section className="page-hero graph-paper">
			<div className="container page-hero__inner">
				<motion.span className="overline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
					{overline}
				</motion.span>
				<MaskedLines className="display" lines={lines} />
				{children && (
					<motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ display: 'grid', gap: 24 }}>
						{children}
					</motion.div>
				)}
			</div>
		</section>
	);
}

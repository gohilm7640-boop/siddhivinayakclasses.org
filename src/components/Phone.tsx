import { AnimatePresence, motion, type MotionStyle } from 'framer-motion';
import type { CSSProperties, KeyboardEventHandler, MouseEventHandler } from 'react';

export type Screen = { src: string; alt: string; /** status bar colour, matches the screen's header */ bar?: string };

type Props = {
	kind: 'ios' | 'android';
	screen: Screen;
	className?: string;
	style?: MotionStyle;
	/** load eagerly (above the fold) */
	priority?: boolean;
	onClick?: MouseEventHandler;
	onKeyDown?: KeyboardEventHandler;
	tabIndex?: number;
	role?: string;
	ariaLabel?: string;
};

function StatusIcons() {
	return (
		<span className="phone__status-icons" aria-hidden="true">
			<svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
				<rect x="0" y="7" width="3" height="4" rx="1" />
				<rect x="4.5" y="5" width="3" height="6" rx="1" />
				<rect x="9" y="2.5" width="3" height="8.5" rx="1" />
				<rect x="13.5" y="0" width="3" height="11" rx="1" />
			</svg>
			<svg width="24" height="11" viewBox="0 0 24 11" fill="none">
				<rect x="0.5" y="0.5" width="21" height="10" rx="3" stroke="currentColor" opacity="0.5" />
				<rect x="2" y="2" width="16" height="7" rx="1.8" fill="currentColor" />
				<rect x="22.5" y="3.5" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.5" />
			</svg>
		</span>
	);
}

/** CSS-built iPhone / Android frame showing a real SSV app screen. */
export default function Phone({ kind, screen, className = '', style, priority, onClick, onKeyDown, tabIndex, role, ariaLabel }: Props) {
	return (
		<motion.div
			className={`phone phone--${kind} ${className}`}
			style={{ ...style, '--bar': screen.bar ?? 'var(--blue)' } as MotionStyle & CSSProperties}
			onClick={onClick}
			onKeyDown={onKeyDown}
			tabIndex={tabIndex}
			role={role}
			aria-label={ariaLabel}
		>
			<div className="phone__screen">
				<div className="phone__status">
					<span>{kind === 'ios' ? '9:41' : '12:30'}</span>
					<StatusIcons />
				</div>
				<span className="phone__island" aria-hidden="true" />
				<div className="phone__view">
					<AnimatePresence initial={false}>
						<motion.img
							key={screen.src}
							src={screen.src}
							alt={screen.alt}
							width={393}
							height={852}
							loading={priority ? 'eager' : 'lazy'}
							decoding="async"
							{...(priority ? { fetchpriority: 'high' } : {})}
							initial={{ opacity: 0, y: 24 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
						/>
					</AnimatePresence>
				</div>
				<span className="phone__glare" aria-hidden="true" />
			</div>
		</motion.div>
	);
}

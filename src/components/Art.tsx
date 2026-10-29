/**
 * Code-drawn science diagrams, the same set the SSV app uses for course covers:
 * a projectile with its velocity vector, electron orbits, a tangent sliding along a curve.
 * Drawn in currentColor so they sit on a subject colour or on the page. SVG animation
 * (animateMotion) keeps them cheap; with reduced motion they render as a still frame.
 */
import { useReducedMotion } from 'framer-motion';
import type { SubjectKey } from '../site';

const GOLD = '#FFC94A';

function Grid({ w = 320, h = 180, step = 20, opacity = 0.09 }: { w?: number; h?: number; step?: number; opacity?: number }) {
	const lines = [];
	for (let x = step; x < w; x += step) lines.push(<line key={`x${x}`} x1={x} y1={0} x2={x} y2={h} />);
	for (let y = step; y < h; y += step) lines.push(<line key={`y${y}`} x1={0} y1={y} x2={w} y2={y} />);
	return (
		<g stroke="currentColor" strokeOpacity={opacity} strokeWidth={1}>
			{lines}
		</g>
	);
}

const ARC = 'M34,150 Q159,-74 284,150';

export function Projectile({ still }: { still?: boolean }) {
	const reduce = useReducedMotion() || still;
	return (
		<svg viewBox="0 0 320 180" role="img" aria-label="Projectile motion: a ball follows a parabola with its velocity vector">
			<Grid />
			<line x1={20} y1={158} x2={304} y2={158} stroke="currentColor" strokeOpacity={0.5} strokeWidth={1.5} />
			<path d={ARC} fill="none" stroke="currentColor" strokeOpacity={0.6} strokeWidth={2} strokeDasharray="2 7" strokeLinecap="round" />
			<g transform={reduce ? 'translate(159,38)' : undefined}>
				{!reduce && <animateMotion dur="3.6s" repeatCount="indefinite" path={ARC} rotate="auto" />}
				<line x1={0} y1={0} x2={38} y2={0} stroke={GOLD} strokeWidth={3} strokeLinecap="round" />
				<circle r={8} fill="currentColor" />
			</g>
		</svg>
	);
}

const ORBITS = [0, 60, 120];

export function Atom({ still, label = 'Atom with three electron orbits' }: { still?: boolean; label?: string }) {
	const reduce = useReducedMotion() || still;
	const ring = 'M60,0 A60,22 0 1,1 -60,0 A60,22 0 1,1 60,0';
	return (
		<svg viewBox="0 0 320 180" role="img" aria-label={label}>
			<Grid />
			<g transform="translate(160,90)">
				{ORBITS.map((deg, i) => (
					<g key={deg} transform={`rotate(${deg})`}>
						<path d={ring} fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.6} />
						<circle r={5} fill={i === 2 ? GOLD : 'currentColor'} cx={reduce ? 60 * Math.cos(i * 2) : undefined} cy={reduce ? 22 * Math.sin(i * 2) : undefined}>
							{!reduce && <animateMotion dur={`${2.4 + i * 0.7}s`} repeatCount="indefinite" path={ring} begin={`-${i * 0.8}s`} />}
						</circle>
					</g>
				))}
				<circle r={11} fill="currentColor" />
				<circle r={19} fill="none" stroke="currentColor" strokeOpacity={0.3} strokeWidth={5} />
			</g>
		</svg>
	);
}

const CURVE = 'M24,150 C110,150 120,30 160,90 S230,30 296,26';

export function Tangent({ still }: { still?: boolean }) {
	const reduce = useReducedMotion() || still;
	return (
		<svg viewBox="0 0 320 180" role="img" aria-label="A tangent line sliding along a curve">
			<Grid />
			<line x1={20} y1={160} x2={304} y2={160} stroke="currentColor" strokeOpacity={0.45} strokeWidth={1.5} />
			<line x1={30} y1={14} x2={30} y2={170} stroke="currentColor" strokeOpacity={0.45} strokeWidth={1.5} />
			<path d={CURVE} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
			<g transform={reduce ? 'translate(160,90) rotate(-56)' : undefined}>
				{!reduce && <animateMotion dur="4.2s" repeatCount="indefinite" path={CURVE} rotate="auto" keyPoints="0;1;0" keyTimes="0;0.5;1" calcMode="linear" />}
				<line x1={-52} y1={0} x2={52} y2={0} stroke={GOLD} strokeWidth={2.5} strokeLinecap="round" />
				<circle r={6} fill={GOLD} />
			</g>
		</svg>
	);
}

export function SubjectArt({ subject, still }: { subject: SubjectKey; still?: boolean }) {
	if (subject === 'physics') return <Projectile still={still} />;
	if (subject === 'chemistry') return <Atom still={still} />;
	return <Tangent still={still} />;
}

/** Large decorative orbits behind the hero phones and the closing logo. */
export function Orbits({ className }: { className?: string }) {
	const reduce = useReducedMotion();
	const rings = [
		{ rx: 300, ry: 112, rot: -18, dur: 14, gold: false },
		{ rx: 250, ry: 92, rot: 42, dur: 11, gold: true },
		{ rx: 210, ry: 76, rot: 102, dur: 9, gold: false },
	];
	return (
		<svg className={className} viewBox="-340 -340 680 680" aria-hidden="true" focusable="false">
			{rings.map((r, i) => {
				const d = `M${r.rx},0 A${r.rx},${r.ry} 0 1,1 ${-r.rx},0 A${r.rx},${r.ry} 0 1,1 ${r.rx},0`;
				return (
					<g key={i} transform={`rotate(${r.rot})`}>
						<path d={d} fill="none" stroke="currentColor" strokeOpacity={0.16} strokeWidth={1.2} />
						{!reduce && (
							<circle r={i === 1 ? 6 : 4.5} fill={r.gold ? GOLD : 'currentColor'}>
								<animateMotion dur={`${r.dur}s`} repeatCount="indefinite" path={d} begin={`-${i * 3}s`} />
							</circle>
						)}
					</g>
				);
			})}
		</svg>
	);
}

/** Small line diagrams for the "how we teach" principles. */
export function StepsArt() {
	return (
		<svg viewBox="0 0 200 120" aria-hidden="true" focusable="false">
			{[0, 1, 2, 3, 4].map((i) => (
				<rect key={i} x={10 + i * 38} y={100 - i * 20} width={30} height={12 + i * 20} rx={4} fill="currentColor" fillOpacity={0.18 + i * 0.16} />
			))}
		</svg>
	);
}

export function WaveArt() {
	let d = 'M0,60';
	for (let x = 0; x <= 200; x += 4) d += ` L${x},${(60 - Math.sin((x / 64) * 2 * Math.PI) * 34).toFixed(1)}`;
	return (
		<svg viewBox="0 0 200 120" aria-hidden="true" focusable="false">
			<line x1={0} y1={60} x2={200} y2={60} stroke="currentColor" strokeOpacity={0.3} />
			<path d={d} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
			<circle cx={16} cy={26} r={6} fill={GOLD} />
		</svg>
	);
}

export function RingArt() {
	return (
		<svg viewBox="0 0 200 120" aria-hidden="true" focusable="false">
			<circle cx={60} cy={60} r={44} fill="none" stroke="currentColor" strokeOpacity={0.18} strokeWidth={10} />
			<circle cx={60} cy={60} r={44} fill="none" stroke="currentColor" strokeWidth={10} strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 44 * 0.76} 999`} transform="rotate(-90 60 60)" />
			<rect x={128} y={30} width={60} height={8} rx={4} fill="currentColor" fillOpacity={0.3} />
			<rect x={128} y={56} width={44} height={8} rx={4} fill="currentColor" fillOpacity={0.3} />
			<rect x={128} y={82} width={52} height={8} rx={4} fill="currentColor" fillOpacity={0.3} />
		</svg>
	);
}

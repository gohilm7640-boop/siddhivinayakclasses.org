import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useRef, useState, type KeyboardEvent } from 'react';
import Phone from '../components/Phone';
import { MaskedLines } from '../components/Reveal';
import { screens } from '../screens';
import { play } from '../sound';

const ways = [
	{
		id: 'ssv',
		tab: 'SSV student',
		title: 'Unlock everything with your class code.',
		body: 'Students of Shree Siddhivinayak Classes get a class code from the SSV office. Enter it once, and every paid course and note for your standard opens up.',
		points: ['One code covers every subject', 'You see the courses for your standard, 11 or 12', "Ask at the office if you don't have one"],
		screen: screens.redeem,
		kind: 'ios' as const,
	},
	{
		id: 'learner',
		tab: 'Everyone else',
		title: 'Start with the free lessons, then buy what you need.',
		body: "If you don't study at SSV, you can still create an account and watch the free lessons. Each course or set of notes is a one-time purchase through Razorpay.",
		points: ['Pay by UPI, card or net banking', 'The course opens once the payment goes through', 'There is no subscription'],
		screen: screens.locked,
		kind: 'android' as const,
	},
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Ways() {
	const [active, setActive] = useState(0);
	const tabs = useRef<(HTMLButtonElement | null)[]>([]);
	const way = ways[active]!;
	const choose = (i: number) => {
		if (i !== active) play('click');
		setActive(i);
	};

	const onKey = (e: KeyboardEvent) => {
		if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
		const next = (active + (e.key === 'ArrowRight' ? 1 : ways.length - 1)) % ways.length;
		choose(next);
		tabs.current[next]?.focus();
	};

	return (
		<section className="section graph-paper" aria-labelledby="ways-title">
			<div className="container ways">
				<div>
					<div className="section-head" style={{ marginBottom: 36 }}>
						<span className="overline">Access</span>
						<MaskedLines as="h2" id="ways-title" className="h2" inView lines={['Two ways', 'to get access.']} />
					</div>
					<div className="segmented" role="tablist" aria-label="Who are you?" onKeyDown={onKey}>
						{ways.map((w, i) => (
							<button
								key={w.id}
								ref={(el) => {
									tabs.current[i] = el;
								}}
								role="tab"
								id={`way-tab-${w.id}`}
								aria-selected={i === active}
								aria-controls="way-panel"
								tabIndex={i === active ? 0 : -1}
								onClick={() => choose(i)}
							>
								{i === active && <motion.span layoutId="way-thumb" className="segmented__thumb" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
								{w.tab}
							</button>
						))}
					</div>
					<div className="ways__panel" id="way-panel" role="tabpanel" aria-labelledby={`way-tab-${way.id}`}>
						<AnimatePresence mode="wait" initial={false}>
							<motion.div key={way.id} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease }} style={{ display: 'grid', gap: 20 }}>
								<h3 className="h3">{way.title}</h3>
								<p className="lede">{way.body}</p>
								<ul className="check-list check-list--light">
									{way.points.map((p) => (
										<li key={p}>
											<Check size={18} aria-hidden="true" />
											{p}
										</li>
									))}
								</ul>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				<div className="ways__stage" aria-hidden="true">
					{ways.map((w, i) => {
						const front = i === active;
						const side = i === 0 ? -1 : 1;
						return (
							<motion.div
								key={w.id}
								style={{ position: 'absolute', inset: 0, zIndex: front ? 2 : 1 }}
								animate={{ x: front ? '0%' : `${side * 22}%`, scale: front ? 1 : 0.84, opacity: front ? 1 : 0.55, rotate: front ? 0 : side * 6 }}
								transition={{ duration: 0.7, ease }}
							>
								<Phone kind={w.kind} screen={w.screen} style={{ x: '-50%', y: '-50%' }} onClick={() => choose(i)} />
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

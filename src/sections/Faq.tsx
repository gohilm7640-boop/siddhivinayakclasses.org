import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { MaskedLines } from '../components/Reveal';
import { play } from '../sound';

export const faqs = [
	{
		q: 'When can I download the SSV app?',
		a: 'The app is coming soon to Google Play and the App Store. SSV students will hear about it in class first. You can also email us to be told when it is out.',
	},
	{
		q: 'I study at SSV. Do I have to pay in the app?',
		a: 'No. SSV students get a class code from the office. Enter it when you sign up, or later from your profile, and the paid courses and notes for your standard unlock for the period set by SSV.',
	},
	{
		q: "I don't study at SSV. Can I still use it?",
		a: 'Yes. Create an account to open the free lessons, then buy any course or set of notes you need. Each purchase is a one-time payment through Razorpay.',
	},
	{
		q: 'Which standards and exams does it cover?',
		a: 'Physics, Chemistry and Maths for Standards 11 and 12, for the Gujarat board (GSEB), GUJCET and NEET. Courses are shown for the standard on your profile.',
	},
	{
		q: 'Can I study without the internet?',
		a: 'Notes and PDFs you download are saved on your phone, ready for revision. Video lessons play online, so they need an internet connection.',
	},
	{
		q: 'Is paying in the app safe?',
		a: 'Payments are handled by Razorpay. Your card, UPI and bank details go straight to Razorpay; SSV never sees or stores them.',
	},
];

export default function Faq() {
	const [open, setOpen] = useState<number | null>(0);
	const base = useId();
	return (
		<section className="section" aria-labelledby="faq-title">
			<div className="container faq">
				<div className="section-head faq__head">
					<span className="overline">FAQ</span>
					<MaskedLines as="h2" id="faq-title" className="h2" inView lines={['Questions.']} />
					<p className="lede">
						<Link to="/contact" className="text-link">Ask us</Link> about anything else.
					</p>
				</div>
				<div className="faq__list">
					{faqs.map((f, i) => {
						const isOpen = open === i;
						return (
							<div key={f.q} className="faq__item">
								<h3 style={{ margin: 0 }}>
									<button className="faq__q" aria-expanded={isOpen} aria-controls={`${base}-${i}`} id={`${base}-q${i}`} onClick={() => {
											play('tick');
											setOpen(isOpen ? null : i);
										}}>
										{f.q}
										<Plus size={22} aria-hidden="true" />
									</button>
								</h3>
								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											id={`${base}-${i}`}
											role="region"
											aria-labelledby={`${base}-q${i}`}
											className="faq__a"
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: 'auto', opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
										>
											<p>{f.a}</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

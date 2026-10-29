import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';
import { MaskedLines } from '../components/Reveal';
import { site } from '../site';

const VIDEO_ID = 'Ol2yXqqePA0';
const TITLE = 'Siddhivinayak Classes App: Std 11 & 12 Physics, Chemistry and Maths on your phone';

/**
 * The SSV launch film. Shows our own poster until the viewer presses play, then loads the
 * privacy-enhanced YouTube player, so the page stays fast and sets no YouTube cookies on load.
 * The frame grows to full width as it scrolls into view.
 */
export default function IntroFilm() {
	const [playing, setPlaying] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
	const scale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
	const radius = useTransform(scrollYProgress, [0, 1], [40, 20]);

	return (
		<section id="film" className="section section--tight film" aria-labelledby="film-title">
			<div className="container">
				<div className="film__head">
					<span className="overline">Watch the film</span>
					<MaskedLines as="h2" id="film-title" className="h2" inView lines={['One minute.', <span key="b">The whole <span className="accent">app.</span></span>]} />
				</div>
				<motion.div ref={ref} className="film__frame" style={{ scale, borderRadius: radius }}>
					{playing ? (
						<iframe
							src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
							title={TITLE}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					) : (
						<button className="film__poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${TITLE}`}>
							<img src="/brand/intro-poster.webp" alt="" width={1600} height={900} loading="lazy" decoding="async" />
							<span className="film__play" aria-hidden="true">
								<Play size={30} fill="currentColor" strokeWidth={0} />
							</span>
							<span className="film__label" aria-hidden="true">
								Play the SSV app film · 1 min
							</span>
						</button>
					)}
				</motion.div>
				<p className="film__note muted">
					Also on <a href={`https://www.youtube.com/watch?v=${VIDEO_ID}`} target="_blank" rel="noopener noreferrer" className="text-link">YouTube</a>, from the {site.short} channel.
				</p>
			</div>
		</section>
	);
}

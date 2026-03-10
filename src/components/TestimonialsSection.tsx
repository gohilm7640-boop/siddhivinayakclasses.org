import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import './TestimonialsSection.css'

const testimonials = [
    {
        name: 'Arjun Sharma',
        rank: 'AIR 142 – IIT JEE 2024',
        subject: 'Physics',
        color: '#EF4444',
        initial: 'A',
        text: 'Siddhivinayak transformed my understanding of Physics completely. The concepts that seemed complex were broken down so clearly. I couldn\'t have cracked IIT without this team!',
        rating: 5,
    },
    {
        name: 'Priya Patel',
        rank: 'AIR 378 – IIT JEE 2024',
        subject: 'Chemistry',
        color: '#00B4D8',
        initial: 'P',
        text: 'The organic chemistry notes from Siddhivinayak are absolutely brilliant. The faculty explains reaction mechanisms with such depth that I could solve any question in the exam hall.',
        rating: 5,
    },
    {
        name: 'Rohan Verma',
        rank: 'AIR 89 – IIT JEE 2024',
        subject: 'Mathematics',
        color: '#8B5CF6',
        initial: 'R',
        text: 'Maths used to scare me before Siddhivinayak. The step-by-step approach to calculus and coordinate geometry made everything click. Eternally grateful to the Siddhivinayak faculty!',
        rating: 5,
    },
    {
        name: 'Divya Nair',
        rank: 'AIR 215 – IIT JEE 2024',
        subject: 'Physics',
        color: '#EF4444',
        initial: 'D',
        text: 'The practice modules at Siddhivinayak are the best JEE preparation I could ask for. The analytics helped me identify weak areas and focus better. Highly recommend Siddhivinayak to all JEE aspirants!',
        rating: 5,
    },
]

export default function TestimonialsSection() {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length)
    const next = () => setCurrent(i => (i + 1) % testimonials.length)

    const t = testimonials[current]

    return (
        <section ref={ref} className="testimonials-section section section--dark">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-label" style={{ color: '#4E87FF' }}>Student Stories</span>
                    <h2 className="text-h1" style={{ marginTop: 10, color: 'white' }}>
                        Voices of <span className="gradient-text">Success</span>
                    </h2>
                </motion.div>

                <div className="testimonials-layout">
                    {/* Testimonial Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            className="testimonial-card"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.35 }}
                        >
                            <div className="testimonial-card__quote">
                                <Quote size={36} style={{ color: t.color, opacity: 0.4 }} />
                            </div>
                            <p className="testimonial-card__text">"{t.text}"</p>
                            <div className="testimonial-card__bottom">
                                <div className="testimonial-card__author">
                                    <div className="testimonial-card__avatar" style={{ background: t.color }}>
                                        {t.initial}
                                    </div>
                                    <div>
                                        <p className="testimonial-card__name">{t.name}</p>
                                        <p className="testimonial-card__rank" style={{ color: t.color }}>{t.rank}</p>
                                    </div>
                                </div>
                                <div className="testimonial-card__stars">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="#FBBF24" color="#FBBF24" />)}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Nav */}
                    <div className="testimonials-nav">
                        <button className="testimonials-nav__btn" onClick={prev}>
                            <ChevronLeft size={20} />
                        </button>
                        <div className="testimonials-dots">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    className={`testimonials-dot ${i === current ? 'testimonials-dot--active' : ''}`}
                                    onClick={() => setCurrent(i)}
                                    style={i === current ? { background: '#4E87FF' } : {}}
                                />
                            ))}
                        </div>
                        <button className="testimonials-nav__btn" onClick={next}>
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

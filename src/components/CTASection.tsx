import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import './CTASection.css'

export default function CTASection() {
    return (
        <section className="cta-section section">
            <div className="container">
                <motion.div
                    className="cta-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="cta-card__bg" />
                    <div className="noise-overlay" />

                    <div className="cta-card__content">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
                                <Sparkles size={12} />
                                Start Your Journey
                            </span>
                        </motion.div>

                        <motion.h2
                            className="text-h1 cta-card__title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Ready to Crack IIT-JEE?
                        </motion.h2>

                        <motion.p
                            className="cta-card__sub"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            Join thousands of successful students who achieved their IIT dreams with SSV.
                            Get started with a free demo class today.
                        </motion.p>

                        <motion.div
                            className="cta-card__actions"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link to="/contact" className="btn cta-card__btn-primary">
                                Book Free Demo <ArrowRight size={18} />
                            </Link>
                            <Link to="/courses" className="btn cta-card__btn-outline">
                                View Courses
                            </Link>
                        </motion.div>
                    </div>

                    {/* Decorative Orbs */}
                    <div className="cta-orb cta-orb--1" />
                    <div className="cta-orb cta-orb--2" />
                    <div className="cta-orb cta-orb--3" />
                </motion.div>
            </div>
        </section>
    )
}

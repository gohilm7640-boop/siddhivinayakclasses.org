import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'
import './HeroSection.css'



export default function HeroSection() {
    return (
        <section className="hero grid-bg">
            {/* Background blobs */}
            <div className="hero__blob hero__blob--blue" />
            <div className="hero__blob hero__blob--purple" />
            <div className="hero__blob hero__blob--red" />

            <div className="container hero__inner">
                <div className="hero__content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="tag tag-blue">
                            <Zap size={12} fill="currentColor" />
                            India's Premier JEE Academy
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-display hero__title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        Crack JEE with
                        <br />
                        <span className="gradient-text">Confidence</span>
                    </motion.h1>

                    <motion.p
                        className="hero__sub"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Expert coaching in Physics, Chemistry & Mathematics by IIT graduates.
                        Personalized learning paths. Proven results year after year.
                    </motion.p>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link to="/contact" className="btn btn-primary hero__cta">
                            Contact for Admission <ArrowRight size={18} />
                        </Link>
                    </motion.div>


                </div>

                {/* Hero Visual */}
                <motion.div
                    className="hero__visual"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Main Card */}
                    <div className="hero__card glass-card">
                        <div className="noise-overlay" />
                        <div className="hero__card-content">
                            <div className="hero__subjects">
                                {[
                                    { name: 'Physics', letter: 'P', color: '#EF4444', bg: '#FEF2F2' },
                                    { name: 'Chemistry', letter: 'C', color: '#00B4D8', bg: '#E8F9FD' },
                                    { name: 'Maths', letter: 'M', color: '#8B5CF6', bg: '#F5F3FF' },
                                ].map((s) => (
                                    <motion.div
                                        key={s.name}
                                        className="hero__subject-chip"
                                        style={{ background: s.bg }}
                                        whileHover={{ scale: 1.04 }}
                                    >
                                        <div className="hero__subject-letter" style={{ background: s.color }}>
                                            {s.letter}
                                        </div>
                                        <span style={{ color: s.color, fontWeight: 600, fontSize: '0.875rem' }}>{s.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="hero__progress-section">
                                <p className="hero__progress-label">Your JEE Journey</p>
                                {[
                                    { label: 'Concepts Mastered', pct: 78, color: '#4E87FF' },
                                    { label: 'Practice Problems', pct: 92, color: '#8B5CF6' },
                                ].map(p => (
                                    <div key={p.label} className="hero__progress-row">
                                        <span>{p.label}</span>
                                        <div className="hero__progress-bar">
                                            <motion.div
                                                className="hero__progress-fill"
                                                style={{ background: p.color }}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${p.pct}%` }}
                                                transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
                                            />
                                        </div>
                                        <span style={{ color: p.color, fontWeight: 600 }}>{p.pct}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="hero__scroll"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
                <div className="hero__scroll-dot" />
            </motion.div>
        </section>
    )
}

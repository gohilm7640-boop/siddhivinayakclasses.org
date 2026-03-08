import { motion } from 'framer-motion'
import { ArrowRight, Zap, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import './HeroSection.css'

const floatCards = [
    { icon: '🎯', label: 'IIT-JEE', sub: '2024 Results', color: '#4E87FF' },
    { icon: '🏆', label: '98.7%', sub: 'Pass Rate', color: '#8B5CF6' },
    { icon: '⚡', label: '500+', sub: 'IIT Selections', color: '#EF4444' },
]

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
                            Start Learning Free <ArrowRight size={18} />
                        </Link>
                        <Link to="/courses" className="btn btn-outline">
                            Explore Courses
                        </Link>
                    </motion.div>

                    <motion.div
                        className="hero__trust"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <div className="hero__avatars">
                            {['A', 'B', 'C', 'D', 'E'].map((c, i) => (
                                <div key={c} className="hero__avatar" style={{ background: ['#4E87FF', '#8B5CF6', '#EF4444', '#00B4D8', '#10B981'][i] }}>
                                    {c}
                                </div>
                            ))}
                        </div>
                        <p className="hero__trust-text">
                            <strong>10,000+</strong> students already enrolled
                            <span className="hero__stars">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="#FBBF24" color="#FBBF24" />)}
                            </span>
                        </p>
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
                                    { label: 'Mock Tests Attempted', pct: 65, color: '#10B981' },
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

                    {/* Floating Chips */}
                    {floatCards.map((card, i) => (
                        <motion.div
                            key={card.label}
                            className="hero__float-chip"
                            style={{
                                top: `${[15, 55, 80][i]}%`,
                                [i % 2 === 0 ? 'right' : 'left']: i === 2 ? '10%' : '-8%',
                            } as React.CSSProperties}
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 3 + i, ease: 'easeInOut', delay: i * 0.8 }}
                        >
                            <span style={{ fontSize: '1.25rem' }}>{card.icon}</span>
                            <div>
                                <p className="hero__float-chip-label" style={{ color: card.color }}>{card.label}</p>
                                <p className="hero__float-chip-sub">{card.sub}</p>
                            </div>
                        </motion.div>
                    ))}
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

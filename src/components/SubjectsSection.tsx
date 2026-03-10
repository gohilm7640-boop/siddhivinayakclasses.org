import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, FlaskConical, Calculator } from 'lucide-react'
import './SubjectsSection.css'

const subjects = [
    {
        name: 'Physics',
        letter: 'P',
        color: '#EF4444',
        bg: 'linear-gradient(135deg, #FEF2F2 0%, #FFF5F5 100%)',
        icon: <BookOpen size={20} />,
        desc: 'Master mechanics, electromagnetism, optics, and modern physics through conceptual clarity and problem-solving.',
        topics: ['Mechanics', 'Electrostatics', 'Waves & Optics', 'Modern Physics']
    },
    {
        name: 'Chemistry',
        letter: 'C',
        color: '#00B4D8',
        bg: 'linear-gradient(135deg, #E8F9FD 0%, #F0FBFE 100%)',
        icon: <FlaskConical size={20} />,
        desc: 'Organic, Inorganic, and Physical Chemistry with reaction mechanisms and comprehensive practice sets.',
        topics: ['Organic Chem', 'Inorganic Chem', 'Physical Chem', 'Reactions']
    },
    {
        name: 'Mathematics',
        letter: 'M',
        color: '#8B5CF6',
        bg: 'linear-gradient(135deg, #F5F3FF 0%, #F8F5FF 100%)',
        icon: <Calculator size={20} />,
        desc: 'Algebra, Calculus, Coordinate Geometry, and Trigonometry with step-by-step problem-solving strategies.',
        topics: ['Calculus', 'Algebra', 'Coordinate Geometry', 'Trigonometry']
    },
]

export default function SubjectsSection() {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="subjects-section section">
            <div className="container">
                {/* Header */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-label" style={{ color: '#4E87FF' }}>What We Teach</span>
                    <h2 className="text-h1" style={{ marginTop: 10 }}>Three Pillars of <span className="gradient-text">JEE Success</span></h2>
                    <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: 560, margin: '16px auto 0' }}>
                        Comprehensive coaching across all three core subjects with India's best faculty.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="subjects-grid">
                    {subjects.map((s, i) => (
                        <motion.div
                            key={s.name}
                            className="subject-card"
                            style={{ background: s.bg }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.12, duration: 0.6 }}
                            whileHover={{ y: -6, boxShadow: `0 20px 60px ${s.color}20` }}
                        >
                            {/* Header */}
                            <div className="subject-card__header">
                                <div className="subject-card__letter" style={{ background: s.color }}>
                                    {s.letter}
                                </div>
                                <div className="subject-card__icon" style={{ color: s.color }}>
                                    {s.icon}
                                </div>
                            </div>
                            <h3 className="subject-card__name" style={{ color: s.color }}>{s.name}</h3>
                            <p className="subject-card__desc">{s.desc}</p>

                            {/* Topics */}
                            <div className="subject-card__topics">
                                {s.topics.map(t => (
                                    <span key={t} className="subject-card__topic" style={{ color: s.color, borderColor: `${s.color}30`, background: `${s.color}08` }}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="subject-card__footer" style={{ marginTop: 'auto', paddingTop: 16 }}>
                            </div>

                            {/* Big Letter Watermark */}
                            <div className="subject-card__watermark" style={{ color: `${s.color}10` }}>
                                {s.letter}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

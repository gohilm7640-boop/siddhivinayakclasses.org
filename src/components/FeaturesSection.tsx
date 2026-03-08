import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Video, Download, Brain, BarChart2, MessageCircle, Shield } from 'lucide-react'
import './FeaturesSection.css'

const features = [
    {
        icon: <Video size={22} />,
        title: 'HD Video Lectures',
        desc: 'Recorded and live lessons from IIT-graduate faculty, accessible anytime on any device.',
        color: '#4E87FF',
    },
    {
        icon: <Download size={22} />,
        title: 'PDF Study Materials',
        desc: 'Comprehensive notes, formula sheets, and solved practice papers available for download.',
        color: '#8B5CF6',
    },
    {
        icon: <Brain size={22} />,
        title: 'Adaptive Learning',
        desc: 'Smart algorithms that identify weak areas and deliver targeted practice problems.',
        color: '#EF4444',
    },
    {
        icon: <BarChart2 size={22} />,
        title: 'Progress Analytics',
        desc: 'Detailed performance dashboards tracking your improvement across every topic over time.',
        color: '#00B4D8',
    },
    {
        icon: <MessageCircle size={22} />,
        title: 'Live Doubt Sessions',
        desc: 'Daily doubt-clearing sessions with expert mentors to remove every roadblock quickly.',
        color: '#10B981',
    },
    {
        icon: <Shield size={22} />,
        title: 'Mock Tests & Analysis',
        desc: 'Full-length JEE-pattern mock tests with deep performance analysis and rank prediction.',
        color: '#F97316',
    },
]

export default function FeaturesSection() {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="features-section section section--glass">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-label" style={{ color: '#8B5CF6' }}>Why SSV</span>
                    <h2 className="text-h1" style={{ marginTop: 10 }}>
                        Everything You Need to <span className="gradient-text">Succeed</span>
                    </h2>
                    <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: 520, margin: '16px auto 0' }}>
                        A complete ecosystem designed to take you from basics to JEE mastery.
                    </p>
                </motion.div>

                <div className="features-grid">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            className="feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            whileHover={{ y: -4 }}
                        >
                            <div className="feature-card__icon" style={{ background: `${f.color}15`, color: f.color }}>
                                {f.icon}
                            </div>
                            <h3 className="feature-card__title">{f.title}</h3>
                            <p className="feature-card__desc">{f.desc}</p>
                            <div className="feature-card__shine" style={{ background: `linear-gradient(135deg, ${f.color}05, transparent)` }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

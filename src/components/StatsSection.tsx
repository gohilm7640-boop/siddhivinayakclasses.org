import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './StatsSection.css'

const stats = [
    { value: 10000, suffix: '+', label: 'Students Enrolled', color: '#4E87FF' },
    { value: 500, suffix: '+', label: 'IIT Selections', color: '#8B5CF6' },
    { value: 98, suffix: '%', label: 'Student Satisfaction', color: '#10B981' },
    { value: 15, suffix: '+', label: 'Years of Excellence', color: '#F97316' },
]

function CountUp({ to, suffix }: { to: number; suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true })
    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
        >
            <motion.span
                initial={{ innerText: 0 } as never}
                animate={isInView ? { innerText: to } as never : {}}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                onUpdate={(latest: Record<string, number>) => {
                    if (ref.current) ref.current.textContent = `${Math.round(latest['innerText'] ?? 0)}${suffix}`
                }}
            >
                0{suffix}
            </motion.span>
        </motion.span>
    )
}

export default function StatsSection() {
    const ref = useRef<HTMLElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section ref={ref} className="stats-section section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="stat-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -4, boxShadow: '0 16px 50px rgba(0,0,0,0.12)' }}
                        >
                            <div className="stat-card__accent" style={{ background: stat.color }} />
                            <div className="stat-card__value" style={{ color: stat.color }}>
                                {isInView && <CountUp to={stat.value} suffix={stat.suffix} />}
                            </div>
                            <p className="stat-card__label">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

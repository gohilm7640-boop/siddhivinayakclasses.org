import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Clock, BookOpen, Users, CheckCircle2 } from 'lucide-react'
import CTASection from '../components/CTASection'
import './PageStyles.css'

const courses = [
    {
        subject: 'Physics',
        letter: 'P',
        color: '#EF4444',
        bgLight: '#FEF2F2',
        courses: [
            { name: 'JEE Main Physics', level: 'Foundation', duration: '6 months', students: 1800, chapters: 28, price: '₹2,999' },
            { name: 'JEE Advanced Physics', level: 'Advanced', duration: '9 months', students: 900, chapters: 36, price: '₹4,999' },
        ],
    },
    {
        subject: 'Chemistry',
        letter: 'C',
        color: '#00B4D8',
        bgLight: '#E8F9FD',
        courses: [
            { name: 'JEE Main Chemistry', level: 'Foundation', duration: '6 months', students: 1600, chapters: 30, price: '₹2,999' },
            { name: 'JEE Advanced Chemistry', level: 'Advanced', duration: '9 months', students: 800, chapters: 38, price: '₹4,999' },
        ],
    },
    {
        subject: 'Mathematics',
        letter: 'M',
        color: '#8B5CF6',
        bgLight: '#F5F3FF',
        courses: [
            { name: 'JEE Main Mathematics', level: 'Foundation', duration: '6 months', students: 2100, chapters: 26, price: '₹2,999' },
            { name: 'JEE Advanced Mathematics', level: 'Advanced', duration: '9 months', students: 1100, chapters: 34, price: '₹4,999' },
        ],
    },
]

const included = [
    'HD Video Lectures',
    'PDF Notes & Formulas',
    'Chapter-wise Practice Sets',
    'Weekly Live Sessions',
    'Performance Analytics',
    'Doubt Clearing Sessions',
    'Progress Tracking',
]

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
            {children}
        </motion.div>
    )
}

export default function CoursesPage() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            {/* Hero */}
            <section className="page-hero grid-bg">
                <div className="page-hero__blob page-hero__blob--blue" />
                <div className="page-hero__blob page-hero__blob--purple" />
                <div className="container page-hero__inner">
                    <Section>
                        <span className="text-label" style={{ color: '#4E87FF' }}>Course Catalog</span>
                        <h1 className="text-display page-hero__title">Our <span className="gradient-text">Courses</span></h1>
                        <p className="page-hero__sub">
                            Comprehensive JEE preparation courses for every level — from foundation to advanced.
                            Taught by IIT alumni, designed for your success.
                        </p>
                    </Section>
                </div>
            </section>

            {/* What's Included */}
            <section className="section" style={{ background: '#030712' }}>
                <div className="container">
                    <Section>
                        <div className="section-header">
                            <span className="text-label" style={{ color: '#4E87FF' }}>What You Get</span>
                            <h2 className="text-h1" style={{ marginTop: 10, color: 'white' }}>
                                Everything <span className="gradient-text">Included</span>
                            </h2>
                        </div>
                    </Section>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                        {included.map((item, i) => (
                            <Section key={item} delay={i * 0.06}>
                                <div style={{
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: 14,
                                    padding: '16px 18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    color: 'white',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                }}>
                                    <CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} />
                                    {item}
                                </div>
                            </Section>
                        ))}
                    </div>
                </div>
            </section>

            {/* Course Listings */}
            {courses.map((subj) => (
                <section key={subj.subject} className="section" style={{ background: 'white' }}>
                    <div className="container">
                        <Section>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
                                <div style={{
                                    width: 52, height: 52, borderRadius: 15,
                                    background: subj.color, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white', fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 900,
                                }}>
                                    {subj.letter}
                                </div>
                                <h2 className="text-h2">{subj.subject} Courses</h2>
                            </div>
                        </Section>
                        <div className="courses-grid">
                            {subj.courses.map((c, i) => (
                                <Section key={c.name} delay={i * 0.1}>
                                    <motion.div className="course-card" whileHover={{ y: -6 }}>
                                        <div className="course-card__top">
                                            <span
                                                className="course-card__badge"
                                                style={{ background: subj.bgLight, color: subj.color }}
                                            >
                                                {c.level}
                                            </span>
                                            <div className="course-card__level-letter" style={{ background: subj.color }}>
                                                {subj.letter}
                                            </div>
                                        </div>
                                        <div className="course-card__body">
                                            <h3 className="course-card__name">{c.name}</h3>
                                            <p className="course-card__desc">
                                                Comprehensive {subj.subject.toLowerCase()} coverage for JEE {c.level === 'Foundation' ? 'Main' : 'Advanced'}.
                                                Structured learning path from basics to exam-ready.
                                            </p>
                                            <div className="course-card__meta">
                                                <span className="course-card__meta-item"><Clock size={13} /> {c.duration}</span>
                                                <span className="course-card__meta-item"><BookOpen size={13} /> {c.chapters} chapters</span>
                                                <span className="course-card__meta-item"><Users size={13} /> {c.students.toLocaleString()} enrolled</span>
                                            </div>
                                            <div className="course-card__footer">
                                                <span className="course-card__price" style={{ color: subj.color }}>{c.price}</span>
                                                <a href="/contact" className="course-card__cta" style={{ background: subj.color }}>
                                                    Enroll Now
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Section>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            <CTASection />
        </motion.div>
    )
}

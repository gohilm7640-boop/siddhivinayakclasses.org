import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Lightbulb, Award, BookOpen, Heart } from 'lucide-react'
import CTASection from '../components/CTASection'
import './PageStyles.css'

const values = [
    { icon: <Target size={20} />, title: 'Result-Oriented', desc: 'Every strategy and lesson is designed with one goal: your IIT selection.', color: '#4E87FF' },
    { icon: <Users size={20} />, title: 'Expert Faculty', desc: 'IIT graduates and experienced educators passionate about teaching.', color: '#8B5CF6' },
    { icon: <Lightbulb size={20} />, title: 'Conceptual Clarity', desc: 'We emphasize deep understanding over rote memorization.', color: '#F97316' },
    { icon: <Award size={20} />, title: 'Proven Excellence', desc: '15+ years of consistently producing IIT toppers across India.', color: '#10B981' },
    { icon: <BookOpen size={20} />, title: 'Comprehensive Material', desc: 'Best-in-class study materials refined over hundreds of JEE cycles.', color: '#EF4444' },
    { icon: <Heart size={20} />, title: 'Student-First', desc: 'Every student receives personalized attention and mentorship.', color: '#00B4D8' },
]

const team = [
    { name: 'Dr. Sanjay Verma', role: 'Physics Faculty', initial: 'S', color: '#EF4444', qual: 'IIT Delhi, PhD' },
    { name: 'Prof. Anita Sharma', role: 'Chemistry Faculty', initial: 'A', color: '#00B4D8', qual: 'IIT Bombay, M.Tech' },
    { name: 'Mr. Rahul Mishra', role: 'Mathematics Faculty', initial: 'R', color: '#8B5CF6', qual: 'IIT Kanpur, M.Tech' },
    { name: 'Dr. Priya Singh', role: 'Academic Director', initial: 'P', color: '#10B981', qual: 'IIT Madras, PhD' },
]

function Section({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    )
}

export default function AboutPage() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            {/* Page Hero */}
            <section className="page-hero grid-bg">
                <div className="page-hero__blob page-hero__blob--blue" />
                <div className="page-hero__blob page-hero__blob--purple" />
                <div className="container page-hero__inner">
                    <Section>
                        <span className="text-label" style={{ color: '#4E87FF' }}>Our Story</span>
                        <h1 className="text-display page-hero__title">About <span className="gradient-text">Siddhivinayak Classes</span></h1>
                        <p className="page-hero__sub">
                            For over 15 years, Siddhivinayak Classes has been the trusted partner for thousands of JEE aspirants across India.
                            Our mission is simple: turn every student's IIT dream into reality through exceptional teaching.
                        </p>
                    </Section>
                </div>
            </section>

            {/* Mission */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container">
                    <div className="about-mission">
                        <Section>
                            <span className="text-label" style={{ color: '#8B5CF6' }}>Our Mission</span>
                            <h2 className="text-h2" style={{ margin: '10px 0 16px' }}>
                                Democratizing World-Class<br />JEE Coaching
                            </h2>
                            <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 16 }}>
                                Siddhivinayak Classes was founded with the belief that every student who dreams of IIT deserves access to the highest quality coaching—regardless of geography or economic background.
                            </p>
                            <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '1.05rem' }}>
                                Through our mobile app and online platform, we've made IIT-caliber teaching available to students from Kanyakumari to Kashmir. Our faculty comprises IIT alumni who are not just subject matter experts, but also passionate mentors.
                            </p>
                        </Section>
                        <Section delay={0.15}>
                            <div className="about-mission__stats">
                                {[
                                    { val: '15+', label: 'Years Teaching', color: '#4E87FF' },
                                    { val: '10K+', label: 'Students Empowered', color: '#8B5CF6' },
                                    { val: '500+', label: 'IIT Selections', color: '#EF4444' },
                                    { val: '28', label: 'States Reached', color: '#10B981' },
                                ].map(s => (
                                    <div key={s.label} className="about-stat" style={{ borderColor: `${s.color}20` }}>
                                        <p className="about-stat__val" style={{ color: s.color }}>{s.val}</p>
                                        <p className="about-stat__label">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </Section>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section section--glass">
                <div className="container">
                    <Section>
                        <div className="section-header">
                            <span className="text-label" style={{ color: '#4E87FF' }}>What Drives Us</span>
                            <h2 className="text-h1" style={{ marginTop: 10 }}>Our Core <span className="gradient-text">Values</span></h2>
                        </div>
                    </Section>
                    <div className="about-values">
                        {values.map((v, i) => (
                            <Section key={v.title} delay={i * 0.06}>
                                <div className="about-value-card">
                                    <div className="about-value-card__icon" style={{ background: `${v.color}15`, color: v.color }}>
                                        {v.icon}
                                    </div>
                                    <h3 className="about-value-card__title">{v.title}</h3>
                                    <p className="about-value-card__desc">{v.desc}</p>
                                </div>
                            </Section>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container">
                    <Section>
                        <div className="section-header">
                            <span className="text-label" style={{ color: '#EF4444' }}>The Faculty</span>
                            <h2 className="text-h1" style={{ marginTop: 10 }}>Meet Your <span className="gradient-text">Mentors</span></h2>
                        </div>
                    </Section>
                    <div className="about-team">
                        {team.map((m, i) => (
                            <Section key={m.name} delay={i * 0.1}>
                                <motion.div className="team-card" whileHover={{ y: -6 }}>
                                    <div className="team-card__avatar" style={{ background: m.color }}>{m.initial}</div>
                                    <h3 className="team-card__name">{m.name}</h3>
                                    <p className="team-card__role" style={{ color: m.color }}>{m.role}</p>
                                    <p className="team-card__qual">{m.qual}</p>
                                </motion.div>
                            </Section>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </motion.div>
    )
}

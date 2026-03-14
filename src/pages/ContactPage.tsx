import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { Phone, MessageCircle, Clock, Mail } from 'lucide-react'
import './PageStyles.css'

const contactCards = [
    { icon: <Mail size={20} />, title: 'Email Us', value: 'gohilm7640@gmail.com', sub: 'We reply within 24 hours', color: '#4E87FF' },
    { icon: <Phone size={20} />, title: 'Call Us', value: '+91 98765 43210', sub: 'Mon–Sat 9am–7pm IST', color: '#10B981' },
    { icon: <MessageCircle size={20} />, title: 'WhatsApp', value: '+91 98765 43210', sub: 'Chat with our team anytime', color: '#25D366' },
    { icon: <Clock size={20} />, title: 'Support Hours', value: '9 AM – 9 PM', sub: 'Monday to Saturday', color: '#F97316' },
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

export default function ContactPage() {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            {/* Hero */}
            <section className="page-hero grid-bg">
                <div className="page-hero__blob page-hero__blob--blue" />
                <div className="page-hero__blob page-hero__blob--purple" />
                <div className="container page-hero__inner">
                    <Section>
                        <span className="text-label" style={{ color: '#4E87FF' }}>Get in Touch</span>
                        <h1 className="text-display page-hero__title">
                            Contact <span className="gradient-text">Siddhivinayak Classes</span>
                        </h1>
                        <p className="page-hero__sub">
                            Have questions about courses, admissions, or anything else?
                            Our team is here to help you every step of the way.
                        </p>
                    </Section>
                </div>
            </section>

            {/* Info Cards */}
            <section className="section" style={{ background: 'white', paddingBottom: 0 }}>
                <div className="container">
                    <div className="contact-cards-grid">
                        {contactCards.map((c, i) => (
                            <Section key={c.title} delay={i * 0.08}>
                                <div className="contact-info-card" style={{ flexDirection: 'column', gap: 12, borderRadius: 20, padding: 24, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                                    <div className="contact-info-card__icon" style={{ background: `${c.color}15`, color: c.color }}>
                                        {c.icon}
                                    </div>
                                    <div>
                                        <p className="contact-info-card__title">{c.title}</p>
                                        <p style={{ fontWeight: 600, fontSize: '0.95rem', color: c.color, marginBottom: 2 }}>{c.value}</p>
                                        <p className="contact-info-card__value">{c.sub}</p>
                                    </div>
                                </div>
                            </Section>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--glass" style={{ paddingBottom: 64 }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
                    <span className="text-label" style={{ color: '#8B5CF6' }}>We're Here For You</span>
                    <h2 className="text-h2" style={{ marginTop: 10, marginBottom: 16 }}>
                        Let's Start Your <span className="gradient-text">JEE Journey</span>
                    </h2>
                    <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: 32 }}>
                        Whether you're a student looking to enroll, a parent with questions,
                        or an educator interested in collaboration — we'd love to hear from you.
                    </p>


                </div>
            </section>
        </motion.div>
    )
}

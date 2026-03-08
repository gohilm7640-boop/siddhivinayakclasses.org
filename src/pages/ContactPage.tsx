import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react'
import './PageStyles.css'

const contactCards = [
    { icon: <Mail size={20} />, title: 'Email Us', value: 'hello@ssvacademy.in', sub: 'We reply within 24 hours', color: '#4E87FF' },
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
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

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
                            Contact <span className="gradient-text">SSV Academy</span>
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
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 64 }}>
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

            {/* Form Section */}
            <section className="section section--glass">
                <div className="container">
                    <div className="contact-layout">
                        {/* Left Info */}
                        <Section>
                            <div>
                                <span className="text-label" style={{ color: '#8B5CF6' }}>We're Here For You</span>
                                <h2 className="text-h2" style={{ marginTop: 10, marginBottom: 16 }}>
                                    Let's Start Your<br />
                                    <span className="gradient-text">JEE Journey</span>
                                </h2>
                                <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '1rem', marginBottom: 32 }}>
                                    Whether you're a student looking to enroll, a parent with questions,
                                    or an educator interested in collaboration — we'd love to hear from you.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {['Expert guidance tailored to your needs', 'Quick response within 24 hours', 'Free demo class available on request', '15+ years of trusted coaching experience'].map(item => (
                                        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: '#475569' }}>
                                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4E87FF', flexShrink: 0 }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: 40 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                                        <MapPin size={16} style={{ color: '#4E87FF' }} />
                                        <span style={{ fontSize: '0.875rem', color: '#64748B' }}>Serving students across all of India</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                        <Mail size={16} style={{ color: '#4E87FF' }} />
                                        <span style={{ fontSize: '0.875rem', color: '#64748B' }}>hello@ssvacademy.in</span>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        {/* Form */}
                        <Section delay={0.15}>
                            {submitted ? (
                                <motion.div
                                    className="contact-form"
                                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, minHeight: 400 }}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Send size={28} style={{ color: '#10B981' }} />
                                    </div>
                                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 700 }}>Message Sent!</h3>
                                    <p style={{ color: '#64748B', textAlign: 'center', maxWidth: 300 }}>
                                        Thank you for reaching out. Our team will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                                        className="btn btn-outline"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <h3 className="contact-form__title">Send Us a Message</h3>
                                    <div className="contact-form-row">
                                        <div className="form-group">
                                            <label className="form-label">Full Name *</label>
                                            <input required className="form-input" placeholder="Your name" value={form.name}
                                                onChange={e => setForm({ ...form, name: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Email Address *</label>
                                            <input required type="email" className="form-input" placeholder="your@email.com" value={form.email}
                                                onChange={e => setForm({ ...form, email: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="contact-form-row">
                                        <div className="form-group">
                                            <label className="form-label">Phone Number</label>
                                            <input className="form-input" placeholder="+91 98765 43210" value={form.phone}
                                                onChange={e => setForm({ ...form, phone: e.target.value })} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Subject *</label>
                                            <select required className="form-select" value={form.subject}
                                                onChange={e => setForm({ ...form, subject: e.target.value })}>
                                                <option value="">Select a topic</option>
                                                <option value="enrollment">Course Enrollment</option>
                                                <option value="demo">Book Free Demo</option>
                                                <option value="doubt">Academic Doubt</option>
                                                <option value="technical">Technical Support</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Message *</label>
                                        <textarea required className="form-textarea" placeholder="Tell us how we can help you..." value={form.message}
                                            onChange={e => setForm({ ...form, message: e.target.value })} />
                                    </div>
                                    <button type="submit" className="form-submit">
                                        Send Message <Send size={18} />
                                    </button>
                                </form>
                            )}
                        </Section>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

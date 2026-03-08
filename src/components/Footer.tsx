import { Link } from 'react-router-dom'
import { Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

const subjects = [
    { name: 'Physics', color: '#EF4444' },
    { name: 'Chemistry', color: '#00B4D8' },
    { name: 'Mathematics', color: '#8B5CF6' },
]

const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Courses', path: '/courses' },
    { label: 'Contact', path: '/contact' },
]

const socialLinks = [
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <Youtube size={18} />, href: '#', label: 'YouTube' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
]

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__glow" />
            <div className="container footer__inner">
                <div className="footer__brand">
                    <div className="footer__logo">
                        <div className="footer__logo-mark"><span>S</span></div>
                        <div>
                            <p className="footer__logo-title">SSV Academy</p>
                            <p className="footer__logo-sub">JEE Coaching Excellence</p>
                        </div>
                    </div>
                    <p className="footer__tagline">
                        Transforming aspirations into achievements for IIT-JEE dreams across India.
                    </p>
                    <div className="footer__subjects">
                        {subjects.map(s => (
                            <span key={s.name} className="footer__subject-tag" style={{ '--subj-color': s.color } as React.CSSProperties}>
                                {s.name}
                            </span>
                        ))}
                    </div>
                    <div className="footer__social">
                        {socialLinks.map(s => (
                            <a key={s.label} href={s.href} aria-label={s.label} className="footer__social-btn">
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer__links">
                    <div className="footer__col">
                        <h4 className="footer__col-title">Quick Links</h4>
                        {quickLinks.map(l => (
                            <Link key={l.path} to={l.path} className="footer__link">{l.label}</Link>
                        ))}
                    </div>
                    <div className="footer__col">
                        <h4 className="footer__col-title">Subjects</h4>
                        {subjects.map(s => (
                            <a key={s.name} href="/courses" className="footer__link">{s.name}</a>
                        ))}
                        <a href="/courses" className="footer__link">JEE Main</a>
                        <a href="/courses" className="footer__link">JEE Advanced</a>
                    </div>
                    <div className="footer__col">
                        <h4 className="footer__col-title">Contact</h4>
                        <div className="footer__contact-item">
                            <Mail size={14} />
                            <span>hello@ssvacademy.in</span>
                        </div>
                        <div className="footer__contact-item">
                            <Phone size={14} />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="footer__contact-item">
                            <MapPin size={14} />
                            <span>India</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <p className="footer__copy">
                        © 2026 SSV Academy. All rights reserved. | Designed by <a href="https://uimitra.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Uimitra</a>
                    </p>
                    <div className="footer__bottom-links">
                        <a href="#" className="footer__link">Privacy Policy</a>
                        <span className="footer__bottom-divider">•</span>
                        <a href="#" className="footer__link">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

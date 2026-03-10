import { Link } from 'react-router-dom'
import { Twitter, Instagram, Youtube, Phone, MapPin } from 'lucide-react'
import './Footer.css'

const subjects = [
    { name: 'Physics', color: '#EF4444' },
    { name: 'Chemistry', color: '#00B4D8' },
    { name: 'Mathematics', color: '#8B5CF6' },
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
                        <img src="/logo.jpg" alt="Logo" style={{ width: 44, height: 44, borderRadius: 12, objectFit: 'cover' }} />
                        <div>
                            <p className="footer__logo-title">Siddhivinayak Classes</p>
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
                        <h4 className="footer__col-title">Contact</h4>
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
                        © 2026 Siddhivinayak Classes. All rights reserved. | Designed by <a href="https://uimitra.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Uimitra</a>
                    </p>
                    <div className="footer__bottom-links">
                        <Link to="/privacy" className="footer__link">Privacy Policy</Link>
                        <span className="footer__bottom-divider">•</span>
                        <Link to="/terms" className="footer__link">Terms of Service</Link>
                        <span className="footer__bottom-divider">•</span>
                        <Link to="/refund" className="footer__link">Refund Policy</Link>
                        <span className="footer__bottom-divider">•</span>
                        <Link to="/delivery" className="footer__link">Delivery Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

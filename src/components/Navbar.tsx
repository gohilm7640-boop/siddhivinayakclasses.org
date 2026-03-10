import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const { pathname } = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setMobileOpen(false)
    }, [pathname])

    return (
        <>
            <motion.header
                className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="container navbar__inner">
                    {/* Logo */}
                    <Link to="/" className="navbar__logo">
                        <img src="/logo.jpg" alt="Logo" style={{ width: 44, height: 44, borderRadius: 12, objectFit: 'cover' }} />
                        <div className="navbar__logo-text">
                            <span className="navbar__logo-title">Siddhivinayak</span>
                            <span className="navbar__logo-sub">Classes</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="navbar__links hide-mobile">
                        {navLinks.map(({ label, path }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`navbar__link ${pathname === path ? 'navbar__link--active' : ''}`}
                            >
                                {label}
                                {pathname === path && (
                                    <motion.div className="navbar__link-indicator" layoutId="navIndicator" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    <div className="navbar__cta hide-mobile">
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
                            Contact for Admission →
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="navbar__hamburger show-mobile"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="mobile-nav"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <nav className="mobile-nav__links">
                            {navLinks.map(({ label, path }, i) => (
                                <motion.div
                                    key={path}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                >
                                    <Link
                                        to={path}
                                        className={`mobile-nav__link ${pathname === path ? 'mobile-nav__link--active' : ''}`}
                                    >
                                        {label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }} onClick={() => setMobileOpen(false)}>
                                    Contact for Admission →
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
            {mobileOpen && <div className="mobile-nav__overlay" onClick={() => setMobileOpen(false)} />}
        </>
    )
}

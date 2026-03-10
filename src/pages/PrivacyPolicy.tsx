import { motion } from 'framer-motion'
import './PageStyles.css'

export default function PrivacyPolicy() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="legal-page">
            <section className="page-hero grid-bg" style={{ padding: '60px 0 40px' }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <h1 className="text-display" style={{ fontSize: '2.5rem', marginBottom: 16 }}>Privacy Policy</h1>
                    <p style={{ color: '#64748B' }}>Last updated: March 10, 2026</p>
                </div>
            </section>
            <section className="section" style={{ paddingTop: 40, paddingBottom: 80 }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <div className="legal-content">
                        <h2>1. Introduction</h2>
                        <p>Welcome to Siddhivinayak Classes. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>

                        <h2>2. The Data We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                        <ul>
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Financial Data:</strong> includes bank account and payment card details (processed securely via our payment gateway).</li>
                            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                        </ul>

                        <h2>3. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul>
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., enrolling you in a course).</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal obligation.</li>
                        </ul>

                        <h2>4. Data Security</h2>
                        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>

                        <h2>5. Contact Us</h2>
                        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                        <p>Email: gohilm7640@gmail.com<br />Phone: +91 98765 43210</p>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

import { motion } from 'framer-motion'
import './PageStyles.css'

export default function TermsConditions() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="legal-page">
            <section className="page-hero grid-bg" style={{ padding: '60px 0 40px' }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <h1 className="text-display" style={{ fontSize: '2.5rem', marginBottom: 16 }}>Terms and Conditions</h1>
                    <p style={{ color: '#64748B' }}>Last updated: March 10, 2026</p>
                </div>
            </section>
            <section className="section" style={{ paddingTop: 40, paddingBottom: 80 }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <div className="legal-content">
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing and using the Siddhivinayak Classes website and registering for our courses, you accept and agree to be bound by the terms and provision of this agreement.</p>

                        <h2>2. Description of Service</h2>
                        <p>Siddhivinayak Classes provides educational services, including offline and online coaching for competitive examinations like JEE. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.</p>

                        <h2>3. User Registration and Accounts</h2>
                        <p>To access certain features of the service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>

                        <h2>4. Fees and Payment</h2>
                        <p>All fee payments must be made in accordance with the pricing and payment terms presented to you at the time of enrollment. We use secure third-party payment gateways (like Razorpay) for all transactions. You agree to pay all charges incurred by users of your credit card, debit card, or other payment method used in connection with a purchase or transaction.</p>

                        <h2>5. Intellectual Property</h2>
                        <p>All content included on this site and provided during courses, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, study materials, and software, is the property of Siddhivinayak Classes and protected by international copyright laws.</p>

                        <h2>6. Limitation of Liability</h2>
                        <p>Siddhivinayak Classes shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages resulting from your use of the website or the educational services provided.</p>

                        <h2>7. Contact Information</h2>
                        <p>For any queries regarding these Terms and Conditions, please contact us at gohilm7640@gmail.com.</p>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

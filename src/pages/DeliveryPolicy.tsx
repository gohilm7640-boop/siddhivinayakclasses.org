import { motion } from 'framer-motion'
import './PageStyles.css'

export default function DeliveryPolicy() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="legal-page">
            <section className="page-hero grid-bg" style={{ padding: '60px 0 40px' }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <h1 className="text-display" style={{ fontSize: '2.5rem', marginBottom: 16 }}>Shipping & Delivery Policy</h1>
                    <p style={{ color: '#64748B' }}>Last updated: March 10, 2026</p>
                </div>
            </section>
            <section className="section" style={{ paddingTop: 40, paddingBottom: 80 }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <div className="legal-content">
                        <h2>1. Delivery of Digital Content</h2>
                        <p>For all our online courses and digital study materials, delivery is completely digital. Upon successful payment of the course fees via our payment gateway, you will receive an immediate confirmation email. Access to the Siddhivinayak Classes application or portal will be granted within 24 hours.</p>

                        <h2>2. Delivery of Physical Materials</h2>
                        <p>If your enrolled course includes physical study packages or syllabus books:</p>
                        <ul>
                            <li><strong>In-Center Pickup:</strong> Students attending offline classes will be provided all physical study materials directly in the classrooms at our center located in India.</li>
                            <li><strong>Shipping via Courier (If Applicable):</strong> If physical notes are required to be mailed to a remote student, they will be dispatched within 3-5 business days via standard national couriers. Shipping timelines are generally 5-7 business days depending on the pin code.</li>
                        </ul>

                        <h2>3. Shipping Charges</h2>
                        <p>Shipping of physical study materials (if applicable to your plan) is generally included in the course fee unless explicitly specified at the time of checkout. In case of separate shipping charges, they will be calculated and displayed clearly before payment.</p>

                        <h2>4. Contact Us</h2>
                        <p>If you experience any delays in receiving your digital access credentials or physical study packages, please contact our support desk immediately.</p>
                        <p>Email: gohilm7640@gmail.com<br />Phone: +91 98765 43210</p>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

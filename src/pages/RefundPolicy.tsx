import { motion } from 'framer-motion'
import './PageStyles.css'

export default function RefundPolicy() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="legal-page">
            <section className="page-hero grid-bg" style={{ padding: '60px 0 40px' }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <h1 className="text-display" style={{ fontSize: '2.5rem', marginBottom: 16 }}>Cancellation & Refund Policy</h1>
                    <p style={{ color: '#64748B' }}>Last updated: March 10, 2026</p>
                </div>
            </section>
            <section className="section" style={{ paddingTop: 40, paddingBottom: 80 }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <div className="legal-content">
                        <h2>1. General Policy</h2>
                        <p>At Siddhivinayak Classes, we strive to ensure that our students receive the highest quality of education and support. We understand that circumstances may arise leading to a request for a refund or cancellation of enrollment.</p>

                        <h2>2. Cancellation by the Student</h2>
                        <p>A student can request complete cancellation of their course enrollment within <strong>7 days</strong> of the fee payment or before the commencement of the first batch class, whichever is earlier.</p>

                        <h2>3. Refund Eligibility</h2>
                        <ul>
                            <li><strong>Full Refund:</strong> If cancellation is requested within 7 days of payment and before the student has accessed any online course material or attended any physical classes, a 100% refund (minus payment gateway processing charges) will be initiated.</li>
                            <li><strong>Pro-Rata Refund:</strong> If a cancellation request is made after the classes have commenced but within 15 days of the start date, a pro-rata refund will be provided after deducting the cost of the classes held and study materials dispatched.</li>
                            <li><strong>No Refund:</strong> No refunds will be granted for cancellation requests made after 15 days from the start of the batch or after the student has downloaded/consumed substantial digital content.</li>
                        </ul>

                        <h2>4. Processing Refunds</h2>
                        <p>Approved refunds will be processed within 5-7 business days through the original mode of payment (Net Banking, Credit Card, Debit Card, or UPI). Please note that your bank or credit card issuer may take additional time to reflect the amount in your account.</p>

                        <h2>5. How to Request a Refund</h2>
                        <p>To request a cancellation or refund, please send a formal email to our support team with your enrollment details and payment receipt.</p>
                        <p>Email: gohilm7640@gmail.com</p>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

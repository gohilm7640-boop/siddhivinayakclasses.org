import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import RefundPolicy from './pages/RefundPolicy'
import DeliveryPolicy from './pages/DeliveryPolicy'
import './index.css'

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsConditions />} />
                    <Route path="/refund" element={<RefundPolicy />} />
                    <Route path="/delivery" element={<DeliveryPolicy />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default App

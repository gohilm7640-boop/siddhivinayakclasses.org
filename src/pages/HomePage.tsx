import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import SubjectsSection from '../components/SubjectsSection'
import FeaturesSection from '../components/FeaturesSection'
import CTASection from '../components/CTASection'

export default function HomePage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <HeroSection />
            <SubjectsSection />
            <FeaturesSection />
            <CTASection />
        </motion.div>
    )
}

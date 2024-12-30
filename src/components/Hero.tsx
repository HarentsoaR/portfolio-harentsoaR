import Bio from '@/utils/Bio'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="bg-[#222831] text-[#76ABAE] py-20">
      <div className="container mx-auto px-6 text-center">
        <Bio />
        <motion.a
          href="#profile"
          className="bg-[#76ABAE] text-[#222831] px-6 py-3 rounded-full font-bold text-lg hover:bg-[#EEEEEE] transition-colors inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4}}
        >
          Learn More About Me
        </motion.a>
      </div>
    </section>
  )
}


import Link from 'next/link'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <header className="bg-[#222831] text-[#EEEEEE] font-[family-name:var(--font-geist-sans)]">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/" className="text-xl font-bold text-[#76ABAE]">
              Harentsoa
            </Link>
          </li>
          <motion.li className="flex space-x-4">
            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="hover:text-[#76ABAE] transition-colors font-medium"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.li>
        </ul>
      </nav>
    </header>
  )
}


import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { scrollToElement } from '@/utils/scrollUtils'

export function Header() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname === '/contact') {
      scrollToElement('contact')
    }
  }, [pathname])

  const handleNavigation = (path: string) => {
    if (path === '/contact') {
      if (pathname === '/') {
        scrollToElement('contact')
      } else {
        // router.push('/').then(() => {
        //   setTimeout(() => scrollToElement('contact'), 100)
        // })
      }
    } else {
      router.push(path)
    }
  }

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
            {['Career', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => handleNavigation(`/${item.toLowerCase()}`)}
                  className={`transition-colors font-medium ${
                    pathname === `/${item.toLowerCase()}` ? 'text-[#76ABAE]' : 'text-[#EEEEEE] hover:text-[#76ABAE]'
                  }`}
                >
                  {item}
                </button>
              </motion.div>
            ))}
          </motion.li>
        </ul>
      </nav>
    </header>
  )
}


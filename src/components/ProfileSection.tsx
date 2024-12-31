import Image from 'next/image';
import { FaGithub, FaLinkedin, FaBirthdayCake, FaGraduationCap, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useProfile } from '@/contexts/ProfileContext';

export function ProfileSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [, setIsVisible] = useState(false);
  const { showProfile } = useProfile();

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const personalInfo = [
    { icon: FaBirthdayCake, text: 'October 11, 2002' },
    { icon: FaGraduationCap, text: 'Master\'s in Computer Science' },
    { icon: FaMapMarkerAlt, text: 'Antananarivo, Madagascar' },
    { icon: FaPhone, text: '+261 34 46 564 59' },
    { icon: FaEnvelope, text: 'randriamaholimanana1@gmail.com' },
  ];

  const languages = [
    { name: 'French', level: 80 },
    { name: 'English', level: 75 },
  ];

  return (
    <section id="profile-section" className="bg-[#31363F] overflow-hidden">
      <AnimatePresence>
        {showProfile && (
          <motion.div
            ref={sectionRef}
            className="container mx-auto px-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              opacity: { duration: 0.2 },
              height: { duration: 0.4 }
            }}
          >
            <div className="py-20">
              <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
                <motion.div
                  className="w-full lg:w-1/3 flex flex-col items-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="w-64 h-64 relative rounded-full overflow-hidden mb-6">
                    <Image
                      src="/usages/pfp.jpg"
                      alt="Harentsoa"
                      width={256}
                      height={256}
                      className="rounded-full"
                    />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-[#76ABAE] text-center">
                    Harentsoa RANDDRIAMAHOLIMANANA
                  </h2>
                  <p className="text-xl mb-6 text-[#EEEEEE] font-light text-center">
                    Full Stack Developer
                  </p>
                  <div className="flex justify-center gap-4 mb-6">
                    <motion.a
                      href="https://github.com/HarentsoaR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#76ABAE] hover:text-[#EEEEEE] transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaGithub size={32} />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/harentsoa-randriamaholimanana-a005902a4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#76ABAE] hover:text-[#EEEEEE] transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaLinkedin size={32} />
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold mb-6 text-[#76ABAE]">About Me</h3>
                  <ul className="space-y-4 mb-8">
                    {personalInfo.map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      >
                        <item.icon className="text-[#76ABAE] mr-3" />
                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <h3 className="text-2xl font-semibold mb-6 text-[#76ABAE]">Language Proficiency</h3>
                  <div className="space-y-4">
                    {languages.map((lang, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      >
                        <div className="flex justify-between mb-1">
                          <span>{lang.name}</span>
                          <span>{lang.level}%</span>
                        </div>
                        <div className="w-full bg-[#222831] rounded-full h-2.5">
                          <motion.div
                            className="bg-[#76ABAE] h-2.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${lang.level}%` }}
                            transition={{ duration: 1, delay: 1.2 + index * 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


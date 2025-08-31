'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useTranslations } from 'next-intl';
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

// Reusable component for contact info items
const InfoItem: React.FC<{ icon: React.ReactNode; text: string; href?: string }> = ({ icon, text, href }) => (
  <motion.a
    href={href || '#'}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 text-white/80 hover:text-[#76ABAE] transition-colors"
    variants={{
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    }}
  >
    <div className="bg-white/10 p-3 rounded-full border border-white/20 text-[#76ABAE]">{icon}</div>
    <span>{text}</span>
  </motion.a>
);

export function Contact() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    // Replace with your actual EmailJS details
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    emailjs.send(serviceID, templateID, { ...formData }, userID)
      .then(() => {
        setFormState('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormState('idle'), 4000); // Reset form after 4 seconds
      })
      .catch(() => {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 4000);
      });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#31363F] text-[#EEEEEE]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            {t('getInTouch')}
          </h2>
          <p className="text-lg text-center text-white/80 max-w-3xl mx-auto mb-16">
            {t('intro')}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* --- LEFT SIDE: Info & Map --- */}
          <motion.div
            className="w-full lg:w-5/12 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#76ABAE]">{t('contactInfo')}</h3>
            <div className="space-y-6">
              <InfoItem icon={<FaMapMarkerAlt />} text="Antananarivo, Madagascar" />
              <InfoItem icon={<FaEnvelope />} text="harentsoarandriama@gmail.com" href="mailto:harentsoarandriama@gmail.com" />
              <InfoItem icon={<FaLinkedin />} text="LinkedIn Profile" href="https://linkedin.com/in/harentsoa-randriamaholimanana-a005902a4" />
              <InfoItem icon={<FaGithub />} text="GitHub Profile" href="https://github.com/HarentsoaR" />
            </div>
            <motion.div 
              className="h-64 w-full rounded-lg overflow-hidden shadow-lg border border-white/20"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3826.960205253805!2d47.47328620432353!3d-18.91538362869702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU0JzU1LjQiUyA0N8KwMjgnMjMuOCJF!5e0!3m2!1sen!2smg!4v1719490000000!5m2!1sen!2smg"
                className="w-full h-full min-h-[300px]"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </motion.div>
          </motion.div>

          {/* --- RIGHT SIDE: Form --- */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#222831] p-8 rounded-lg shadow-xl border border-white/10">
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-10"
                  >
                    <h3 className="text-2xl font-bold text-green-400">{t('messageSent')}!</h3>
                    <p className="text-white/80 mt-2">{t('thanks')}</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-5">
                      <label htmlFor="name" className="block mb-2 font-medium text-white/90">{t('name')}</label>
                      <input type="text" id="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-[#31363F] rounded-md border border-transparent focus:border-[#76ABAE] focus:ring-2 focus:ring-[#76ABAE]/50 outline-none transition-all" required />
                    </div>
                    <div className="mb-5">
                      <label htmlFor="email" className="block mb-2 font-medium text-white/90">{t('email')}</label>
                      <input type="email" id="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-[#31363F] rounded-md border border-transparent focus:border-[#76ABAE] focus:ring-2 focus:ring-[#76ABAE]/50 outline-none transition-all" required />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block mb-2 font-medium text-white/90">{t('message')}</label>
                      <textarea id="message" value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 bg-[#31363F] rounded-md border border-transparent focus:border-[#76ABAE] focus:ring-2 focus:ring-[#76ABAE]/50 outline-none transition-all" rows={5} required />
                    </div>
                    <motion.button type="submit" disabled={formState === 'loading'} className="bg-[#76ABAE] text-[#222831] px-6 py-3 rounded-full font-bold text-lg hover:bg-white transition-colors w-full disabled:bg-gray-500" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      {formState === 'loading' ? t('sending') : t('sendMessage')}
                    </motion.button>
                    {formState === 'error' && <p className="text-center text-red-500 mt-4">{t('error')}</p>}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
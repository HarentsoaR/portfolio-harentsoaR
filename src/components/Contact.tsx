'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useTranslations } from 'next-intl';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const t = useTranslations('Contact'); // Use the appropriate namespace for translations

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('service_4aeq498', 'template_ow58hjp', templateParams, 'h5MDLuL3Qvme8vpC0')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSuccess(true);
        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.error('Failed to send email. Error:', err);
      });
  };

  return (
    <section id="contact" className="py-20 bg-[#31363F] text-[#EEEEEE]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#76ABAE]">{t('getInTouch')}</h2>
        {success && <p className="text-center text-green-500 mb-4">{t('messageSent')}</p>}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">{t('name')}</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-[#222831] text-[#EEEEEE] rounded border border-[#76ABAE] focus:border-[#EEEEEE] focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">{t('email')}</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-[#222831] text-[#EEEEEE] rounded border border-[#76ABAE] focus:border-[#EEEEEE] focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-medium">{t('message')}</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 bg-[#222831] text-[#EEEEEE] rounded border border-[#76ABAE] focus:border-[#EEEEEE] focus:outline-none"
              rows={4}
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="bg-[#76ABAE] text-[#222831] px-6 py-3 rounded-full font-bold text-lg hover:bg-[#EEEEEE] transition-colors w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('sendMessage')} {/* Use translation for Send Message */}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

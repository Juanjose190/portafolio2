'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FileDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const fullText = t('hero.subtitle');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E] via-[#0F3460] to-[#1A1A2E] z-0"
      />
      <motion.div
        className="z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-left mb-8 font-mono text-xl md:text-3xl">
          <div>public static void main(String[] args) {'{'}</div>
          <div className="ml-4">String name = <span className="text-[#E94560] text-2xl md:text-4xl font-bold">"Juanjo"</span>;</div>
        </div>
        <p className="text-xl md:text-2xl mb-8 h-8">{text}</p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-50}
            className="bg-[#E94560] hover:bg-[#E94570] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            {t('hero.portfolio')}
          </Link>
         <a
  href="/JuanJose_CV.pdf"
  download
  className="flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition-all duration-300 transform hover:scale-105"
>
  <FileDown className="w-5 h-5" />
  {t('hero.downloadCV')}
</a>

        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
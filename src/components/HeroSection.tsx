'use client';

import { motion } from 'framer-motion';
import { Phone, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { scrollToSection } from '@/lib/scroll';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center text-center pt-25 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/DelcaHero.webp"
          alt="Loja Delca Material de Construção cajupiranga parnamirim"
          fill
          priority
          className="object-cover"
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.4)]"
        >
          <span className="block">Construa com Confiança e Qualidade</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mt-20 flex flex-col sm:flex-row items-center gap-5"
        >
          <Button
            onClick={() => scrollToSection('#about')}
            size="lg"
            className="w-full sm:w-auto bg-delca-orange hover:bg-delca-orange/90 text-white group font-bold text-lg px-8 py-7 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Conheça Nossa História
            <Building2 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
          </Button>
          
          <Button
            onClick={() => scrollToSection('#contact')}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-white/10 border-2 border-white text-white hover:bg-white hover:text-delca-blue font-bold text-lg px-8 py-7 backdrop-blur-sm transition-all duration-300"
          >
            Entre em Contato
            <Phone className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

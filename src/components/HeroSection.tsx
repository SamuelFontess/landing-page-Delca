'use client';

import { motion } from 'framer-motion';
import { Phone, Award, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: 'smooth' });
};

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
      className="relative w-full h-screen flex items-center justify-center text-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/DelcaHero.webp"
          alt="Fundo da loja de materiais de construção DELCA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
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
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-delca-orange to-orange-400">
            que só a DELCA oferece
          </span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed [text-shadow:_0_2px_10px_rgb(0_0_0_/_0.6)]"
        >
          Há mais de 15 anos, somos a parceira de confiança para construtores e consumidores, fornecendo materiais que garantem excelência, segurança e durabilidade.
        </motion.p>

        <motion.div variants={itemVariants} className="mb-4 mt-3">
          <span className="inline-flex items-center px-4 py-1.5 bg-white/10 text-white border border-white/30 rounded-full text-base font-semibold backdrop-blur-sm">
            <Award className="w-5 h-5 mr-2 text-delca-orange" />
            Sua obra merece o melhor
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-1 flex flex-col sm:flex-row items-center gap-5"
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

'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { scrollToSection } from '@/lib/scroll';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/DelcaHero.webp"
          alt="Loja Delca Material de Construção cajupiranga parnamirim"
          fill
          priority
          className="object-cover scale-[1.03]"
        />
      </div>

      {/* Overlays: dark gradient bottom-up + warm orange atmospheric glow */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/55 to-black/10" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_70%_50%_at_10%_100%,hsl(25_95%_53%_/_0.18),transparent)]" />

      {/* Content — left-aligned, bottom-anchored */}
      <div className="relative z-[2] w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div className="max-w-2xl">

          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-7">
            <span className="text-yellow-400 text-xs">★★★★★</span>
            <span className="text-white/50 text-xs font-medium tracking-wide">4.6 · 200+ avaliações no Google</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-display font-700 text-[clamp(3rem,8vw,6rem)] text-white leading-[0.95] tracking-wide uppercase"
          >
            Construa com<br />
            <span className="text-delca-orange">Confiança</span>
            <br />e Qualidade
          </motion.h1>

          <motion.div {...fadeUp(0.32)} className="mt-6 flex items-center gap-3">
            <div className="w-8 h-[2px] bg-delca-orange" />
            <p className="text-sm text-white/50 font-medium">
              Parnamirim, RN · Mais de 15 anos no mercado
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.44)} className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => scrollToSection('#about')}
              size="lg"
              className="w-full sm:w-auto bg-delca-orange hover:bg-delca-orange/90 text-white font-semibold text-sm px-7 h-11 rounded-lg hover:-translate-y-px transition-all duration-200 group"
            >
              Conheça a DELCA
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
            </Button>

            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border border-white/20 text-white hover:bg-white/10 font-semibold text-sm px-7 h-11 bg-transparent backdrop-blur-sm transition-all duration-200 rounded-lg"
            >
              <Phone className="w-4 h-4 mr-2 opacity-60" />
              Fale Conosco
            </Button>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(0.65)}
        className="absolute bottom-8 right-8 z-[2] flex flex-col items-center gap-1.5 text-white/25"
      >
        <span className="text-[9px] font-bold tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>

    </section>
  );
}

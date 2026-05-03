'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative">
      <section
        id="hero"
        className="relative w-full flex items-end overflow-hidden h-[75vh] lg:h-auto"
        style={{ aspectRatio: '2251 / 1080' }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/delcahero2.webp"
            alt="Loja Delca Material de Construção cajupiranga parnamirim"
            fill
            priority
            className="object-cover"
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
              className="font-display font-700 text-[clamp(2.5rem,8vw,6rem)] text-white leading-[0.95] tracking-wide uppercase"
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
                className="w-full sm:w-auto border border-white/50 text-white hover:bg-white hover:border-white hover:text-zinc-900 font-semibold text-sm px-7 h-11 bg-transparent backdrop-blur-sm transition-all duration-200 rounded-lg"
              >
                <Phone className="w-4 h-4 mr-2 opacity-80" />
                Fale Conosco
              </Button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Scroll indicator — visível apenas no topo da página */}
      <AnimatePresence>
        {atTop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-1.5 py-5 text-zinc-400"
          >
            <span className="text-[9px] font-bold tracking-[0.3em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

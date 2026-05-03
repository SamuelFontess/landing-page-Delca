'use client';

import { motion } from 'framer-motion';
import { WhatsappLogo } from '@phosphor-icons/react';
import { scrollToSection } from '@/lib/scroll';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const CTABand = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 md:py-24">

      {/* Palavra decorativa de fundo */}
      <div aria-hidden className="pointer-events-none select-none absolute inset-0 flex items-center overflow-hidden">
        <span className="font-display uppercase font-bold leading-none text-white/[0.04] tracking-widest whitespace-nowrap pl-4"
          style={{ fontSize: 'clamp(6rem, 20vw, 18rem)' }}>
          OBRA
        </span>
      </div>

      <div className="relative container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] text-white leading-[1.05] uppercase tracking-wide">
            Pronto para começar<br />
            sua <span className="text-delca-orange">obra?</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={() => scrollToSection('#products')}
              className="px-7 py-3 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Ver produtos
            </button>
            <a
              href="https://wa.me/5584996200389"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors duration-200"
            >
              <WhatsappLogo className="w-4 h-4" />
              Chamar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default CTABand;

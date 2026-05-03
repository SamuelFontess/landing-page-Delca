'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const highlights = [
  'Qualidade superior em todos os produtos.',
  'Atendimento personalizado e especialista para sua obra.',
  'Parceria com as melhores marcas do mercado.',
  'Entrega rápida em Parnamirim-RN e região.',
];


const AboutSection = () => {
  return (
    <section id="about" className="py-28 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Texto + highlights */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease }}
          className="grid lg:grid-cols-[1fr_1fr] gap-10 xl:gap-16 items-start"
        >
          <div>
            <span className="inline-flex border-l-[3px] border-delca-orange pl-4 text-xs font-bold text-delca-orange tracking-[0.2em] uppercase font-body">
              Quem Somos
            </span>

            <h2 className="mt-5 font-display font-700 text-[clamp(2.2rem,5vw,3.5rem)] text-zinc-950 leading-[1.05] uppercase tracking-wide">
              Sua loja de{' '}
              <span className="text-delca-orange">materiais</span>{' '}
              em Parnamirim.
            </h2>

            <p className="mt-6 text-[15px] text-slate-500 leading-relaxed">
              A <span className="font-semibold text-slate-800">DELCA Construções</span> é sua parceira há mais de 15 anos — com atendimento dedicado, produtos das melhores marcas e o melhor preço da região. Do básico ao acabamento, tudo em um só lugar.
            </p>
          </div>

          <ul className="mt-0 lg:mt-14 space-y-3">
            {highlights.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1 w-4 h-4 rounded-full bg-delca-orange/10 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-delca-orange" />
                </div>
                <span className="text-sm text-slate-600 leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Vídeo 16:9 full-width */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="mt-14 rounded-2xl overflow-hidden aspect-video"
        >
          <video
            src="/delca-sobre.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;

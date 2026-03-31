'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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

        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-16 xl:gap-24 items-center">

          {/* Esquerda */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease }}
          >
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

            <ul className="mt-8 space-y-3">
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

          {/* Direita: Imagem com badge flutuante */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/DelcaSobre.jpeg"
                alt="Interior da loja DELCA Construções em Parnamirim, RN"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

          </motion.div>

        </div>


      </div>
    </section>
  );
};

export default AboutSection;

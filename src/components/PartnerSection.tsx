'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const brands = [
  { name: 'Super Cola', logo: '/partners/super-cola.png' },
  { name: 'Talita', logo: '/partners/talita.png' },
  { name: 'Taschibra', logo: '/partners/taschibra.png' },
  { name: 'Fertak', logo: '/partners/fertak.png' },
  { name: 'Hidrotintas', logo: '/partners/hidrotintas.png' },
  { name: 'Tramontina', logo: '/partners/tramontina.png' },
  { name: 'Quartzolit', logo: '/partners/quartzolit.png' },
  { name: 'Krona', logo: '/partners/krona.png' },
  { name: 'Docol', logo: '/partners/docol.png' },
  { name: 'Mizu', logo: '/partners/mizu.png' },
];

const extendedBrands = [...brands, ...brands];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-14"
        >
          <span className="inline-flex border-l-[3px] border-delca-orange pl-4 text-xs font-bold text-delca-orange tracking-[0.2em] uppercase">
            Parceiros
          </span>
          <h2 className="mt-4 font-display font-700 text-[clamp(1.8rem,4vw,3rem)] text-zinc-950 leading-[1.05] uppercase tracking-wide">
            As melhores marcas,{' '}
            <span className="text-delca-orange">um só lugar.</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-md leading-relaxed">
            Trabalhamos com líderes do mercado para garantir qualidade e durabilidade em cada projeto.
          </p>
        </motion.div>

      </div>

      <div className="partners-scroll relative w-full overflow-hidden group">
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll group-hover:pause">
          {extendedBrands.map((brand, index) => (
            <div
              key={`brand-${index}`}
              className="flex-shrink-0 flex items-center justify-center w-[100px] sm:w-[130px] md:w-[160px] lg:w-[180px]"
            >
              <div className="px-3 md:px-5">
                <Image
                  src={brand.logo}
                  alt={`Logo da ${brand.name}`}
                  width={150}
                  height={80}
                  className="object-contain w-full h-auto max-w-[80px] md:max-w-[120px] lg:max-w-[140px] opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

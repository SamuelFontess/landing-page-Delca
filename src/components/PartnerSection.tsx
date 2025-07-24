'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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

// Efeito de loop infinito
const extendedBrands = [...brands, ...brands];

const PartnersSection = () => {
  // Velocidade do carrossel
  const animationDuration = brands.length * 2;

  return (
    <section id="partners" className="py-20 lg:py-24 bg-gray-100 border-t border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            As Melhores Marcas, <span className="text-transparent bg-clip-text bg-gradient-to-r from-delca-orange to-delca-red">Um Só Lugar</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos em parceria com os líderes do mercado para garantir a máxima qualidade e durabilidade para o seu projeto.
          </p>
        </motion.div>

        {/* Carrossel Infinito de Logos */}
        <motion.div
          className="relative w-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-gray-100 to-transparent z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-gray-100 to-transparent z-10" />

          <motion.div
            className="flex"
            animate={{
              x: ['-100%', '0%'],
              transition: {
                ease: 'linear',
                duration: animationDuration,
                repeat: Infinity,
              },
            }}
          >
            {extendedBrands.map((brand, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center" style={{ width: '160px' }}>
                <Image
                  src={brand.logo}
                  alt={`Logo da ${brand.name}`}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;

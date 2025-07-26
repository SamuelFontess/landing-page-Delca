'use client';

import { useEffect, useState } from 'react';
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

const extendedBrands = [...brands, ...brands, ...brands]; // Triplicar para garantir continuidade

const PartnersSection = () => {
  const [animationDuration, setAnimationDuration] = useState('40s');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Durações de animação otimizadas para cada tamanho de tela
      if (width < 640) {
        setAnimationDuration('20s'); // Mobile - tempo adequado para mostrar todas as logos
      } else if (width < 768) {
        setAnimationDuration('25s'); // Tablet pequeno
      } else if (width < 1024) {
        setAnimationDuration('30s'); // Tablet
      } else if (width < 1280) {
        setAnimationDuration('35s'); // Desktop pequeno
      } else {
        setAnimationDuration('40s'); // Desktop grande
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="partners" className="py-20 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            As Melhores Marcas, <span className="text-transparent bg-clip-text bg-gradient-to-r from-delca-orange to-delca-red">Um Só Lugar</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos em parceria com os líderes do mercado para garantir a máxima qualidade e durabilidade para o seu projeto.
          </p>
        </div>

        <div
          className="relative w-full overflow-hidden group"
          style={{ '--animation-duration': animationDuration } as React.CSSProperties}
        >
          {/* Gradientes de fade nas laterais */}
          <div className="absolute top-0 bottom-0 left-0 w-4 sm:w-8 md:w-12 lg:w-16 bg-gradient-to-r from-gray-100 to-transparent z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-4 sm:w-8 md:w-12 lg:w-16 bg-gradient-to-l from-gray-100 to-transparent z-10" />

          <div className="flex animate-scroll group-hover:pause">
            {extendedBrands.map((brand, index) => (
              <div 
                key={`brand-${index}`} 
                className="flex-shrink-0 flex items-center justify-center w-[80px] sm:w-[100px] md:w-[140px] lg:w-[160px] xl:w-[180px]"
              >
                <div className="px-1 sm:px-2 md:px-3 lg:px-4">
                  <Image
                    src={brand.logo}
                    alt={`Logo da ${brand.name}`}
                    width={150}
                    height={80}
                    className="object-contain w-full h-auto max-w-[70px] sm:max-w-[90px] md:max-w-[130px] lg:max-w-[150px] xl:max-w-[170px] transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

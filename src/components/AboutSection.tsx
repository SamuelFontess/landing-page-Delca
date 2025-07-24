'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building2, Check } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    "Qualidade superior em todos os produtos.",
    "Atendimento personalizado e especialista.",
    "Parceria com as melhores marcas do mercado.",
    "Compromisso com a entrega e a sua satisfação."
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-24 lg:py-0 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Texto Sobre a Empresa */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-7 h-7 text-delca-blue" />
              <span className="text-lg font-semibold text-delca-blue tracking-wider">
                QUEM SOMOS
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tighter">
            Construindo Confiança, Entregando Qualidade.
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              A <span className="text-transparent bg-clip-text bg-gradient-to-r from-delca-orange to-delca-red text-2xl font-bold">DELCA Construções</span> é uma empresa com mais de 15 anos de experiência no mercado da construção civil em Parnamirim-RN, consolidada pela sua confiança, compromisso e dedicação ao cliente.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Ao longo de nossa trajetória, construímos parcerias sólidas com fornecedores e clientes, sempre com foco em um atendimento humanizado e em soluções que realmente fazem a diferença na vida de quem constrói.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Nosso diferencial está na variedade de produtos, que vai desde materiais básicos até acabamentos de qualidade, tudo selecionado para oferecer o melhor custo-benefício. Contamos com um ponto estratégico, facilitando o acesso dos nossos clientes e otimizando nossa logística de entrega rápida, garantindo mais agilidade para sua obra.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            A Delca é sinônimo de preço justo, eficiência e confiança. Mais que uma loja de materiais de construção, somos uma parceira do seu projeto, seja ele pequeno, médio ou grande.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="space-y-4">
                {highlights.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Coluna da Direita: Imagem da Loja */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-delca-orange/10 to-delca-blue/10 rounded-3xl blur-xl opacity-70" />
            
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.03, boxShadow: '0px 20px 40px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Image
                src="/DelcaSobre.jpg"
                alt="Ambiente da loja DELCA Construções"
                width={600}
                height={700}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

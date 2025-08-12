'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { productsData } from '@/data/products';
import { Button } from '@/components/ui/button';
import { CheckCircle, Truck, Phone } from 'lucide-react';

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: 'smooth' });
};

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState(productsData[0].category);
  const activeCategoryData = productsData.find(cat => cat.category === activeCategory);
  const activeProducts = activeCategoryData?.products || [];
  const activeColor = activeCategoryData?.color || 'bg-delca-orange';

  return (
    <section id="products" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tighter">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-delca-orange to-delca-red">Produtos</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Uma seleção dos nossos melhores produtos, organizados para facilitar sua escolha.
          </p>
        </motion.div>

        {/* Abas de Categoria */}
        <div className="flex justify-center mb-12">
          <div className="flex w-full max-w-lg p-2 bg-white rounded-2xl shadow-md border border-gray-200/80 space-x-2">
            {productsData.map(({ category, icon: Icon, color }) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative w-full px-2 py-3 text-sm font-semibold transition-colors duration-300 rounded-xl flex items-center justify-center gap-2"
              >
                {activeCategory === category && (
                  <motion.div
                    className={`absolute inset-0 ${activeColor} rounded-xl z-0`}
                    layoutId="active-category-background"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <div className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${
                  activeCategory === category ? 'text-white' : 'text-gray-600 group-hover:text-gray-900'
                }`}>
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Produtos */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeProducts.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-4 group-hover:text-delca-orange transition-colors duration-300">{product.name}</h3>
                
                <ul className="space-y-2 text-gray-600 text-sm mb-6 flex-grow">
                  {product.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-100 pt-4 flex justify-around text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-delca-blue" />
                    <span>Qualidade Garantida</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-delca-blue" />
                    <span>Entrega Rápida</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA para Catálogo Completo/Entrar em contato */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-4">
            Não encontrou o que procura? Temos muito mais produtos disponíveis!
          </p>
          <Button
            onClick={() => scrollToSection('#contact')}
            size="lg"
            className="bg-delca-blue hover:bg-delca-blue/90 text-white font-semibold"
          >
            <Phone className="w-5 h-5 mr-2" />
            Entre em Contato
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;

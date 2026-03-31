'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { productsData } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const sectionBgMap: Record<string, string> = {
  'bg-delca-orange': 'hsl(var(--delca-orange) / 0.07)',
  'bg-delca-blue':   'hsl(var(--delca-blue)   / 0.07)',
  'bg-delca-red':    'hsl(var(--delca-red)     / 0.07)',
};

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState(productsData[0].category);
  const activeCategoryData = productsData.find(cat => cat.category === activeCategory);
  const activeProducts = activeCategoryData?.products || [];
  const sectionBg = sectionBgMap[activeCategoryData?.color ?? ''] ?? '';

  return (
    <section
      id="products"
      className="pt-28 md:pt-36 pb-14 md:pb-16 transition-colors duration-500"
      style={{ backgroundColor: sectionBg || '#ffffff' }}
    >
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-14"
        >
          <span className="inline-flex border-l-[3px] border-delca-orange pl-4 text-xs font-bold text-delca-orange tracking-[0.2em] uppercase">
            Catálogo
          </span>
          <h2 className="mt-4 font-display font-700 text-[clamp(1.8rem,4vw,3rem)] text-zinc-950 leading-[1.05] uppercase tracking-wide">
            Nossos <span className="text-delca-orange">Produtos</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-md leading-relaxed">
            Seleção dos melhores produtos, organizados por categoria para facilitar sua busca.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1.5 mb-10 overflow-x-auto pb-1 scrollbar-hide">
          {productsData.map(({ category, icon: Icon, color }) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative flex-shrink-0 flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  active
                    ? `${color} text-white`
                    : 'bg-white border border-gray-200 text-slate-500 hover:text-zinc-800 hover:border-gray-300'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="hidden sm:inline">{category}</span>
                {active && (
                  <motion.div
                    layoutId="tab-indicator"
                    className={`absolute inset-0 rounded-lg ${color} -z-10`}
                    transition={{ duration: 0.25, ease }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {activeProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease, delay: index * 0.04 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden group flex flex-col hover:-translate-y-1 hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                <div className="relative w-full h-44 overflow-hidden bg-white border-b border-gray-100">
                  <Image
                    src={product.image}
                    alt={product.description}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-sm font-bold text-zinc-800 group-hover:text-delca-orange transition-colors duration-200">
                    {product.name}
                  </h3>
                  <ul className="mt-3 space-y-1.5 flex-grow">
                    {product.features.map(feature => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-slate-500">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-delca-orange flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-zinc-950 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <div>
            <p className="text-white font-semibold text-sm">Não encontrou o que procura?</p>
            <p className="text-zinc-500 text-xs mt-0.5">Temos muito mais produtos disponíveis — entre em contato.</p>
          </div>
          <Button
            onClick={() => scrollToSection('#contact')}
            size="sm"
            className="flex-shrink-0 bg-delca-orange hover:bg-delca-orange/90 text-white font-semibold px-6 h-10 rounded-lg transition-colors duration-200"
          >
            Falar com a equipe
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductsSection;

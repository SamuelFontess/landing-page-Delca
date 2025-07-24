'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const SimpleHeader = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      // Header sempre visível
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-md"
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo com link para a página inicial */}
        <Link href="/" className="flex items-center space-x-3 cursor-pointer">
          <div className="w-12 h-12 overflow-hidden rounded-xl">
            <Image 
              src="/favicon.ico"
              alt="DELCA"
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">DELCA</h1>
            <p className="text-xs tracking-widest -mt-1 text-gray-500">CONSTRUÇÕES</p>
          </div>
        </Link>

        {/* Botão para Voltar */}
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 bg-delca-orange text-white font-semibold rounded-lg hover:bg-delca-orange/90 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          Voltar ao Início
        </Link>
      </div>
    </motion.header>
  );
};

export default SimpleHeader;

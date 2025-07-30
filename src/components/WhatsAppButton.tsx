'use client';

import { motion } from 'framer-motion';
// MUDANÇA 1: Importar o componente Image do Next.js
import Image from 'next/image';

const WhatsAppButton = () => {
  const phoneNumber = '5584996200389';
  const defaultMessage = 'Olá! Gostaria de fazer um orçamento ou tirar uma dúvida.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage )}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg text-white hover:bg-green-600 transition-colors duration-300"
    >
      {/* MUDANÇA 2: Usando o componente Image em vez do ícone */}
      <Image
        src="/WhatsApp-logo.webp" // Caminho a partir da pasta 'public'
        alt="WhatsApp Logo"
        width={36} // Tamanho visual do ícone dentro do botão
        height={36}
      />
      
      <span className="absolute top-0 right-0 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;

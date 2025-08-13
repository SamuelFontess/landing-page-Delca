'use client';

import { motion } from 'framer-motion';
import { Phone, Smartphone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { WhatsappLogo } from "@phosphor-icons/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Avaliações', href: '#reviews' },
    { name: 'Localização', href: '#location' },
    { name: 'Produtos', href: '#products' },
    { name: 'Contato', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/delcacons/?locale=pt_BR', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com/delcaconstrucao/', color: 'hover:text-pink-600' },
    { icon: WhatsappLogo, href: 'https://wa.me/5584996200389', color: 'hover:text-green-500' },
    { icon: Mail, href: 'mailto:delcaconstrucoes@hotmail.com', color: 'hover:text-red-500' },
  ];

  const contactInfo = [
    { icon: Phone, text: '(84) 99620-0389' },
    { icon: Mail, text: 'delcaconstrucoes@hotmail.com' },
    { icon: MapPin, text: 'Estrada pra pium, 2011 - Cajupiranga, RN' },
    { icon: Clock, text: 'Seg a Sex: 7h às 17h | Sáb: 7h às 12h' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Informações da Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 overflow-hidden rounded-xl shadow-md">
                <Image 
                  src="/favicon.ico"
                  alt="DELCA"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">DELCA</h3>
                <p className="text-sm text-gray-400">CONSTRUÇÕES</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Há mais de 15 anos oferecendo materiais de construção de alta qualidade, construindo confiança e transformando projetos em realidade.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  {social.icon === WhatsappLogo ? (
                    <social.icon className="w-6 h-6"/>
                  ) : (
                    <social.icon className="w-5 h-5" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-delca-orange transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <info.icon className="w-5 h-5 text-delca-orange mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">{info.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Rodapé Inferior */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} DELCA Construções. Todos os direitos reservados.
            </p>
            
            {/* Link para a Política de Privacidade */}
            <Link href="/politica-de-privacidade" className="text-sm text-gray-400 hover:text-white transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

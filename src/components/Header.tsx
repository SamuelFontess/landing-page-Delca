'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { scrollToSection as baseScrollToSection } from '@/lib/scroll';

const menuItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Avaliações', href: '#reviews' },
    { name: 'Produtos', href: '#products' },
    { name: 'Localização', href: '#location' },
    { name: 'Contato', href: '#contact' },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [isMenuOpen]);

    const scrollToSection = (href: string) => {
        setIsMenuOpen(false);
        setTimeout(() => baseScrollToSection(href), 0);
    };

    return (
        <>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            <header className="absolute top-0 left-0 right-0 z-50 bg-transparent w-full">
                <div className="container mx-auto flex items-center justify-between h-20 px-4">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-3 cursor-pointer"
                        onClick={() => scrollToSection('#hero')}
                    >
                        <div className="w-12 h-12 overflow-hidden rounded-xl shadow-md backdrop-blur-sm transition duration-300 hover:shadow-lg">
                            <Image 
                                src="/favicon.ico"
                                alt="Logo delca material de construção"
                                width={48}
                                height={48}
                                className="object-cover"
                                />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white">DELCA</h1>
                            <p className="text-xs tracking-widest -mt-1 text-gray-300">CONSTRUÇÕES</p>
                        </div>
                    </motion.div>

                    {/* Menu de Navegação */}
                    {isHomePage && (
                        <nav className="hidden md:flex items-center space-x-6">
                            {menuItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="font-medium pb-1 border-b-2 border-transparent text-white hover:text-delca-orange hover:border-delca-orange/50 transition-all duration-300"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </nav>
                    )}
                    
                    {/* Botão de Solicitação de Orçamento */}
                    <div className="hidden md:block">
                        <Button
                            onClick={() => scrollToSection('#contact')}
                            className="bg-delca-orange hover:bg-delca-orange/90 text-white font-semibold"
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Solicitar Orçamento
                        </Button>
                    </div>

                    {/* Botão do Menu Mobile */}
                    {isHomePage && (
                        <div className="md:hidden">
                            <button
                                className="p-2"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Abrir menu"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen}
                            >
                                <AnimatePresence initial={false} mode="wait">
                                    <motion.div
                                        key={isMenuOpen ? 'x' : 'menu'}
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {isMenuOpen ? <X className="h-7 w-7 text-white" /> : <Menu className="h-7 w-7 text-white" />}
                                    </motion.div>
                                </AnimatePresence>
                            </button>
                        </div>
                    )}
                </div>

                {/* Menu de Navegação Mobile */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            id="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
                        >
                            <nav className="py-4 flex flex-col items-center">
                                {menuItems.map((item) => (
                                    <button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className="w-full py-4 text-center text-lg text-gray-700 hover:text-delca-orange hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                                <div className="px-4 pt-4 pb-2 w-full">
                                    <Button
                                        onClick={() => scrollToSection('#contact')}
                                        className="w-full bg-delca-orange hover:bg-delca-orange/90 text-white text-lg py-6"
                                    >
                                        <Phone className="w-5 h-5 mr-2" />
                                        Solicitar Orçamento
                                    </Button>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
};

export default Header;

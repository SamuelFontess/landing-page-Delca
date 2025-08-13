'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { WhatsappLogo } from "@phosphor-icons/react";

// Esquema de validação do formulário
const contactSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres.'),
  email: z.string().email('Por favor, insira um e-mail válido.'),
  phone: z.string().min(10, 'O telefone deve ter pelo menos 10 dígitos.'),
  message: z.string().min(15, 'Sua mensagem deve ter pelo menos 15 caracteres.'),
});

const iconColors: Record<string, { bg: string; text: string }> = {
  "Ligue para Nós": { bg: "bg-blue-100", text: "text-blue-500" },
  "WhatsApp": { bg: "bg-green-100", text: "text-green-500" },
  "Instagram": { bg: "bg-pink-100", text: "text-pink-500" },
  "Envie um E-mail": { bg: "bg-red-100", text: "text-red-500" },
};

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const ref = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const recipientEmail = 'delcaconstrucoes@hotmail.com';
    const subject = `Contato Site - ${data.name} (${data.phone})`;
    const body = `
      Olá,
      
      Você recebeu uma nova mensagem do site DELCA.
      --------------------------------------------------
      Nome: ${data.name}
      Email: ${data.email}
      Telefone: ${data.phone}
      --------------------------------------------------
      
      Mensagem:
      ${data.message}
    `;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const contactMethods = [
    { icon: Phone, title: 'Ligue para Nós', value: '(84) 99620-0389', href: 'tel:+5584996200389' },
    { icon: WhatsappLogo, title: 'WhatsApp', value: 'Iniciar Conversa', href: 'https://wa.me/5584996200389' },
    { icon: Instagram, title: 'Instagram', value: '@delcaconstrucao', href: 'https://www.instagram.com/delcaconstrucao/' },
    { icon: Mail, title: 'Envie um E-mail', value: 'delcaconstrucoes@hotmail.com', href: 'mailto:delcaconstrucoes@hotmail.com' },
  ];

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-delca-orange to-delca-red">Começar?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa equipe está à disposição para tirar suas dúvidas e ajudar a transformar seu projeto em realidade.
          </p>
        </motion.div>

        {/* Títulos */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-8">
          <motion.h3
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Outras Formas de Contato
          </motion.h3>
          <motion.h3
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Envie sua Mensagem
          </motion.h3>
        </div>

        {/* Conteúdo */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Coluna Esquerda: Conteúdo de Contato */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {contactMethods.map((method) => {
            const colors = iconColors[method.title] || { bg: "bg-gray-100", text: "text-gray-500" };
            
            return (
              <a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 bg-gray-50 border border-gray-200/80 rounded-2xl group hover:border-delca-orange/50 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div
                  className={`flex-shrink-0 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 ${colors.bg}`}
                  >
                    <method.icon
                      className={`${colors.text} ${
                        method.title === "WhatsApp" ? "w-8 h-8" : "w-7 h-7"
                      }`}
                    />
                  </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{method.title}</h4>
                  <p className="text-gray-600 font-medium group-hover:underline">{method.value}</p>
                </div>
              </a>
            );
          })}
            <div className="flex items-center gap-5 p-6 bg-gray-50 border border-gray-200/80 rounded-2xl shadow-sm">
              <div className="flex-shrink-0 p-4 rounded-xl bg-delca-blue/10">
                <Clock className="w-7 h-7 text-delca-blue" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Horário de funcionamento</h4>
                <div className="mt-1 space-y-1.5 text-gray-600 font-medium">
                  <p><strong>Segunda a Sexta:</strong> 7h às 17h</p>
                  <p><strong>Sábados:</strong> 7h às 12h</p>
                  <p><strong>Domingos:</strong> Fechado</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Formulário */}
        <motion.div
        className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 border border-gray-100 h-full flex flex-col justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
        >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full space-y-6">
        <div className="flex flex-col gap-6 flex-grow">
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Nome Completo</label>
            <Input id="name" {...register('name')} placeholder="Seu nome"
                className={errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} />
            {errors.name && <p className="text-red-600 text-xs mt-1.5">{errors.name.message}</p>}
            </div>

            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">E-mail</label>
            <Input id="email" type="email" {...register('email')} placeholder="seu.email@exemplo.com"
                className={errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} />
            {errors.email && <p className="text-red-600 text-xs mt-1.5">{errors.email.message}</p>}
            </div>

            <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Telefone / WhatsApp</label>
            <Input id="phone" {...register('phone')} placeholder="(00) 90000-0000"
                className={errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} />
            {errors.phone && <p className="text-red-600 text-xs mt-1.5">{errors.phone.message}</p>}
            </div>

            <div className="flex flex-col flex-grow">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Sua Mensagem</label>
            <Textarea
                id="message"
                {...register('message')}
                placeholder="Descreva sua dúvida..."
                className={`flex-grow min-h-[180px] resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
            />
            {errors.message && <p className="text-red-600 text-xs mt-1.5">{errors.message.message}</p>}
            </div>
        </div>

        <Button type="submit"
            className="w-full text-lg py-7 bg-delca-orange hover:bg-delca-orange/90 text-white font-bold"
            size="lg"
        >
            <Send className="w-5 h-5 mr-2" />
            Abrir no seu E-mail
        </Button>
        </form>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

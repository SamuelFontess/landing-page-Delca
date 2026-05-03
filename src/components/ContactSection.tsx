'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Phone, Mail, CheckCircle, ArrowRight, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { WhatsappLogo } from '@phosphor-icons/react';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const contactSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres.'),
  email: z.string().email('Por favor, insira um e-mail válido.'),
  phone: z.string().min(10, 'O telefone deve ter pelo menos 10 dígitos.'),
  subject: z.string().optional(),
  message: z.string().min(15, 'Sua mensagem deve ter pelo menos 15 caracteres.'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const channels = [
  {
    icon: WhatsappLogo,
    label: 'WhatsApp',
    value: '(84) 99620-0389',
    href: 'https://wa.me/5584996200389',
    iconColor: '#25D366',
    bg: '#F0FFF6',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@delcaconstrucao',
    href: 'https://www.instagram.com/delcaconstrucao/',
    iconColor: '#E1306C',
    bg: '#FFF0F5',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'delcaconstrucoes@hotmail.com',
    href: 'mailto:delcaconstrucoes@hotmail.com',
    iconColor: '#F97316',
    bg: '#FFF7ED',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(84) 99620-0389',
    href: 'tel:+5584996200389',
    iconColor: '#3B82F6',
    bg: '#EFF6FF',
  },
];

const ContactSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const subjectLine = data.subject
      ? `Contato Site - ${data.name} (${data.phone}) — ${data.subject}`
      : `Contato Site - ${data.name} (${data.phone})`;
    const body = `Olá,\n\nVocê recebeu uma nova mensagem do site DELCA.\n--------------------------------------------------\nNome: ${data.name}\nEmail: ${data.email}\nTelefone: ${data.phone}${data.subject ? `\nAssunto: ${data.subject}` : ''}\n--------------------------------------------------\n\nMensagem:\n${data.message}`;
    window.location.href = `mailto:delcaconstrucoes@hotmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
    reset();
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 6000);
  };

  return (
    <section id="contact" className="pt-14 md:pt-16 pb-28 md:pb-36 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-14"
        >
          <span className="inline-flex border-l-[3px] border-delca-orange pl-4 text-xs font-bold text-delca-orange tracking-[0.2em] uppercase">
            Entre em contato
          </span>
          <h2 className="mt-4 font-display font-700 text-[clamp(1.8rem,4vw,3rem)] text-zinc-950 leading-[1.05] uppercase tracking-wide">
            Fale com <span className="text-delca-orange">a gente</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-md leading-relaxed">
            Solicite um orçamento, tire dúvidas ou venha nos visitar. Respondemos rapidinho.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Canais */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease, delay: 0.1 }}
            className="space-y-3"
          >
            {channels.map(({ icon: Icon, label, value, href, iconColor, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: bg }}
                >
                  <Icon className="w-5 h-5" style={{ color: iconColor }} />
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-semibold text-zinc-800 truncate">{value}</p>
                </div>
                <ArrowRight className="flex-shrink-0 w-4 h-4 text-slate-300 group-hover:text-delca-orange group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            ))}
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 overflow-hidden">
              <div className="h-1 bg-delca-orange w-full" />
              <div className="p-7">
              <h3 className="font-display font-700 text-lg text-zinc-950 uppercase tracking-wide">
                Solicite um orçamento
              </h3>
              <p className="mt-1 text-sm text-slate-500">Preencha abaixo e retornaremos em breve.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                      Nome
                    </label>
                    <Input
                      id="name"
                      {...register('name')}
                      placeholder="Seu nome"
                      className={`h-10 rounded-lg border-gray-200 bg-white focus:border-delca-orange focus:ring-delca-orange/20 ${errors.name ? 'border-red-400' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      {...register('phone')}
                      placeholder="(84) 9 0000-0000"
                      className={`h-10 rounded-lg border-gray-200 bg-white focus:border-delca-orange focus:ring-delca-orange/20 ${errors.phone ? 'border-red-400' : ''}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="seu@email.com"
                    className={`h-10 rounded-lg border-gray-200 bg-white focus:border-delca-orange focus:ring-delca-orange/20 ${errors.email ? 'border-red-400' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    {...register('subject')}
                    className="w-full h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm text-zinc-800 focus:outline-none focus:border-delca-orange focus:ring-1 focus:ring-delca-orange/20 transition-colors"
                  >
                    <option value="">Selecione</option>
                    <option>Orçamento de materiais</option>
                    <option>Consulta de estoque</option>
                    <option>Informações sobre entrega</option>
                    <option>Parceria comercial</option>
                    <option>Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Descreva o que precisa, quantidade estimada, local de entrega..."
                    className={`min-h-[110px] rounded-lg border-gray-200 bg-white focus:border-delca-orange focus:ring-delca-orange/20 resize-none ${errors.message ? 'border-red-400' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {isSuccess && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    E-mail preparado — confirme o envio no seu cliente.
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full h-11 bg-delca-orange hover:bg-delca-orange/90 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-px"
                >
                  <Send className="w-4 h-4 mr-2 opacity-80" />
                  Enviar mensagem
                </Button>
              </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

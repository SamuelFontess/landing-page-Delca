'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { WhatsappLogo } from '@phosphor-icons/react';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const googleMapsUrl =
  'https://www.google.com/maps/place/DELCA+Material+de+Constru%C3%A7%C3%A3o/@-5.941464,-35.2512114,20.25z/data=!4m12!1m5!3m4!2zNcKwNTYnMjkuMSJTIDM1wrAxNScwNC4yIlc!8m2!3d-5.9414184!4d-35.2511527!3m5!1s0x7b2578702be1e7b:0x12fcdaf5d2f42efc!8m2!3d-5.9414779!4d-35.2511315!16s%2Fg%2F11b6tbwgy2?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D';

export default function LocationSection({ map }: { map: ReactNode }) {
  return (
    <section id="location" className="pt-14 md:pt-16 pb-14 md:pb-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-14"
        >
          <span className="inline-flex border-l-[3px] border-delca-orange pl-4 text-xs font-bold text-delca-orange tracking-[0.2em] uppercase">
            Onde estamos
          </span>
          <h2 className="mt-4 font-display font-700 text-[clamp(1.8rem,4vw,3rem)] text-zinc-950 leading-[1.05] uppercase tracking-wide">
            Venha nos <span className="text-delca-orange">visitar</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-md leading-relaxed">
            Nossa loja está em Cajupiranga, Parnamirim. Venha pessoalmente ou fale antes de visitar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease, delay: 0.1 }}
            className="flex flex-col justify-between gap-3"
          >
            {/* Endereço */}
            <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-delca-orange/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-delca-orange" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Endereço</p>
                <p className="mt-1 text-sm font-bold text-zinc-900">Estrada pra Pium, 2011</p>
                <p className="mt-0.5 text-xs text-slate-500">Cajupiranga · Parnamirim, RN</p>
              </div>
            </div>

            {/* Horário */}
            <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-delca-blue/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-delca-blue" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Horário de Funcionamento</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 font-medium">Seg – Sex</span>
                    <span className="text-sm font-bold text-zinc-900">7h – 17h</span>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 font-medium">Sábado</span>
                    <span className="text-sm font-bold text-zinc-900">7h – 12h</span>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600 font-medium">Domingo</span>
                    <span className="text-sm text-slate-400">Fechado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-slate-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Telefone</p>
                <p className="mt-1 text-sm font-bold text-zinc-900">(84) 99620-0389</p>
                <p className="mt-0.5 text-xs text-slate-400">Ligue e fale com nossa equipe</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 bg-white">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: '#F0FFF6' }}>
                <WhatsappLogo className="w-5 h-5" style={{ color: '#25D366' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">WhatsApp</p>
                <p className="mt-1 text-sm font-bold text-zinc-900">(84) 99620-0389</p>
              </div>
              <a
                href="https://wa.me/5584996200389"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-4 py-2 text-xs font-semibold bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Conversar
              </a>
            </div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[420px] border border-gray-200 shadow-sm">
              {map}
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-delca-orange hover:text-delca-orange/75 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Abrir no Google Maps
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

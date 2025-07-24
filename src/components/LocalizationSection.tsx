'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import GoogleMap from './GoogleMap';

const LocationSection = () => {
  const ref = useRef(null);
  const googleMapsUrl = "https://www.google.com/maps/place/DELCA+Material+de+Constru%C3%A7%C3%A3o/@-5.941464,-35.2512114,20.25z/data=!4m12!1m5!3m4!2zNcKwNTYnMjkuMSJTIDM1wrAxNScwNC4yIlc!8m2!3d-5.9414184!4d-35.2511527!3m5!1s0x7b2578702be1e7b:0x12fcdaf5d2f42efc!8m2!3d-5.9414779!4d-35.2511315!16s%2Fg%2F11b6tbwgy2?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D";

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  } as const;

  return (
    <section id="location" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <MapPin className="w-12 h-12 mx-auto text-delca-orange" />
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tighter">
            Venha nos Visitar
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos localizados na principal de Cajupiranga, prontos para atender você com a qualidade e atenção que seu projeto merece.
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-gradient-to-br from-delca-orange/10 to-delca-blue/10 p-2 sm:p-4 rounded-2xl shadow-2xl">
            <div className="bg-white rounded-xl overflow-hidden border-2 border-white">
              <div className="h-[60vh] min-h-[400px] max-h-[700px] w-full">
                <GoogleMap />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-delca-blue text-white font-semibold rounded-lg hover:bg-delca-blue/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <ExternalLink className="w-5 h-5" />
            Abrir no Google Maps
          </a>
        </motion.div>
      </div>
    </section>
   );
};

export default LocationSection;

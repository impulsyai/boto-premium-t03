'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-brown uppercase mb-3">Localização</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark mb-10">
              Venha nos <span className="italic text-brand-brown">visitar</span>
            </h3>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-bronze flex items-center justify-center text-brand-brown shrink-0 border border-brand-brown/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-brand-dark text-lg mb-1">Endereço</h4>
                  <p className="text-gray-600 font-light leading-relaxed">Av. Paulista, 1000<br/>Bela Vista, São Paulo - SP<br/>CEP: 01310-100</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-bronze flex items-center justify-center text-brand-brown shrink-0 border border-brand-brown/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-brand-dark text-lg mb-1">Contato</h4>
                  <p className="text-gray-600 font-light leading-relaxed">(11) 99911-2234<br/>(11) 99911-2234 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-brand-bronze flex items-center justify-center text-brand-brown shrink-0 border border-brand-brown/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-medium text-brand-dark text-lg mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-600 font-light leading-relaxed">Segunda a Sexta: 08:00 às 18:00<br/>Sábado: 08:00 às 12:00</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/@-23.5614141,-46.6558819,17z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MapPin className="w-4 h-4" />
              Ver no Google Maps
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-xl border border-brand-bronze/50"
          >
            {/* Placeholder for Google Maps iframe */}
            <div className="absolute inset-0 bg-brand-nude flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-brand-brown/50 mx-auto mb-4" />
                <p className="text-gray-500 font-light">Mapa de Localização</p>
              </div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.868770783307!2d-38.96105152410884!3d-12.25708898799865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x714378f8c8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sR.%20Dr.%20Sabino%20Silva%2C%20905%20-%20Ponto%20Central%2C%20Feira%20de%20Santana%20-%20BA%2C%2044075-085!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'relative', zIndex: 10 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 opacity-80 hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

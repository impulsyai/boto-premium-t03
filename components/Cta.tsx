'use client';

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Cta() {
  return (
    <section className="py-32 relative overflow-hidden bg-brand-dark flex items-center justify-center min-h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1920&auto=format&fit=crop" 
          alt="Ambiente relaxante" 
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 leading-tight">
            Pronta para cuidar da <br/><span className="italic text-brand-nude">sua pele?</span>
          </h2>
          <p className="text-xl text-brand-nude/80 mb-12 max-w-2xl mx-auto font-light">
            Dê o primeiro passo para revelar a sua melhor versão. Agende sua avaliação e descubra o protocolo ideal para você.
          </p>
          
          <a 
            href="https://wa.me/5511999112234?text=Olá, gostaria de agendar uma avaliação na Boto Premium."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-brown text-white px-12 py-5 rounded-full text-lg font-medium hover:bg-brand-brown-light transition-all shadow-xl hover:shadow-brand-brown/30 hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar Consulta pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

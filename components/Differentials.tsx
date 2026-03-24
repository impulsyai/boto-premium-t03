'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    "Atendimento altamente especializado",
    "Equipamentos modernos e aprovados",
    "Atendimento personalizado e humanizado",
    "Ambiente confortável e acolhedor",
    "Protocolos seguros e exclusivos",
    "Acompanhamento contínuo de resultados"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-brand-bronze/50">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-bronze rounded-full mix-blend-multiply filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-bronze rounded-full mix-blend-multiply filter blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-brown uppercase mb-3">Diferenciais</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark mb-6">
              Por que escolher a <span className="italic text-brand-brown">Boto Premium</span>?
            </h3>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light">
              Nosso compromisso é com a sua autoestima, segurança e satisfação. Combinamos expertise em harmonização facial com as melhores tecnologias do mercado para entregar resultados naturais e duradouros.
            </p>
            <a 
              href="https://wa.me/5511999112234?text=Olá, gostaria de agendar uma avaliação na Boto Premium."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-brown text-white px-8 py-4 rounded-full font-medium hover:bg-brand-brown-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Fale com nossa equipe
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {differentials.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-brand-nude p-6 rounded-2xl border border-brand-bronze/50 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle2 className="w-6 h-6 text-brand-brown shrink-0" />
                <span className="font-medium text-brand-dark leading-snug">{item}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

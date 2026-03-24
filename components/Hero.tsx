'use client';

import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-nude">
      {/* Soft decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-bronze rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white text-brand-brown text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-brand-bronze">
              Estética Facial Avançada em São Paulo
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-brand-dark leading-[1.1] mb-6">
              A pele perfeita a <span className="italic text-brand-brown">poucas sessões</span> de você
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">
              Especialista em Harmonização Facial, Rinomodelação e Botox. Protocolos exclusivos para realçar sua melhor versão.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="https://wa.me/5511999112234?text=Olá,%20gostaria%20de%20agendar%20um%20horário" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-brown text-white px-8 py-4 rounded-full text-base font-medium hover:bg-brand-brown-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5" />
                Agende sua avaliação
              </a>
              <a 
                href="#tratamentos" 
                className="flex items-center justify-center gap-2 bg-transparent text-brand-dark border border-brand-dark/20 px-8 py-4 rounded-full text-base font-medium hover:border-brand-brown hover:text-brand-brown transition-all"
              >
                Conhecer Tratamentos
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <Image 
                src="/boto_perfil.png" 
                alt="Mulher com pele saudável e bonita" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/20 to-transparent mix-blend-overlay" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
              className="absolute -bottom-8 -left-8 md:bottom-12 md:-left-12 bg-white p-6 rounded-3xl shadow-xl max-w-[220px] border border-brand-bronze"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-full bg-brand-bronze flex items-center justify-center text-brand-brown font-serif font-bold text-2xl">
                  BP
                </div>
                <div className="text-sm font-bold leading-tight text-brand-dark">Estética<br/>Avançada</div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">Cuidado especializado para a saúde e beleza da sua pele.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import { MessageSquare, ClipboardCheck, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: '1. Agende seu horário',
      description: 'Entre em contato pelo WhatsApp e escolha o melhor dia e horário para sua consulta.'
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: '2. Avaliação Especializada',
      description: 'Nossas profissionais farão uma análise detalhada das suas necessidades e objetivos.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: '3. Plano Personalizado',
      description: 'Receba um protocolo de tratamento exclusivo, focado nos melhores resultados para você.'
    }
  ];

  return (
    <section className="py-24 bg-brand-nude">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark mb-6">
            Como funciona o <span className="italic text-brand-brown">atendimento</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-brand-brown/20 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center text-brand-brown mb-8 border border-brand-bronze group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h4 className="text-2xl font-serif font-medium text-brand-dark mb-4">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed max-w-xs font-light">{step.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

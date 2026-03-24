'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-brown" />,
      title: 'Segurança',
      description: 'Protocolos rigorosos e equipamentos aprovados pela ANVISA.'
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-brown" />,
      title: 'Atendimento Humanizado',
      description: 'Cuidado focado nas necessidades únicas de cada paciente.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-brown" />,
      title: 'Tecnologia',
      description: 'As mais modernas tecnologias para resultados superiores.'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mt-12 shadow-lg"
            >
              <Image 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop" 
                alt="Ambiente da clínica" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg"
            >
              <Image 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop" 
                alt="Atendimento médico" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl z-10 border-4 border-brand-nude">
              <div className="w-24 h-24 rounded-full border border-brand-bronze flex items-center justify-center bg-brand-nude">
                <span className="font-serif text-4xl text-brand-brown italic">B</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-brown uppercase mb-3">Sobre a Clínica</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark mb-6 leading-tight">
              Excelência em <br/> <span className="italic text-brand-brown">estética avançada</span>
            </h3>
            
            <div className="space-y-5 text-gray-600 mb-10 leading-relaxed font-light text-lg">
              <p>
                A Boto Premium nasceu com o propósito de elevar a autoestima e realçar a beleza natural de cada paciente. Somos especialistas em procedimentos de alta performance.
              </p>
              <p>
                Com foco em resultados reais e atendimento humanizado, oferecemos protocolos exclusivos de Harmonização Facial, Botox, Preenchimento e Bioestimuladores, sempre utilizando as melhores tecnologias do mercado.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-bronze flex items-center justify-center shadow-sm border border-brand-brown/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-medium text-brand-dark mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500 font-light">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Sparkles, ArrowRight, X } from 'lucide-react';

const treatments = [
  {
    id: 'harmonizacao',
    title: 'Harmonização Facial',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    shortDesc: 'Equilíbrio e simetria para o seu rosto.',
    fullDesc: 'O preenchimento com ácido hialurônico permite realçar contornos, corrigir assimetrias e devolver o volume perdido, proporcionando um aspecto rejuvenescido e natural.'
  },
  {
    id: 'botox',
    title: 'Toxina Botulínica',
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop',
    shortDesc: 'Suavização de rugas e linhas de expressão.',
    fullDesc: 'O tratamento com toxina botulínica é o padrão ouro para prevenir e suavizar rugas dinâmicas, como as da testa e "pés de galinha", garantindo um olhar descansado.'
  },
  {
    id: 'bioestimuladores',
    title: 'Bioestimuladores',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop',
    shortDesc: 'Estímulo natural da produção de colágeno.',
    fullDesc: 'Tratamentos que estimulam a produção natural de colágeno pelo próprio corpo, melhorando a flacidez e a firmeza da pele de forma progressiva e duradoura.'
  },
  {
    id: 'rinomodelacao',
    title: 'Rinomodelação',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop',
    shortDesc: 'Ajustes no nariz sem cirurgia.',
    fullDesc: 'Procedimento não cirúrgico que utiliza preenchedores para corrigir pequenas imperfeições no nariz, como a giba óssea ou a ponta caída, com resultados imediatos.'
  },
  {
    id: 'labios',
    title: 'Preenchimento Labial',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop',
    shortDesc: 'Volume, contorno e hidratação para os lábios.',
    fullDesc: 'Realce a beleza dos seus lábios com volume personalizado, definição de contorno e hidratação profunda, sempre respeitando a harmonia facial.'
  },
  {
    id: 'skinbooster',
    title: 'Skinbooster',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    shortDesc: 'Hidratação profunda e brilho natural.',
    fullDesc: 'Tratamento injetável de hidratação profunda que melhora a elasticidade, o brilho e a textura da pele, tratando finas linhas de expressão e o ressecamento.'
  }
];

export default function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState<typeof treatments[0] | null>(null);

  return (
    <section id="tratamentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-brand-brown" />
            <h2 className="text-sm font-bold tracking-widest text-brand-brown uppercase">Especialidades</h2>
            <Sparkles className="w-5 h-5 text-brand-brown" />
          </div>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark mb-6">
            Nossos <span className="italic text-brand-brown">Tratamentos</span>
          </h3>
          <p className="text-gray-600 text-lg font-light">
            Protocolos exclusivos e tecnologias avançadas para revelar a sua melhor versão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedTreatment(treatment)}
            >
              <Image 
                src={treatment.image}
                alt={treatment.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-2xl font-serif font-medium text-white mb-3">{treatment.title}</h4>
                  <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {treatment.shortDesc}
                  </p>
                  <div className="flex items-center text-brand-nude font-medium text-sm">
                    <span className="border-b border-brand-nude/30 pb-1">Descobrir tratamento</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTreatment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTreatment(null)}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-brand-nude rounded-[2rem] overflow-hidden w-full max-w-4xl shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedTreatment(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-brand-dark hover:bg-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative h-64 md:h-auto md:w-2/5 shrink-0">
                <Image 
                  src={selectedTreatment.image} 
                  alt={selectedTreatment.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 md:p-12 overflow-y-auto md:w-3/5 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-serif font-medium text-brand-dark mb-6">{selectedTreatment.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
                  {selectedTreatment.fullDesc}
                </p>
                <div className="mt-auto">
                  <a 
                    href={`https://wa.me/5511999112234?text=Olá, gostaria de saber mais sobre ${selectedTreatment.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-brand-brown text-white px-8 py-4 rounded-full font-medium hover:bg-brand-brown-light transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                  >
                    Agendar Avaliação
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

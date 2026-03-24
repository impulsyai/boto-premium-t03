'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Juliana Mendes',
    text: 'A Boto Premium é maravilhosa! O atendimento da equipe é impecável. Fiz minha harmonização facial e o resultado ficou super natural, exatamente como eu queria.',
    treatment: 'Harmonização Facial'
  },
  {
    name: 'Carolina Santos',
    text: 'Ambiente super acolhedor e profissionais excelentes. Sinto muita segurança em realizar meus procedimentos aqui. Os resultados do botox foram incríveis.',
    treatment: 'Toxina Botulínica'
  },
  {
    name: 'Amanda Oliveira',
    text: 'Trato minha pele na Boto Premium há meses e minha autoestima é outra. O cuidado com cada detalhe e a naturalidade dos resultados fazem toda a diferença.',
    treatment: 'Preenchimento Labial'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-bronze/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-brown uppercase mb-3">Depoimentos</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark mb-6">
            O que dizem nossas <span className="italic text-brand-brown">pacientes</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-brand-bronze opacity-50" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-brown text-brand-brown" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 italic font-light">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <h4 className="font-serif font-medium text-brand-dark text-lg">{testimonial.name}</h4>
                <p className="text-sm text-brand-brown">{testimonial.treatment}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

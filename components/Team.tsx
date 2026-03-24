'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const team = [
  {
    name: 'Dra. Ana Silveira',
    role: 'Dermatologista',
    crm: 'CRM 12345/SP',
    image: '/team_01.png'
  },
  {
    name: 'Dra. Beatriz Santos',
    role: 'Cirurgiã Dentista',
    crm: 'CRO 6789/SP',
    image: '/team_02.png'
  },
  {
    name: 'Dra. Carla Mendes',
    role: 'Biomédica Esteta',
    crm: 'CRBM 5432/SP',
    image: '/team_03.png'
  }
];

export default function Team() {
  return (
    <section id="equipe" className="py-24 bg-brand-nude">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-brown uppercase mb-3">Corpo Clínico</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark mb-6">
            Nossa <span className="italic text-brand-brown">Equipe</span>
          </h3>
          <p className="text-gray-600 text-lg font-light">
            Profissionais altamente qualificadas e dedicadas a realçar o que você tem de melhor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-md group-hover:shadow-xl transition-all duration-500">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/10 transition-colors duration-500 mix-blend-overlay" />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-serif font-medium text-brand-dark mb-1">{member.name}</h4>
                <p className="text-brand-brown font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs tracking-wider">{member.crm}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

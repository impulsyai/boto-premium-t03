'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-brown uppercase mb-3">Resultados</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark mb-6">
            Antes e <span className="italic text-brand-brown">Depois</span>
          </h3>
          <p className="text-gray-600 text-lg font-light">
            Resultados reais de pacientes que confiaram em nossos protocolos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Placeholder 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-[2rem] overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-2">
              <div className="relative aspect-[3/4]">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
                  alt="Antes" 
                  fill
                  className="object-cover grayscale opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Antes</div>
              </div>
              <div className="relative aspect-[3/4]">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
                  alt="Depois" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-brand-brown text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Depois</div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-white font-serif text-xl mb-1">Harmonização Facial</h4>
                <p className="text-white/80 text-sm">Resultados naturais e harmônicos</p>
            </div>
          </motion.div>

          {/* Placeholder 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-[2rem] overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-2">
              <div className="relative aspect-[3/4]">
                <Image 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" 
                  alt="Antes" 
                  fill
                  className="object-cover grayscale opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Antes</div>
              </div>
              <div className="relative aspect-[3/4]">
                <Image 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" 
                  alt="Depois" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-brand-brown text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Depois</div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h4 className="text-white font-serif text-xl mb-1">Preenchimento Labial</h4>
                <p className="text-white/80 text-sm">Volume e contorno definidos</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/botopremium"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-brand-brown font-medium hover:text-brand-brown-dark transition-colors"
          >
            Ver mais resultados no nosso Instagram <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}

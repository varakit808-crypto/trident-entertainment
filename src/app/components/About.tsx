import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import philosophyImg from '@/assets/bf30d1250af97f63b2e0b85eabf9cc57aaa7452d.png';

export const About = () => {
  return (
    <section id="about" className="py-40 bg-[#0c0e0c] text-white relative overflow-hidden border-t border-white/5">
      {/* Background Subtle Text */}
      <div className="absolute top-[20%] right-[-5%] text-[25vw] font-[family-name:var(--font-brand)] opacity-[0.03] pointer-events-none select-none leading-none">
        Magnetic
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <ImageWithFallback
                src={philosophyImg}
                alt="Trident Philosophy"
                className="w-full h-full object-cover brightness-90 contrast-110 transition-transform duration-[3s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0c] via-transparent to-transparent opacity-60" />
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -bottom-10 -right-10 w-full h-full border border-gold/20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 lg:pl-12"
          >
            <div className="flex items-center gap-8 mb-12">
              <span className="text-gold font-sans tracking-[0.6em] uppercase text-[11px] font-bold">
                The Philosophy
              </span>
              <div className="flex-grow h-[1px] bg-gradient-to-r from-gold/40 to-transparent" />
            </div>

            <h2 className="text-5xl md:text-8xl font-[family-name:var(--font-brand)] mb-14 leading-[1] tracking-tight text-white">
              Redefining <br />
              <span className="gold-text">Sophistication</span>
            </h2>

            <p className="text-white/80 font-sans leading-relaxed text-xl mb-14 font-light tracking-wide max-w-2xl">
              Trident Entertainment was founded to bridge the gap between high-end hospitality and elite male performance. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/50 font-sans font-light tracking-wide text-[15px] leading-relaxed mb-16">
              <p>
                We believe that every private event on Oahu deserves a standard of service that is both alluring and impeccably professional. Our performers are curators of atmosphere, trained to uphold the highest levels of discretion and charm.
              </p>
              <p>
                Whether it's an intimate bachelorette gathering, a live muse session for artists, or elite mixology service, we bring a cinematic presence that elevates the ordinary into the extraordinary.
              </p>
            </div>

            <div className="flex flex-wrap gap-12 border-t border-white/10 pt-16">
              <div>
                <span className="block text-3xl font-[family-name:var(--font-brand)] text-white mb-2">Oahu</span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60 font-bold">Exclusive Service</span>
              </div>
              <div>
                <span className="block text-3xl font-[family-name:var(--font-brand)] text-white mb-2">21+</span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60 font-bold">Mature Standard</span>
              </div>
              <div>
                <span className="block text-3xl font-[family-name:var(--font-brand)] text-white mb-2">Bespoke</span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60 font-bold">Tailored Events</span>
              </div>
              <div>
                <span className="block text-3xl font-[family-name:var(--font-brand)] text-white mb-2">Woman</span>
                <span className="text-[10px] tracking-[0.4em] uppercase text-gold/60 font-bold">Owned & Operated</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

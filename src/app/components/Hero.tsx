import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import heroImg from '@/assets/31b34d95e51c0a0e03c8efecb4b24edd5c62c77b.png';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Soft Sophisticated Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_100%)] z-10" />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <ImageWithFallback 
            src={heroImg} 
            alt="Trident Entertainment Magnetic Experiences" 
            className="w-full h-full object-cover object-center brightness-110 contrast-[1.1]"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-8 relative z-20 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="text-gold font-sans tracking-[0.8em] uppercase text-[10px] md:text-[12px] block font-bold">
              Trident Entertainment
            </span>
          </motion.div>

          <div className="overflow-hidden mb-12">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-[120px] font-[family-name:var(--font-brand)] text-white tracking-tight leading-[0.85]"
            >
              Magnetic <span className="gold-text">Experiences</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="text-white/60 font-sans tracking-[0.2em] uppercase text-[10px] md:text-xs mb-16 max-w-2xl mx-auto leading-relaxed"
          >
            High-energy, sophisticated entertainment designed to transform celebrations into unforgettable moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-12"
          >
            <a
              href="#booking"
              className="group relative px-14 py-6 gold-bg text-black font-sans font-bold tracking-[0.4em] uppercase text-[10px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(197,160,89,0.3)]"
            >
              <span className="relative z-10">Private Inquiry</span>
            </a>

            <a
              href="#events"
              className="text-white font-sans tracking-[0.5em] uppercase text-[10px] font-bold border-b border-white/20 hover:border-gold hover:text-gold transition-all duration-500 pb-3"
            >
              The Monthly Events
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <span className="text-[9px] tracking-[0.6em] uppercase text-white/30 font-bold vertical-rl">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

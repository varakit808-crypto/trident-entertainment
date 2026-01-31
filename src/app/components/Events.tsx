import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Calendar, Clock, MapPin, Palette, Wine } from 'lucide-react';
import eventImg from '@/assets/0897a27f9b261befdfe6f9b1d5480cc061875dda.png';

export const Events = () => {
  return (
    <section id="events" className="py-40 bg-[#0c0e0c] relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <span className="text-gold font-sans tracking-[0.7em] uppercase text-[11px] mb-8 block font-bold">
              Exclusive Access
            </span>
            <h2 className="text-5xl md:text-8xl font-[family-name:var(--font-brand)] text-white leading-[1.1] mb-0">
              Monthly <span className="gold-text">Events</span>
            </h2>
          </div>
          <p className="text-white/30 font-sans tracking-widest text-[11px] uppercase font-bold max-w-xs leading-loose">
            Ticketed events for those seeking an elevated artistic atmosphere. 21+ only.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative group bg-[#0c0e0c] border border-white/5 flex flex-col overflow-hidden"
        >
          {/* Banner Image */}
          <div className="w-full relative aspect-[3/4] md:aspect-video lg:aspect-[2.2/1] overflow-hidden border-b border-white/5">
            <ImageWithFallback
              src={eventImg}
              alt="Live Muse Event"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <span className="px-6 py-2 md:px-8 md:py-3 gold-bg text-black font-sans font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] shadow-2xl">
                Galentine's Edition
              </span>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full p-8 md:p-16 lg:p-24 bg-gradient-to-b from-[#0c0e0c] to-black">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              
              {/* Main Info */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-6 text-gold mb-8 md:mb-12">
                  <Calendar size={20} strokeWidth={1} />
                  <span className="font-sans tracking-[0.5em] uppercase text-[11px] font-bold">February 12, 2026</span>
                </div>

                <h3 className="text-4xl md:text-6xl font-[family-name:var(--font-brand)] text-white mb-8 md:mb-12 leading-tight">
                  Paint & Sip: <br />
                  <span className="gold-text">The Live Muse</span>
                </h3>

                <div className="text-white/60 font-sans font-light tracking-wide text-lg md:text-xl leading-relaxed mb-0 max-w-2xl whitespace-pre-line">
                  Still need a Galentine’s plan?
                  We’re bringing something a little different to your girls’ night 💋
                  Join us for a Paint & Sip with a live muse at ADEZ Steakhouse & Lounge.
                  Good drinks, good company, and a creative experience you won’t forget.
                </div>
              </div>

              {/* Logistics & CTA */}
              <div className="lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-16 lg:pt-0 lg:pl-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12 mb-16">
                  <div className="space-y-8">
                    <div className="flex items-center gap-5 text-white/50">
                      <Clock size={20} className="text-gold/60" strokeWidth={1} />
                      <span className="text-[11px] md:text-[12px] tracking-[0.3em] uppercase font-bold">6:00 PM — 8:30 PM</span>
                    </div>
                    <div className="flex items-start gap-5 text-white/50">
                      <MapPin size={20} className="text-gold/60 shrink-0" strokeWidth={1} />
                      <span className="text-[11px] md:text-[12px] tracking-[0.3em] uppercase font-bold leading-relaxed">ADEZ Steakhouse & Lounge <br />829 Kapahulu Ave</span>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="flex items-center gap-5 text-white/50">
                      <Palette size={20} className="text-gold/60" strokeWidth={1} />
                      <span className="text-[11px] md:text-[12px] tracking-[0.3em] uppercase font-bold">Supplies Included</span>
                    </div>
                    <div className="flex items-center gap-5 text-white/50">
                      <Wine size={20} className="text-gold/60" strokeWidth={1} />
                      <span className="text-[11px] md:text-[12px] tracking-[0.3em] uppercase font-bold">Signature Shot Inc.</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-10 lg:gap-12 mt-auto">
                  {/* TODO: Update href with actual ticket platform URL (Eventbrite, Square, etc.) */}
                  <a 
                    href="#booking" 
                    className="w-full sm:w-auto px-12 py-6 gold-bg text-black font-sans font-bold tracking-[0.4em] uppercase text-[11px] hover:bg-white transition-all duration-700 shadow-2xl text-center"
                  >
                    Secure Tickets
                  </a>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-white font-[family-name:var(--font-brand)] text-4xl">$75</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-bold">+ Tax</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

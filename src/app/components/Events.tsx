import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Calendar, Clock, MapPin, Palette, Users } from 'lucide-react';
import eventImg from '@/assets/32356dd8729dd17dc51d0886b1fd856b55ceec72.png';

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
          <div className="w-full relative aspect-[3/4] md:aspect-video lg:aspect-[2.35/1] overflow-hidden border-b border-white/5 bg-[#8b7355]">
            <ImageWithFallback
              src={eventImg}
              alt="Live Muse Event"
              className="w-full h-full object-contain group-hover:scale-105 transition-all duration-[2s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
              <span className="px-6 py-2 md:px-8 md:py-3 gold-bg text-black font-sans font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px] shadow-2xl">
                Artisan Series
              </span>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full p-8 md:p-16 lg:p-24 bg-gradient-to-b from-[#0c0e0c] to-black">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              
              {/* Main Info */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-6 text-gold mb-6 md:mb-8">
                  <Calendar size={20} strokeWidth={1} />
                  <span className="font-sans tracking-[0.5em] uppercase text-[11px] font-bold">March 26, 2026</span>
                </div>

                <p className="text-gold/70 font-sans tracking-[0.3em] uppercase text-[10px] font-bold mb-4">
                  A Timeless European Art Tradition
                </p>

                <h3 className="text-4xl md:text-6xl font-[family-name:var(--font-brand)] text-white mb-8 md:mb-10 leading-tight">
                  Paint & Sip: <br />
                  <span className="gold-text">The Live Muse</span>
                </h3>

                <div className="text-white/60 font-sans font-light tracking-wide text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                  Step into the world of classical figure drawing—a centuries-old European tradition where art meets elegance. This intimate evening invites you to channel your inner artist while capturing the beauty of the human form, guided by a live host and inspired by professional models.
                  <br /><br />
                  Whether you're a seasoned painter or picking up a brush for the first time, this experience blends creativity, sophistication, and a touch of daring. With all supplies provided and a complimentary "Put your mind ADEZ" shot to set the mood, it's an unforgettable night of artistry and celebration.
                </div>

                <p className="text-white/30 font-sans text-xs italic tracking-wide">
                  *This is a tasteful figure study experience. No full nudity.
                </p>
              </div>

              {/* Logistics & CTA */}
              <div className="lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-16 lg:pt-0 lg:pl-16">
                <div className="mb-12">
                  <span className="text-gold/60 font-sans tracking-[0.3em] uppercase text-[9px] font-bold block mb-6">
                    Experience Includes
                  </span>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4 text-white/50">
                      <span className="text-gold mt-1 text-xs">•</span>
                      <span className="text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-bold">All Painting Supplies</span>
                    </li>
                    <li className="flex items-start gap-4 text-white/50">
                      <span className="text-gold mt-1 text-xs">•</span>
                      <span className="text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-bold">"Put your mind ADEZ" Shot</span>
                    </li>
                    <li className="flex items-start gap-4 text-white/50">
                      <span className="text-gold mt-1 text-xs">•</span>
                      <span className="text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-bold">Live Models</span>
                    </li>
                    <li className="flex items-start gap-4 text-white/50">
                      <span className="text-gold mt-1 text-xs">•</span>
                      <span className="text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-bold">Guided by a Live Host</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-10 mb-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-5 text-white/50">
                      <Clock size={20} className="text-gold/60" strokeWidth={1} />
                      <span className="text-[11px] md:text-[12px] tracking-[0.3em] uppercase font-bold">6:00 PM — 8:30 PM</span>
                    </div>
                    <div className="flex items-start gap-5 text-white/50">
                      <MapPin size={20} className="text-gold/60 shrink-0" strokeWidth={1} />
                      <span className="text-[11px] md:text-[12px] tracking-[0.3em] uppercase font-bold leading-relaxed">ADEZ Steakhouse & Lounge <br />829 Kapahulu Ave</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-10 lg:gap-12 mt-auto">
                  <a 
                    href="https://buy.stripe.com/9B64gA6UJ4Bo6yDfRx2kw01" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-12 py-6 gold-bg text-black font-sans font-bold tracking-[0.4em] uppercase text-[11px] hover:bg-white transition-all duration-700 shadow-2xl text-center"
                  >
                    Secure Tickets
                  </a>
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-white font-[family-name:var(--font-brand)] text-4xl">$50</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-bold">Per Person</span>
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
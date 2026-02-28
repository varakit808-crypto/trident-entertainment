import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Calendar, Clock, MapPin, Palette, Wine, Users, Sparkles, Instagram } from 'lucide-react';
import paintSipDesktop from '@/assets/paint-sip-desktop.webp';
import paintSipMobile from '@/assets/paint-sip-mobile.webp';
import logoFull from '@/assets/98daeb5f8ba5f422c354af24a0796256deaa44f5.png';

export const PaintSipLanding = () => {
  return (
    <main className="bg-[#0c0e0c] min-h-screen">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 px-8 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="group">
            <ImageWithFallback
              src={logoFull}
              alt="Trident Entertainment"
              className="h-12 w-auto transition-all duration-500 brightness-0 invert opacity-90 group-hover:opacity-100"
              style={{ filter: 'sepia(100%) saturate(300%) hue-rotate(5deg) brightness(90%)' }}
            />
          </a>
          <a
            href="https://buy.stripe.com/9B64gA6UJ4Bo6yDfRx2kw01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 gold-bg text-black font-sans font-bold tracking-[0.3em] uppercase text-[9px] hover:bg-white transition-all duration-500"
          >
            Get Tickets
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0c0e0c]">
          {/* Mobile/Tablet Image */}
          <ImageWithFallback
            src={paintSipMobile}
            alt="Paint & Sip: The Live Muse"
            className="md:hidden w-full h-full object-cover object-top"
          />
          {/* Desktop Image */}
          <ImageWithFallback
            src={paintSipDesktop}
            alt="Paint & Sip: The Live Muse"
            className="hidden md:block w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        </div>

        <div className="container mx-auto px-8 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="inline-block px-6 py-2 gold-bg text-black font-sans font-bold tracking-[0.4em] uppercase text-[10px] mb-8">
                Artisan Series
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="text-gold/80 font-sans tracking-[0.4em] uppercase text-[11px] font-bold mb-6"
            >
              A Timeless European Art Tradition
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-[family-name:var(--font-brand)] text-white leading-[1.1] mb-8"
            >
              Paint & Sip:<br />
              <span className="gold-text">The Live Muse</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-8 mb-12 text-white/70"
            >
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-gold" strokeWidth={1.5} />
                <span className="font-sans tracking-[0.3em] uppercase text-[11px] font-bold">March 26, 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-gold" strokeWidth={1.5} />
                <span className="font-sans tracking-[0.3em] uppercase text-[11px] font-bold">6:00 PM – 8:30 PM</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <a
                href="https://buy.stripe.com/9B64gA6UJ4Bo6yDfRx2kw01"
                target="_blank"
                rel="noopener noreferrer"
                className="px-16 py-6 gold-bg text-black font-sans font-bold tracking-[0.4em] uppercase text-[12px] hover:bg-white transition-all duration-500 shadow-2xl"
              >
                Secure Your Spot – $50
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-8 text-white/40 font-sans text-xs tracking-wide"
            >
              Limited spots available • 21+ Only
            </motion.p>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* About the Experience */}
      <section className="py-32 bg-black relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="text-gold font-sans tracking-[0.6em] uppercase text-[10px] mb-6 block font-bold">
                The Experience
              </span>
              <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-brand)] text-white leading-tight mb-10">
                Where Art Meets <span className="gold-text">Elegance</span>
              </h2>
              <p className="text-white/60 font-sans font-light tracking-wide text-lg leading-relaxed max-w-3xl mx-auto">
                Step into the world of classical figure drawing—a centuries-old European tradition where art meets elegance. This intimate evening invites you to channel your inner artist while capturing the beauty of the human form, guided by a live host and inspired by professional models.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-white/50 font-sans font-light tracking-wide text-base leading-relaxed max-w-3xl mx-auto">
                Whether you're a seasoned painter or picking up a brush for the first time, this experience blends creativity, sophistication, and a touch of daring. With all supplies provided and a complimentary "Put your mind ADEZ" shot to set the mood, it's an unforgettable night of artistry and celebration.
              </p>
              <p className="mt-8 text-white/30 font-sans text-sm italic tracking-wide">
                *This is a tasteful figure study experience. No full nudity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-32 bg-[#0c0e0c] border-y border-white/5">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-gold font-sans tracking-[0.6em] uppercase text-[10px] mb-6 block font-bold">
              Your Ticket Includes
            </span>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-brand)] text-white leading-tight">
              Everything You <span className="gold-text">Need</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Palette size={32} strokeWidth={1} />, title: "All Painting Supplies", desc: "Canvas, brushes, paints & easel" },
              { icon: <Wine size={32} strokeWidth={1} />, title: '"Put Your Mind ADEZ" Shot', desc: "Complimentary signature cocktail" },
              { icon: <Users size={32} strokeWidth={1} />, title: "Live Professional Models", desc: "Inspiring the artistic experience" },
              { icon: <Sparkles size={32} strokeWidth={1} />, title: "Guided by a Live Host", desc: "Step-by-step artistic guidance" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-500"
              >
                <div className="text-gold mb-6 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-white font-sans tracking-[0.2em] uppercase text-[11px] font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/40 font-sans text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue & Details */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-gold font-sans tracking-[0.6em] uppercase text-[10px] mb-6 block font-bold">
                The Venue
              </span>
              <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-brand)] text-white leading-tight mb-6">
                ADEZ Steakhouse <span className="gold-text">& Lounge</span>
              </h2>
              <p className="text-white/50 font-sans tracking-wide">
                829 Kapahulu Ave, Honolulu, HI
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="text-center p-8 border border-white/10">
                <Calendar size={28} className="text-gold mx-auto mb-4" strokeWidth={1} />
                <p className="text-white font-sans tracking-[0.3em] uppercase text-[12px] font-bold mb-2">Date</p>
                <p className="text-white/60 font-sans">March 26, 2026</p>
              </div>
              <div className="text-center p-8 border border-white/10">
                <Clock size={28} className="text-gold mx-auto mb-4" strokeWidth={1} />
                <p className="text-white font-sans tracking-[0.3em] uppercase text-[12px] font-bold mb-2">Time</p>
                <p className="text-white/60 font-sans">6:00 PM – 8:30 PM</p>
              </div>
              <div className="text-center p-8 border border-white/10">
                <MapPin size={28} className="text-gold mx-auto mb-4" strokeWidth={1} />
                <p className="text-white font-sans tracking-[0.3em] uppercase text-[12px] font-bold mb-2">Location</p>
                <p className="text-white/60 font-sans">Kapahulu, Honolulu</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#0c0e0c] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.1)_0%,transparent_70%)]" />
        
        <div className="container mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-brand)] text-white leading-tight mb-8">
              Ready to Create<br /><span className="gold-text">Something Beautiful?</span>
            </h2>
            <p className="text-white/50 font-sans tracking-wide mb-12 max-w-xl mx-auto">
              Join us for an unforgettable evening of artistry, elegance, and celebration. Limited spots available.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://buy.stripe.com/9B64gA6UJ4Bo6yDfRx2kw01"
                target="_blank"
                rel="noopener noreferrer"
                className="px-20 py-6 gold-bg text-black font-sans font-bold tracking-[0.4em] uppercase text-[12px] hover:bg-white transition-all duration-500 shadow-2xl"
              >
                Get Your Ticket – $50
              </a>
              <p className="text-white/30 font-sans text-xs tracking-wide">
                21+ Only • No Refunds Within 7 Days of Event
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/5">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <ImageWithFallback
                src={logoFull}
                alt="Trident Entertainment"
                className="h-10 w-auto brightness-0 invert opacity-60"
                style={{ filter: 'sepia(100%) saturate(300%) hue-rotate(5deg) brightness(90%)' }}
              />
              <span className="text-white/30 font-sans text-xs tracking-wide">
                © 2026 Trident Entertainment
              </span>
            </div>
            <div className="flex items-center gap-8">
              <a 
                href="https://www.instagram.com/trident.entertainment_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://trident-entertainment.com" 
                className="text-white/40 hover:text-gold transition-colors font-sans text-xs tracking-wide"
              >
                trident-entertainment.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

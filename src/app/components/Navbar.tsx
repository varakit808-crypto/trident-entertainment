import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import logoFull from '@/assets/98daeb5f8ba5f422c354af24a0796256deaa44f5.png';

const navLinks = [
  { name: 'Philosophy', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Safety', href: '#safety' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-8 py-6 ${
          isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <a href="#" className="relative z-[60] group">
            <ImageWithFallback
              src={logoFull}
              alt="Trident Entertainment"
              className="h-16 w-auto transition-all duration-500 brightness-0 invert opacity-90 group-hover:opacity-100"
              style={{ filter: 'sepia(100%) saturate(300%) hue-rotate(5deg) brightness(90%)' }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-16">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-[10px] font-sans tracking-[0.5em] text-white/50 hover:text-gold uppercase transition-all duration-500 font-bold relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#booking"
            className="hidden md:block px-10 py-4 border border-gold/40 text-gold font-sans font-bold tracking-[0.3em] uppercase text-[9px] hover:bg-gold hover:text-black transition-all duration-700"
          >
            Inquire
          </a>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-gold relative z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-10"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-[family-name:var(--font-brand)] text-white/90 hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#booking"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-16 py-6 gold-bg text-black font-sans font-bold tracking-[0.4em] uppercase text-xs"
              >
                Reserve Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

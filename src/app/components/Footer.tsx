import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import logoVertical from '@/assets/98daeb5f8ba5f422c354af24a0796256deaa44f5.png';

export const Footer = () => {
  return (
    <footer className="bg-brand-green pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="mb-10">
              <ImageWithFallback
                src={logoVertical}
                alt="Trident Entertainment"
                className="h-32 w-auto object-contain brightness-0 invert opacity-90"
                style={{ filter: 'sepia(100%) saturate(300%) hue-rotate(5deg) brightness(90%)' }}
              />
            </div>
            <p className="text-white/40 font-sans max-w-sm mb-10 leading-relaxed tracking-wide text-sm">
              Elevating male performance to a standard of luxury and sophistication in the heart of Oahu. Professional, respectful, and undeniably sultry. 21+ only.
            </p>
            <div className="flex gap-8">
              <a href="https://instagram.com/trident.entertainment" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors"><Instagram size={22} /></a>
              <a href="https://facebook.com/tridentent" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold transition-colors"><Facebook size={22} /></a>
              <a href="mailto:tridententertainment3@gmail.com" className="text-white/60 hover:text-gold transition-colors"><Mail size={22} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-[family-name:var(--font-brand)] text-2xl mb-8">Navigation</h4>
            <ul className="space-y-5 text-xs font-sans tracking-[0.2em] text-white/40 uppercase font-medium">
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#events" className="hover:text-gold transition-colors">Events</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#safety" className="hover:text-gold transition-colors">Safety</a></li>
              <li><a href="#booking" className="hover:text-gold transition-colors">Booking</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-[family-name:var(--font-brand)] text-2xl mb-8">Concierge</h4>
            <ul className="space-y-5 text-xs font-sans tracking-[0.1em] text-white/40 font-medium">
              <li>
                <a href="tel:+18086340013" className="flex items-center gap-4 hover:text-gold transition-colors">
                  <Phone size={16} className="text-gold" />
                  808-634-0013
                </a>
              </li>
              <li>
                <a href="mailto:tridententertainment3@gmail.com" className="flex items-center gap-4 hover:text-gold transition-colors">
                  <Mail size={16} className="text-gold" />
                  tridententertainment3@gmail.com
                </a>
              </li>
              <li className="mt-10 text-[10px] tracking-[0.4em] uppercase text-gold font-bold">
                Honolulu, Oahu
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] text-white/20 font-sans tracking-[0.4em] uppercase font-bold">
            © 2026 Trident Entertainment. 21+ Strictly Enforced.
          </p>
          <div className="flex gap-10 text-[10px] text-white/20 font-sans tracking-[0.4em] uppercase font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

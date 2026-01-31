import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, UserCheck, Lock, HeartHandshake } from 'lucide-react';

const safetyPoints = [
  {
    title: "Vetted Professionals",
    description: "Every performer undergoes a rigorous screening process, background check, and professional training to ensure they meet our elite standards of conduct.",
    icon: <UserCheck className="w-6 h-6" />
  },
  {
    title: "Clear Boundaries",
    description: "We maintain a strict code of ethics and professional boundaries. Our services are centered on performance, hospitality, and entertainment.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Client Privacy",
    description: "Discretion is our hallmark. We respect the privacy of our clients and their guests, with strict non-disclosure policies regarding all private events.",
    icon: <Lock className="w-6 h-6" />
  },
  {
    title: "Mutual Respect",
    description: "We foster an environment of mutual respect between clients and performers. Safe, consensual, and celebratory atmospheres are non-negotiable.",
    icon: <HeartHandshake className="w-6 h-6" />
  }
];

export const Safety = () => {
  return (
    <section id="safety" className="py-32 bg-[#0c0e0c] border-y border-white/5">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="md:w-1/2">
            <span className="text-gold font-sans tracking-[0.6em] uppercase text-[10px] mb-8 block font-bold">
              Our Commitment
            </span>
            <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-brand)] text-white mb-10 leading-tight">
              Safety & <br />
              <span className="gold-text">Discretion</span>
            </h2>
            <p className="text-white/60 font-sans font-light tracking-wide text-lg leading-relaxed mb-12 max-w-xl">
              At Trident Entertainment, the safety of our clients and our performers is our highest priority. We operate with a standard of professionalism that ensures every event is secure, respectful, and sophisticated.
            </p>
            <div className="flex items-center gap-6 p-8 border border-gold/20 bg-brand-green/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center text-gold">
                <ShieldCheck />
              </div>
              <p className="text-[11px] text-gold font-sans tracking-[0.2em] uppercase font-bold leading-loose">
                Fully Insured & Professionally Managed
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {safetyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
              >
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                  {point.icon}
                </div>
                <h3 className="text-white font-[family-name:var(--font-brand)] text-2xl mb-4">{point.title}</h3>
                <p className="text-white/40 font-sans font-light text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

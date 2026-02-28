import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Sparkles, Bus, Palette, Wine } from 'lucide-react';
import liveMuseImg from '@/assets/f8c372e23dd4636b04f46aa2ca97f6ac49e2b2ba.png';
import curatorImg from '@/assets/f888b9b40ae2c4ed120051c707ae14078cb728a4.png';
import signatureImg from '@/assets/c968b3dd012baf045617658360e780883a246785.png';
import partyBusImg from '@/assets/03dd84f0701c849adb7c44c11b56fab526c0d7df.png';
import dinnerDanceImg from '@/assets/57d87527c52c27f0b2fdeff5686a027ab24a1c0f.png';

const services = [
  {
    title: "Classic Private Performance",
    subtitle: "Intimate Celebration",
    description: "An intimate, high-impact performance brought directly to your private space. Two Trident performers deliver a curated, one-hour experience designed to captivate and celebrate.",
    includes: [
      "2 professional Trident performers",
      "1-hour private performance experience",
      "Hosted at your hotel room or approved private venue"
    ],
    pricing: "Starting at $400",
    icon: <Sparkles strokeWidth={1} />,
    image: signatureImg,
  },
  {
    title: "Party Bus Experience",
    subtitle: "Mobile Celebration",
    description: "Turn the ride into the main event. Two Trident performers deliver full party-host energy, transforming your Oahu Party Bus into a moving celebration from start to finish.",
    includes: [
      "Oahu Party Bus rental for up to 2 hours",
      "2 Trident performers",
      "High-energy, interactive performance"
    ],
    pricing: "Starting at $1,000",
    icon: <Bus strokeWidth={1} />,
    image: partyBusImg,
  },
  {
    title: "Paint & Sip: Live Muse",
    subtitle: "Creative Experience",
    description: "A sensual and creative twist on girls' night. Guided by a live host and featuring a professional model, this immersive paint experience blends artistry, laughter, and daring energy.",
    includes: [
      "All painting supplies included for 20 guests",
      "Live model",
      "Guided by a live host"
    ],
    pricing: "Starting at $1,250",
    icon: <Palette strokeWidth={1} />,
    image: liveMuseImg,
  },
  {
    title: "Dinner + Dance Premium",
    subtitle: "Elevated Evening",
    description: "An elevated evening of indulgence and performance. Enjoy a curated ADEZ set-course dinner in a private lounge, followed by a refined, high-energy Trident performance—fully hosted and coordinated.",
    includes: [
      "ADEZ Steakhouse & Lounge set-course dinner",
      "Private upstairs lounge with dedicated service staff",
      "2 Trident performers",
      "1-hour curated performance experience"
    ],
    pricing: "$200 per person • Minimum 10 guests",
    icon: <Wine strokeWidth={1} />,
    image: dinnerDanceImg,
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="max-w-2xl">
            <span className="text-gold font-sans tracking-[0.6em] uppercase text-[10px] mb-8 block font-bold">
              Collections
            </span>
            <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-brand)] text-white leading-tight">
              Bespoke <span className="gold-text">Services</span>
            </h2>
          </div>
          <p className="text-white/40 font-sans tracking-widest text-[10px] uppercase font-bold max-w-xs leading-loose">
            Every experience is uniquely curated to elevate your private celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[16/11] overflow-hidden mb-10">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Icon Float */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-gold group-hover:gold-bg group-hover:text-black transition-all duration-700">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>

                {/* Title Overlay - Always Visible */}
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="text-gold font-sans tracking-[0.4em] uppercase text-[9px] font-bold block mb-2">
                    {service.subtitle}
                  </span>
                  <h3 className="text-3xl font-[family-name:var(--font-brand)] text-white">{service.title}</h3>
                </div>
              </div>

              <div className="px-4">
                <p className="text-white/50 font-sans font-light tracking-wide text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Includes */}
                <div className="mb-6">
                  <span className="text-gold/60 font-sans tracking-[0.3em] uppercase text-[8px] font-bold block mb-3">
                    Includes
                  </span>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="text-white/40 font-sans text-xs tracking-wide flex items-start gap-3">
                        <span className="text-gold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-8 pb-8 border-b border-white/5">
                  <span className="text-white font-sans tracking-[0.2em] uppercase text-xs font-bold">
                    {service.pricing}
                  </span>
                </div>

                <a
                  href="#booking"
                  className="inline-flex items-center gap-4 text-white/80 font-sans tracking-[0.3em] uppercase text-[9px] font-bold group/btn"
                >
                  <span className="border-b border-white/20 group-hover/btn:border-gold transition-colors pb-1">Begin Inquiry</span>
                  <div className="w-8 h-[1px] bg-gold origin-left scale-x-50 group-hover/btn:scale-x-100 transition-transform duration-500" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
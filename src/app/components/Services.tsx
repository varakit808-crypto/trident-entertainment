import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Palette, Beer, PartyPopper } from 'lucide-react';
import liveMuseImg from '@/assets/f8c372e23dd4636b04f46aa2ca97f6ac49e2b2ba.png';
import curatorImg from '@/assets/f888b9b40ae2c4ed120051c707ae14078cb728a4.png';
import signatureImg from '@/assets/c968b3dd012baf045617658360e780883a246785.png';

const services = [
  {
    title: "The Live Muse",
    subtitle: "Artistic Paint & Sip",
    description: "An evening of creative elevation. Our performers serve as artistic inspiration for your private painting session, bringing grace and presence to the canvas.",
    icon: <Palette strokeWidth={1} />,
    image: liveMuseImg,
  },
  {
    title: "The Curator",
    subtitle: "Professional Mixology",
    description: "Impeccable hospitality delivered with a sultry, shirtless aesthetic. Our curators ensure your guests are attended to with elite service and charismatic flair.",
    icon: <Beer strokeWidth={1} />,
    image: curatorImg,
  },
  {
    title: "The Signature",
    subtitle: "Private Celebrations",
    description: "Bachelorette parties and birthday celebrations redefined. Tailored performances and hosting that prioritize sophistication and unforgettable memories.",
    icon: <PartyPopper strokeWidth={1} />,
    image: signatureImg,
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
            Every inquiry is uniquely curated to the specific atmosphere of your private event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-10">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#0c0e0c]/40 group-hover:bg-transparent transition-colors duration-1000" />
                
                {/* Icon Float */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-gold group-hover:gold-bg group-hover:text-black transition-all duration-700">
                  {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
                </div>

                <div className="absolute bottom-10 left-10 right-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <span className="text-gold font-sans tracking-[0.4em] uppercase text-[9px] font-bold block mb-2">
                    {service.subtitle}
                  </span>
                  <h3 className="text-3xl font-[family-name:var(--font-brand)] text-white">{service.title}</h3>
                </div>
              </div>

              <div className="px-4">
                <p className="text-white/50 font-sans font-light tracking-wide text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
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

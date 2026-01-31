import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

// Brand Photography
import galleryImg1 from '@/assets/65dd21d55150704a1c2ff81f1fcf6aa783c1729e.png';
import galleryImg2 from '@/assets/ebc847447a990fe7810c9e41ca3bf4a4bd913f73.png';
import galleryImg3 from '@/assets/30a4e6ab2c4ed5d9ac1bb29f9f4864622025b3b5.png';
import galleryImg4 from '@/assets/6823927e72dc392ef0355a2c32e37c6df5280b4e.png';
import galleryImg5 from '@/assets/0626a76d15e5802c2b6cf07304b12295f1c7011a.png';
import galleryImg6 from '@/assets/14763b379193e97859962eaa2144aefc450e1c39.png';

const galleryImages = [
  {
    src: galleryImg1,
    alt: "Atmospheric Presence",
    category: "Private Events"
  },
  {
    src: galleryImg2,
    alt: "The Collective",
    category: "The Performers"
  },
  {
    src: galleryImg3,
    alt: "Bespoke Celebrations",
    category: "Moments"
  },
  {
    src: galleryImg4,
    alt: "Bold Artistry",
    category: "Live Muse"
  },
  {
    src: galleryImg5,
    alt: "Royal Presence",
    category: "Elite Standard"
  },
  {
    src: galleryImg6,
    alt: "Playful Luxury",
    category: "Private Events"
  }
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-40 bg-[#0c0e0c] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <span className="text-gold font-sans tracking-[0.7em] uppercase text-[11px] mb-8 block font-bold">
              Archival
            </span>
            <h2 className="text-5xl md:text-8xl font-[family-name:var(--font-brand)] text-white leading-[1.1] mb-0">
              Past <span className="gold-text">Memories</span>
            </h2>
          </div>
          <p className="text-white/40 font-sans tracking-[0.2em] text-[10px] uppercase font-bold max-w-[280px] leading-loose">
            A glimpse into the cinematic atmosphere of our previous private engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] overflow-hidden bg-black border border-white/5"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
              />
              
              {/* Refined Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-1000" />
              
              <div className="absolute bottom-10 left-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                <span className="text-gold font-sans tracking-[0.4em] uppercase text-[10px] font-bold block mb-2">
                  {image.category}
                </span>
                <p className="text-white font-[family-name:var(--font-brand)] text-2xl">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

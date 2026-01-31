import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is the typical attire for your performers?",
    answer: "Our standard attire is 'sophisticated minimalist'—usually shirtless with professionally tailored slacks or beach-appropriate formal wear, depending on the service (e.g., bartending vs. live muse). We can adapt to specific event themes upon request."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 3-4 weeks in advance for private events. For bespoke requests or larger celebrations, earlier notice ensures we can curate the perfect team for your atmosphere."
  },
  {
    question: "Do you provide the alcohol for bartending services?",
    answer: "No, we provide the 'Curators' (the staff) and their professional equipment. Clients are responsible for providing the alcohol and mixers, which allows you to select your preferred labels and quantities."
  },
  {
    question: "What locations on Oahu do you serve?",
    answer: "We serve the entire island of Oahu, from Honolulu and Waikiki to the North Shore and Ko Olina. Travel fees may apply for locations outside the primary Honolulu metro area."
  },
  {
    question: "Are your performers professionally trained?",
    answer: "Yes. Beyond their physical presence, our performers are trained in hospitality, professional bartending, and event etiquette to ensure they are assets to your event's flow and atmosphere."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-white/5">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-xl md:text-2xl font-[family-name:var(--font-brand)] transition-colors duration-500 ${isOpen ? 'text-gold' : 'text-white group-hover:text-gold'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${isOpen ? 'gold-bg border-gold text-black rotate-180' : 'text-white'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-white/50 font-sans font-light tracking-wide text-lg leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-[#0c0e0c]">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <span className="text-gold font-sans tracking-[0.6em] uppercase text-[10px] mb-8 block font-bold">
              Inquiries
            </span>
            <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-brand)] text-white mb-10 leading-tight">
              Common <br />
              <span className="gold-text">Questions</span>
            </h2>
            <p className="text-white/40 font-sans font-light tracking-widest text-[10px] uppercase font-bold leading-loose">
              If your question isn't answered here, please reach out via our booking form for a bespoke consultation.
            </p>
          </div>
          
          <div className="lg:w-2/3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

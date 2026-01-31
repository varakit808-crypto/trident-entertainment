import React from 'react';
import { useForm } from "react-hook-form"

type FormData = {
  name: string;
  email: string;
  type: string;
  date: string;
  message: string;
};

export const Booking = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Thank you for your inquiry. A concierge will contact you within 24 hours.");
  };

  return (
    <section id="booking" className="py-40 bg-[#0c0e0c] relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <span className="text-gold font-sans tracking-[0.4em] uppercase text-xs mb-6 block font-semibold">
            Reservation
          </span>
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-brand)] text-white leading-tight">
            Book the <span className="gold-text">Experience</span>
          </h2>
          <p className="mt-8 text-white/50 font-sans max-w-2xl mx-auto tracking-wide leading-relaxed">
            Our concierge team specializes in tailoring our services to your specific celebration. Please provide details regarding your event on Oahu.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-16">
          <div className="bg-white/[0.02] border border-white/5 p-10 md:p-20 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] font-sans tracking-[0.3em] text-gold/60 uppercase font-bold">Full Name</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-colors font-sans placeholder:text-white/10"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-sans tracking-[0.3em] text-gold/60 uppercase font-bold">Email Address</label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-colors font-sans placeholder:text-white/10"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-sans tracking-[0.3em] text-gold/60 uppercase font-bold">Service Category</label>
                <select
                  {...register("type", { required: true })}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white/70 focus:outline-none focus:border-gold transition-colors font-sans appearance-none cursor-pointer"
                >
                  <option className="bg-[#202717]" value="">Select Service</option>
                  <option className="bg-[#202717]" value="muse">The Live Muse (Paint & Sip)</option>
                  <option className="bg-[#202717]" value="curator">The Curator (Mixology)</option>
                  <option className="bg-[#202717]" value="signature">The Signature (Private Event)</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-sans tracking-[0.3em] text-gold/60 uppercase font-bold">Preferred Date</label>
                <input
                  {...register("date")}
                  type="date"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white/70 focus:outline-none focus:border-gold transition-colors font-sans"
                />
              </div>
            </div>

            <div className="mt-10 space-y-3">
              <label className="text-[10px] font-sans tracking-[0.3em] text-gold/60 uppercase font-bold">Event Details & Requests</label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold transition-colors font-sans resize-none placeholder:text-white/10"
                placeholder="Share your vision for the event..."
              />
            </div>

            <div className="mt-20 text-center">
              <button
                type="submit"
                className="px-20 py-5 gold-bg text-[#14361d] font-sans font-bold tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 rounded-sm shadow-2xl"
              >
                Submit Inquiry
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

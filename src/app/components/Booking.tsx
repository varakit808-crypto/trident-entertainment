import React, { useState } from 'react';
import { useForm } from "react-hook-form"

type FormData = {
  name: string;
  email: string;
  type: string;
  date: string;
  message: string;
};

export const Booking = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send inquiry');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                  <option className="bg-[#202717]" value="classic">Classic Private Performance</option>
                  <option className="bg-[#202717]" value="partybus">Party Bus Experience</option>
                  <option className="bg-[#202717]" value="paintsip">Paint & Sip: Live Muse</option>
                  <option className="bg-[#202717]" value="dinnerdance">Dinner + Dance Premium</option>
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
              {submitStatus === 'success' && (
                <div className="mb-8 p-6 bg-green-900/20 border border-green-500/30 text-green-400 font-sans tracking-wide">
                  Thank you for your inquiry. A concierge will contact you within 24 hours.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-8 p-6 bg-red-900/20 border border-red-500/30 text-red-400 font-sans tracking-wide">
                  There was an error submitting your inquiry. Please try again or email us directly at tridententertainment3@gmail.com
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-20 py-5 gold-bg text-[#14361d] font-sans font-bold tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 rounded-sm shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
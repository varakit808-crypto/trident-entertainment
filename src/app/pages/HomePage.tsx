import React from 'react';
import { Hero } from '@/app/components/Hero';
import { Navbar } from '@/app/components/Navbar';
import { About } from '@/app/components/About';
import { Services } from '@/app/components/Services';
import { Gallery } from '@/app/components/Gallery';
import { Events } from '@/app/components/Events';
import { Booking } from '@/app/components/Booking';
import { Safety } from '@/app/components/Safety';
import { FAQ } from '@/app/components/FAQ';
import { Legal } from '@/app/components/Legal';
import { Footer } from '@/app/components/Footer';

export const HomePage = () => {
  return (
    <main className="bg-[#0c0e0c] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Services />
      <Gallery />
      <Safety />
      <Booking />
      <FAQ />
      <Legal />
      <Footer />
    </main>
  );
};

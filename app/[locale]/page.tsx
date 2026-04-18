'use client';

import { useTranslations } from 'next-intl';
import Hero from '../../components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Value from '@/components/Value';
import CTA from '@/components/CTA';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <main>
      <Hero/>
      <About/>
      <Value/>
      <CTA/>
      <Footer/>
    </main>
  );
}
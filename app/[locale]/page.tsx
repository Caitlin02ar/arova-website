'use client';

import { useTranslations } from 'next-intl';
import Hero from '../../components/Hero';
import About from '@/components/About';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <main>
      <Hero/>
      <About/>
    </main>
  );
}
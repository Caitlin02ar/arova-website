"use client";

import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('About');

    return (
        <section className="py-24 bg-[var(--color-cream-1)] overflow-hidden">
        
        <div className="grid grid-cols-10 items-center">
            
            <div className="col-span-4 flex justify-center items-center">
                <div className="max-w-md text-left">
                    <h2 className="font-heading text-2xl mb-4 font-[500]">
                    {t('title')}
                    </h2>

                    <p className="text-md w-xs leading-relaxed">
                    {t('description')}
                    </p>
                </div>
            </div>
            <div className="col-span-6">
                <div className="w-full aspect-video">
                    <img
                    src="/photos/about.jpg"
                    alt="About Arova"
                    className="w-full h-[500px] object-cover"
                    />
                </div>
            </div>
        </div>
        </section>
    );
}
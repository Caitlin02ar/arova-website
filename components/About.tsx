"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function About() {
    const t = useTranslations('About');

    return (
        <section id='about' className="bg-[var(--color-cream-1)] overflow-hidden">

            {/* Mobile: gambar atas, teks bawah */}
            <div className="flex flex-col md:hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true, amount: 0.15 }}
                    className="w-full overflow-hidden will-change-transform">
                    <img
                        src="/photos/about.jpg"
                        alt="About Arova"
                        className="w-full h-[280px] object-cover"
                        loading="eager"
                    />
                </motion.div>
                <div className="px-8 py-12">
                    <div className="overflow-hidden">
                        <motion.h2
                            className="font-heading text-xl mb-4 font-[500]"
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: "0%", opacity: 1 }}
                            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                            viewport={{ once: true, amount: 0.15 }}
                        >
                            {t('title')}
                        </motion.h2>
                    </div>
                    <p className="text-sm leading-relaxed">
                        {t('description')}
                    </p>
                </div>
            </div>

            {/* Desktop: teks kiri, gambar kanan */}
            <div className="hidden md:grid md:grid-cols-10 items-center py-24">
                <div className="col-span-4 flex justify-center items-center">
                    <div className="max-w-md text-left">
                        <div className="overflow-hidden">
                            <motion.h2
                                className="font-heading text-2xl mb-4 font-[500]"
                                initial={{ y: "100%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
                                viewport={{ once: true, amount: 0.15 }}
                            >
                                {t('title')}
                            </motion.h2>
                        </div>
                        <p className="text-md leading-relaxed">
                            {t('description')}
                        </p>
                    </div>
                </div>
                <div className="col-span-6">
                    <motion.div
                        initial={{ x: 80, opacity: 0, scale: 0.97 }}
                        whileInView={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        viewport={{ once: true, amount: 0.15 }}
                        className="w-full overflow-hidden will-change-transform"
                    >
                        <img
                            src="/photos/about.jpg"
                            alt="About Arova"
                            className="w-full h-[500px] object-cover"
                            loading="eager"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
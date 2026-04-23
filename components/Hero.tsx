'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Button from './Button';
import { motion } from 'framer-motion';

export default function Hero() {
    const t = useTranslations('Hero');
    const pathname = usePathname();
    const locale = pathname.split('/')[1];

    return (
        <section className="relative h-[100dvh] w-full flex items-end md:items-center justify-start text-white overflow-hidden bg-black">
            {/* Background zoom */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/photos/hero-bg.jpg')" }}
                    initial={{ scale: 1.06 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 text-left w-full px-8 pb-10 md:pb-0 md:px-16 max-w-2xl">
                <motion.h1
                    className="font-heading text-4xl md:text-6xl leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {t('title')}
                </motion.h1>
                <motion.p
                    className="mt-6 text-sm md:text-lg font-light max-w-sm md:max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    {t('description')}
                </motion.p>
                <motion.div
                    className="mt-6 py-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <Button href={`/${locale}/product`} variant="light">
                        {t('button')}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
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
        <motion.section
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative h-screen bg-no-repeat bg-auto bg-right md:bg-cover md:bg-center flex items-end md:items-center justify-start md:justify-center text-white"
            style={{ backgroundImage: "url('/photos/hero-bg.jpg')" }}
        >
            <div className="text-left md:text-center max-w-2xl px-6 pb-16 md:pb-0 md:px-0">
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-left md:text-center max-w-2xl">
                    <motion.h1
                        className="font-heading text-4xl md:text-6xl"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        {t('title')}
                    </motion.h1>
                    <p className="mt-6 text-sm md:text-lg font-light">
                        {t('description')}
                    </p>
                    <div className="button mt-6 py-2">
                        <Button href={`/${locale}/product`} variant="light">
                            {t('button')}
                        </Button>
                    </div>
                </div>
            </div>
        </motion.section>
    );
} 
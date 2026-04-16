'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Button from './Button';

export default function Hero() {
    const t = useTranslations('Hero');
    const pathname = usePathname();
    const locale = pathname.split('/')[1];

    return (
        <section className="h-screen bg-no-repeat bg-cover flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/photos/hero-bg.jpg')" }}>
            <div className="text-center max-w-2xl">
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center max-w-2xl">
                    <h1 className="font-heading text-6xl">
                        {t('title')}
                    </h1>
                    <p className="mt-6 text-lg font-light">
                        {t('description')}
                    </p>
                    <div className="button mt-6 py-2">
                        <Button href={`/${locale}/product`} variant="light">
                            {t('button')}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
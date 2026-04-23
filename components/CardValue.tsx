"use client";

import { useTranslations } from "next-intl";

export default function CardValue() {
    const t = useTranslations("Value");

    return (
        <section className="flex flex-row items-stretch justify-center font-heading px-4 py-12 md:p-32 w-full gap-2 md:gap-8">
            <div className="flex-1 p-6 md:p-16 flex flex-col items-center justify-center bg-[var(--color-cream-1)] gap-6 md:gap-12 hover:bg-[var(--color-mint-green)] transition-colors duration-300">
                <img src="/asset/star.svg" alt="star" className="w-8 h-8 md:w-[50px] md:h-[50px]" />
                <span className="text-center text-xs md:text-base">{t("value1")}</span>
            </div>
            <div className="flex-1 p-6 md:p-16 flex flex-col items-center justify-center bg-[var(--color-cream-1)] gap-6 md:gap-12 hover:bg-[var(--color-mint-green)] transition-colors duration-300">
                <img src="/asset/leaf.svg" alt="leaf" className="w-8 h-8 md:w-[50px] md:h-[50px]" />
                <span className="text-center text-xs md:text-base whitespace-pre-line">{t("value2")}</span>
            </div>
            <div className="flex-1 p-6 md:p-16 flex flex-col items-center justify-center bg-[var(--color-cream-1)] gap-6 md:gap-12 hover:bg-[var(--color-mint-green)] transition-colors duration-300">
                <img src="/asset/shield.svg" alt="shield" className="w-8 h-8 md:w-[50px] md:h-[50px]" />
                <span className="text-center text-xs md:text-base whitespace-pre-line">{t("value3")}</span>
            </div>
        </section>
    );
}
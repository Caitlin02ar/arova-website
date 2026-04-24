"use client";

import { useTranslations, useLocale } from "next-intl";
import Button from "./Button";

export default function CTA() {
    const t = useTranslations("CTA");
    const locale = useLocale();

    return (
        <div className="min-h-screen md:min-h-screen bg-[var(--color-mint-green)] flex flex-col items-center justify-center gap-10 md:gap-16 text-center px-8">
            <h2 className="text-4xl md:text-[4rem] whitespace-pre-line font-heading leading-tight">
                {t("text")}
            </h2>
            <Button href={`/${locale}/contact`} variant="dark">
                {t("button")}
            </Button>
        </div>
    );
}
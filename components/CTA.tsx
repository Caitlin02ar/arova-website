"use client";

import { useTranslations } from "next-intl";
import Button from "./Button";

export default function CTA(){
    const t = useTranslations("CTA");

    return(
        <div className="min-h-screen bg-[var(--color-mint-green)] flex flex-col items-center justify-center gap-16 text-center">
            <h2 className="text-[4rem] whitespace-pre-line text-heading">{t("text")}</h2>
            <Button href="#" variant="dark">
                {t("button")}
            </Button>
        </div>
    )
}
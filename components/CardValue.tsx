"use client";

import { useTranslations } from "next-intl";


export default function CardValue(){
    const t = useTranslations("Value");

    return(
        <section className="flex items-center justify-center gap-8 items-stretch font-heading p-32 w-full">
            <div className="square w-full max-w-xs p-16 flex flex-col items-center align-center bg-[var(--color-cream-1)] gap-12">
                <img src="/asset/star.svg" alt="star" width={50} height={50} />
                <span>{t("value1")}</span>
            </div>
            <div className="square w-full max-w-xs p-16 flex flex-col items-center bg-[var(--color-cream-1)] gap-12">
                <img src="/asset/leaf.svg" alt="star" width={50} height={50} />
                <span className="text-center whitespace-pre-line">{t("value2")}</span>
            </div>
            <div className="square w-full max-w-xs p-16 flex flex-col items-center bg-[var(--color-cream-1)] gap-12">
                <img src="/asset/shield.svg" alt="star" width={50} height={50} />
                <span className="text-center whitespace-pre-line">{t("value3")}</span>
            </div>
        </section>
        
        
        
    )

}
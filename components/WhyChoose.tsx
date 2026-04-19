"use client";

import { useTranslations } from "next-intl";

export default function WhyChoose(){
    const t = useTranslations("Quality");
    return(
        <main>
            <h1>{t("titleWhyChoose")}</h1>
        </main>
    )
}
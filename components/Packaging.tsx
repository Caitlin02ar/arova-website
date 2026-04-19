"use client";

import { useTranslations } from "next-intl";

export default function Packaging(){
    const t = useTranslations("Quality");
    return(
        <main>
            <h1>{t("titlePackaging")}</h1>
        </main>
    )
}
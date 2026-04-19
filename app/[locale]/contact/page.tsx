"use client";

import { useTranslations } from "next-intl";

export default function ContactPage(){
    const t = useTranslations("Contact");
    return(
        <main>
            <h1>{t("title")}</h1>
        </main>
    )
}
"use client";

import { useTranslations } from "next-intl";

export default function ClientPage(){
    const t = useTranslations("Client");

    return(
        <main>
            <h1>{t("title")}</h1>
        </main>
    )
}
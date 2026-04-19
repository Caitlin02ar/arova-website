"use client";

import { useTranslations } from "next-intl";

export default function QualityPage() {
    const t = useTranslations("Quality");
    return(
        <main>
            <h1>{t("title")}</h1>
        </main>
    )
}
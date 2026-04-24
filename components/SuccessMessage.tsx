"use client";

import { useTranslations, useLocale } from "next-intl";
import Button from "./Button";
import Footer from "./Footer";

export default function SuccessMessage(){
    const t = useTranslations("Notification");
    const locale = useLocale();

    return(
        <main className="flex flex-col">
            <section className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-mint-green)]">
               <h1 className="font-heading text-[4rem] md:text-[8rem] font-medium text-center px-4">{t("success")}</h1>
<p className="text-[1.1rem] md:text-[1.5rem] font-heading text-center px-4">{t("successMessage")}</p>
                <div className="action mt-12">
                <Button variant="dark" icon="arrow" href={`/${locale}/`}>
                    {t("button")}
                </Button>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
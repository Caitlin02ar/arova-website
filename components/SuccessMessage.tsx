"use client";

import { useTranslations } from "next-intl";
import Button from "./Button";
import Footer from "./Footer";

export default function SuccessMessage(){
    const t = useTranslations("Notification");

    return(
        <main className="flex flex-col">
            <section className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-mint-green)]">
                <h1 className="font-heading text-[8rem] font-medium">{t("success")}</h1>
                <p className="text-[1.5rem] font-heading">{t("successMessage")}</p>
                <div className="action mt-12">
                <Button variant="dark" icon="arrow" href="#">
                    {t("button")}
                </Button>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
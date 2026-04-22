"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function ContactPage() {
    const t = useTranslations("Contact");
    const tInfo = useTranslations("ContactInformation");

    return (
        <main className="bg-[var(--color-cream-1)] text-[var(--color-dark-green)]">
        <div className="flex items-stretch">
            <div className="hidden md:block w-[40%] relative">
            <Image
                src="/photos/contact-page.jpg"
                alt="Patchouli product"
                fill
                className="object-cover object-center"
                priority/>
            </div>
            <div className="w-full md:w-[60%] flex flex-col">

            {/* Section 1: Contact Form — lime green */}
            <section className="min-h-screen bg-[var(--color-mint-green)] px-10 md:px-16 py-24 flex flex-col justify-center mt-12">
                <h1 className="font-heading text-2xl md:text-3xl font-semibold mb-10">
                {t("title") || "Contact Us"}
                </h1>

                <form className="flex flex-col gap-7">
                <input
                    type="text"
                    placeholder={t("companyName")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)] text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />
                <input
                    type="text"
                    placeholder={t("contactPerson")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)]  text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />
                <input
                    type="text"
                    placeholder={t("email/Phone")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)] text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />
                <input
                    type="text"
                    placeholder={t("wechat")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)] text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />
                <input
                    type="text"
                    placeholder={t("intededMessage")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)] text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />
                <input
                    type="text"
                    placeholder={t("estimatedPurchaseQuantity")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)] text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />
                <input
                    type="text"
                    placeholder={t("message")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)] text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />

                <div className="mt-4">
                    <Button variant="green" icon="arrow" href="#">
                    Submit
                    </Button>
                </div>
                </form>
            </section>

            <section className="min-h-screen bg-[var(--color-dark-green)] text-[var(--color-cream-1)] px-10 md:px-16 py-24 flex flex-col justify-center gap-10">
                <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-semibold">
                The Office
                </h2>

                <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm tracking-wide">{tInfo("titleAddress")}</p>
                <p className="text-sm leading-relaxed whitespace-pre-line opacity-80">
                    {tInfo("address")}
                </p>
                </div>

                <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm tracking-wide">{tInfo("whatsappTitle")}</p>
                <p className="text-sm opacity-80">{tInfo("whatsapp")}</p>
                <p className="text-sm opacity-80">{tInfo("wechat")}</p>
                </div>

                <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm tracking-wide">{tInfo("emailTitle")}</p>
                <p className="text-sm opacity-80">Ben.Josiah.Mail@Gmail.Com</p>
                </div>
            </section>

            </div>
        </div>

        <Footer />
        </main>
    );
}
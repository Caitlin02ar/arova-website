"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
    const t = useTranslations("Contact");
    const tInfo = useTranslations("ContactInformation");

    const router = useRouter();
    const locale = useLocale();

    const [form, setForm] = useState({
        companyName: "",
        contactPerson: "",
        email: "",
        wechat: "",
        intendedMessage: "",
        quantity: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify({
                    name: form.contactPerson,
                    email: form.email,
                    message: `
Company: ${form.companyName}
Contact Person: ${form.contactPerson}
Email/Phone: ${form.email}
Wechat: ${form.wechat}
Intended: ${form.intendedMessage}
Quantity: ${form.quantity}

Message:
${form.message}
                    `,
                }),
            });

            const data = await res.json();

            if (data.success) {
                router.push(`/${locale}/success`);
            } else {
                alert("Failed to send");
            }
        } catch (err) {
            console.error(err);
            alert("Error occurred");
        }

        setLoading(false);
    };

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
        <div className="md:hidden w-full h-[40vh] relative">
            <Image
                src="/photos/contact-page.jpg"
                alt="Patchouli product"
                fill
                className="object-cover"
                priority/>
        </div>

            {/* Section 1: Contact Form */}
            <section id="contact-us" className="min-h-screen bg-[var(--color-mint-green)] px-10 md:px-16 py-24 flex flex-col justify-center">
                <h1 className="font-heading text-2xl md:text-3xl font-semibold mb-10">
                {t("title") || "Contact Us"}
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-7">

                <input
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("companyName")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)] text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />

                <input
                    name="contactPerson"
                    value={form.contactPerson}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("contactPerson")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)] text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />

                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("email/Phone")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)] text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />

                <input
                    name="wechat"
                    value={form.wechat}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("wechat")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)] text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />

                <input
                    name="intendedMessage"
                    value={form.intendedMessage}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("intededMessage")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)] text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />

                <input
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("estimatedPurchaseQuantity")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)] text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />

                <input
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    type="text"
                    placeholder={t("message")}
                    className="font-heading bg-transparent border-b border-[var(--color-dark-green)] text-[var(--color-dark-green)] pb-2 outline-none text-sm focus:border-b-2 transition-all"
                />

               <div className="mt-4">
                    <button 
                        type="submit"
                        disabled={loading}
                        className="group inline-flex items-center gap-2 px-5 py-2 border text-md tracking-wide transition duration-300 bg-[var(--color-lime-green)] border-[var(--color-lime-green)] text-[var(--color-dark-green)] hover:bg-[var(--color-cream-1)] hover:text-[var(--color-dark-green)] hover:border-[var(--color-cream-1)] disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Submit"}
                        <span className="transition group-hover:translate-x-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M18 8L22 12L18 16"/>
                                <path d="M2 12H22"/>
                            </svg>
                        </span>
                    </button>
                </div>
                </form>
            </section>
            <section id="office" className="min-h-screen bg-[var(--color-dark-green)] text-[var(--color-cream-1)] px-10 md:px-16 py-24 flex flex-col justify-center gap-10">
                <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl font-semibold">
                The Office
                </h2>
                <div className="flex flex-col gap-2">
                <p className="font-semibold text-md tracking-wide">{tInfo("titleAddress")}</p>
                <p className="text-md leading-relaxed whitespace-pre-line opacity-80">
                    {tInfo("address")}
                </p>
                </div>
                <div className="flex flex-col gap-2">
                <p className="font-semibold text-md tracking-wide">{tInfo("whatsappTitle")}</p>
                <a 
                    href={`https://wa.me/${tInfo("whatsapp").replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md opacity-80 hover:opacity-100 underline underline-offset-2"
                >
                    {tInfo("whatsapp")}
                </a>                
                <p className="text-md opacity-80">{tInfo("wechat")}</p>
                </div>

                <div className="flex flex-col gap-2">
                <p className="font-semibold text-md tracking-wide">{tInfo("emailTitle")}</p>
                <p className="text-md opacity-80">{tInfo("email")}</p>
                </div>
            </section>
            </div>
        </div>

        <Footer />
        </main>
    );
}
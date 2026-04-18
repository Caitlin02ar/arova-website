"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-[var(--color-cream-1)] text-sm">

            {/* ── DESKTOP ── */}
            <div className="hidden md:grid md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr_2fr] gap-y-6 px-12 pt-16 pb-30 text-left">
                <div>
                    <img src="/logo/Logo Arova - Black.png" alt="Arova Logo" className="h-10 w-auto" />
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-dark-green">{t("home")}</h4>
                    <Link href="/about" className="block text-[var(--color-dis)] hover:text-dark-green">{t("about")}</Link>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-dark-green">{t("ourProduct")}</h4>
                    <p className="text-[var(--color-dis)]">{t("patchouliOil")}</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-dark-green">{t("qualityProduct")}</h4>
                    <p className="text-[var(--color-dis)]">{t("integratedProduction")}</p>
                    <p className="text-[var(--color-dis)]">{t("qualityAssurance")}</p>
                    <p className="text-[var(--color-dis)]">{t("guarantee")}</p>
                    <p className="text-[var(--color-dis)]">{t("reliableExport")}</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-dark-green">{t("client")}</h4>
                    <p className="text-[var(--color-dis)]">{t("district")}</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-dark-green">{t("contact")}</h4>
                    <p className="text-[var(--color-dis)]">{t("contactUs")}</p>
                    <p className="text-[var(--color-dis)]">{t("office")}</p>
                </div>
                <div>
                    <p className="text-black whitespace-nowrap">{t("address1")}</p>
                    <p className="text-black whitespace-nowrap">{t("address2")}</p>
                    <p className="text-black whitespace-nowrap">{t("address3")}</p>
                </div>
            </div>

            {/* ── MOBILE ── */}
            <div className="md:hidden px-6 py-8">
                <div className="flex justify-between items-start gap-4">
                    <div className="flex flex-col gap-5 flex-1">
                        <div>
                            <h4 className="font-semibold mb-1 text-dark-green">{t("home")}</h4>
                            <Link href="/about" className="block text-[var(--color-dis)] hover:text-dark-green">{t("about")}</Link>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1 text-dark-green">{t("ourProduct")}</h4>
                            <p className="text-[var(--color-dis)]">{t("patchouliOil")}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1 text-dark-green">{t("qualityProduct")}</h4>
                            <p className="text-[var(--color-dis)]">{t("integratedProduction")}</p>
                            <p className="text-[var(--color-dis)]">{t("qualityAssurance")}</p>
                            <p className="text-[var(--color-dis)]">{t("guarantee")}</p>
                            <p className="text-[var(--color-dis)]">{t("reliableExport")}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1 text-dark-green">{t("client")}</h4>
                            <p className="text-[var(--color-dis)]">{t("district")}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1 text-dark-green">{t("contact")}</h4>
                            <p className="text-[var(--color-dis)]">{t("contactUs")}</p>
                            <p className="text-[var(--color-dis)]">{t("office")}</p>
                        </div>
                        <div>
                            <p className="text-black">{t("address1")}</p>
                            <p className="text-black">{t("address2")}</p>
                            <p className="text-black">{t("address3")}</p>
                        </div>
                    </div>
                    <div className="shrink-0">
                        <img src="/logo/Logo Arova - Black.png" alt="Arova Logo" className="h-10 w-auto" />
                    </div>
                </div>
            </div>

            {/* ── BOTTOM ── */}
            <div className="flex justify-between items-center bg-[var(--color-cream-2)] px-6 md:px-12 py-4 text-[1rem] font-medium text-dark-green">
                <p>{t("copyright")}</p>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-[1rem] hover:opacity-70">
                    {t("backToTop")} ↑
                </button>
            </div>
        </footer>
    );
}
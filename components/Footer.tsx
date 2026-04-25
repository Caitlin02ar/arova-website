"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
    const t = useTranslations("Footer");
    const locale = useLocale();
    const headingWeight = locale === 'cn' ? 'font-semibold' : 'font-medium';

    return (
        <footer className="bg-[var(--color-cream-1)] text-sm">
            <div className="hidden md:grid md:grid-cols-[1.5fr_1fr_1fr_1.5fr_1fr_1fr_2fr] gap-y-6 px-12 pt-16 pb-30 text-left">
                <div>
                    <Link href={`/${locale}`}>
                        <img src="/logo/Logo Arova - Black.png" alt="Arova Logo" className="h-10 w-auto" />
                    </Link>
                </div>
                <div>
                    <h4 className={`${headingWeight} mb-2 text-dark-green text-[1rem] font-heading`}>{t("home")}</h4>
                    <Link href={`/${locale}#about`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("about")}</Link>
                </div>
                <div>
                    <h4 className={`${headingWeight} mb-2 text-dark-green text-[1rem] font-heading`}>{t("ourProduct")}</h4>
                    <Link href={`/${locale}/product#product-section`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("patchouliOil")}</Link>
                </div>
                <div>
                    <h4 className={`${headingWeight} mb-2 text-dark-green text-[1rem] font-heading`}>{t("qualityProduct")}</h4>
                    <Link href={`/${locale}/quality#integrated-production`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("integratedProduction")}</Link>
                    <Link href={`/${locale}/quality#quality-assurance`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("qualityAssurance")}</Link>
                    <Link href={`/${locale}/quality#we-guarantee`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("guarantee")}</Link>
                    <Link href={`/${locale}/quality#reliable-export`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("reliableExport")}</Link>
                </div>
                <div>
                    <h4 className={`${headingWeight} mb-2 text-dark-green text-[1rem] font-heading`}>{t("client")}</h4>
                    <Link href={`/${locale}/client#client`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("district")}</Link>
                </div>
                <div>
                    <h4 className={`${headingWeight} mb-2 text-dark-green text-[1rem] font-heading`}>{t("contact")}</h4>
                    <Link href={`/${locale}/contact#contact-us`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("contactUs")}</Link>
                    <Link href={`/${locale}/contact#office`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("office")}</Link>
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
                            <h4 className={`${headingWeight} mb-1 text-dark-green`}>{t("home")}</h4>
                            <Link href="/about" className="block text-[var(--color-dis)] hover:text-dark-green">{t("about")}</Link>
                        </div>
                        <div>
                            <h4 className={`${headingWeight} mb-1 text-dark-green`}>{t("ourProduct")}</h4>
                            <Link href={`/${locale}/product#product-section`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("patchouliOil")}</Link>
                        </div>
                        <div>
                            <h4 className={`${headingWeight} mb-1 text-dark-green`}>{t("qualityProduct")}</h4>
                            <Link href={`/${locale}/quality#integrated-production`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("integratedProduction")}</Link>
                            <Link href={`/${locale}/quality#quality-assurance`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("qualityAssurance")}</Link>
                            <Link href={`/${locale}/quality#we-guarantee`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("guarantee")}</Link>
                            <Link href={`/${locale}/quality#reliable-export`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("reliableExport")}</Link>
                        </div>
                        <div>
                            <h4 className={`${headingWeight} mb-1 text-dark-green`}>{t("client")}</h4>
                            <Link href={`/${locale}/client#client`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("district")}</Link>
                        </div>
                        <div>
                            <h4 className={`${headingWeight} mb-1 text-dark-green`}>{t("contact")}</h4>
                            <Link href={`/${locale}/contact#contact-us`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("contactUs")}</Link>
                            <Link href={`/${locale}/contact#office`} className="block text-[var(--color-dis)] hover:text-dark-green font-heading">{t("office")}</Link>
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
                    className="flex items-center gap-2 text-[1rem] hover:opacity-70"
                    >
                    {t("backToTop")}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m18 15-6-6-6 6" />
                    </svg>
                </button>
            </div>
        </footer>
    );
}
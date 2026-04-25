"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SupplyCard() {
    const t = useTranslations("ProductApply");

    const images = [
        "/photos/apply-1.webp",
        "/photos/apply-2.jpg",
        "/photos/apply-3.jpg",
        "/photos/apply-4.jpg",
    ];

    const texts = [
        t("apply1"),
        t("apply2"),
        t("apply3"),
        t("apply4"),
    ];

    return (
        <section className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-center gap-3 md:gap-6 px-6 md:px-12 pt-6 pb-6">
            {images.map((src, i) => (
                <div
                    key={i}
                    className="relative w-full h-[110px] md:w-[260px] md:h-[200px] overflow-hidden rounded-sm">
                    <Image
                        src={src}
                        alt={`supply-${i}`}
                        fill
                        className="object-cover transition-transform duration-500"/>
                    {/* Mobile: gradient dari kiri | Desktop: gradient dari bawah */}
                    <div className="absolute inset-0 
                        bg-gradient-to-r from-black/70 via-black/20 to-transparent
                        md:bg-gradient-to-t md:from-black/80 md:via-black/30 md:to-transparent" />
                    <div className="absolute bottom-3 left-3 md:bottom-6 md:left-3 md:right-3
                        text-[var(--color-cream-1)] text-sm font-heading
                        text-left md:text-center
                        w-[55%] md:w-auto leading-tight">
                        {texts[i]}
                    </div>
                </div>
            ))}
        </section>
    );
}
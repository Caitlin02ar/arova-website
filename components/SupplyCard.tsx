"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SupplyCard() {
    const t = useTranslations("ProductApply");

    const images = [
        "/photos/apply-1.jpg",
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
        <section className="flex flex-wrap justify-center gap-6 p-12 pt-6">
            {images.map((src, i) => (
                <div
                    key={i}
                    className="relative w-[260px] h-[200px] overflow-hidden">
                    <Image
                        src={src}
                        alt={`supply-${i}`}
                        fill
                        className="object-cover transition-transform duration-500"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-6 left-3 right-3 text-[var(--color-cream-1)] text-sm font-heading text-center">
                        {texts[i]}
                    </div>
                </div>
            ))}
        </section>
    );
}
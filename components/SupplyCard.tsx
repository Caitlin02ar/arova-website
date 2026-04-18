"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SupplyCard() {
    const t = useTranslations("ProductSupply");

    const images = [
        "/photos/apply-1.jpg",
        "/photos/apply-2.jpg",
        "/photos/apply-3.jpg",
        "/photos/apply-4.jpg",
    ];

    return (
        <section className="card-supply flex flex-wrap justify-center gap-6 p-12 pt-6">
        {images.map((src, i) => (
            <div
            key={i}
            className="relative w-70 h-60  overflow-hidden shadow-md">
            <Image
                src={src}
                alt={`supply-${i}`}
                fill
                className="object-cover"/>
            </div>
        ))}
        </section>
    );
    }
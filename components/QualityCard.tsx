"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function QualityCard() {
    const t = useTranslations("WhyChoose");

    const images = [
        "/photos/Why Choose Arova - 1.png",
        "/photos/Why Choose Arova - 2.png",
        "/photos/Why Choose Arova - 3.jpg",
        "/photos/Why Choose Arova - 4.png",
    ];

    const points = t.raw("pointsWhyChoose") as string[];

    return (
        <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-center gap-3 md:gap-6 md:px-0">
            {images.map((src, i) => (
                <div
                    key={i}
                    className="relative w-full h-[110px] md:w-[300px] md:h-[360px] overflow-hidden shadow-md group"
                >
                    {/* Image */}
                    <Image
                        src={src}
                        alt={`why-${i}`}
                        fill
                        className="object-cover transition duration-500 scale-110"
                    />

                    {/* Gradient overlay — mobile: kiri, desktop: bawah */}
                    <div className="absolute inset-0 
                        bg-gradient-to-r from-black/70 via-black/20 to-transparent
                        md:bg-gradient-to-t md:from-black/70 md:via-black/20 md:to-transparent" />

                    {/* Text */}
                    <div className="absolute bottom-3 left-4 md:bottom-12 md:right-4 text-white text-md font-heading text-left w-[55%] md:w-auto leading-tight">
                        {points[i]}
                    </div>
                </div>
            ))}
        </div>
    );
}
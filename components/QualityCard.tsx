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
        <div className="flex gap-6 flex-wrap justify-center">
            {images.map((src, i) => (
                <div
                    key={i}
                    className="relative w-[260px] h-[360px] overflow-hidden shadow-md group"
                >
                    {/* Image */}
                    <Image
                        src={src}
                        alt={`why-${i}`}
                        fill
                        className="object-cover transition duration-500 scale-110"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Text */}
                    <div className="absolute bottom-12 left-4 right-4 text-white text-sm font-heading text-left">
                        {points[i]}
                    </div>
                </div>
            ))}
        </div>
    );
}
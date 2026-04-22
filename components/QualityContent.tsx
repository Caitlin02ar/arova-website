"use client";

import { useTranslations } from "next-intl";

type QualityItem = {
    title: string;
    points: string[];
    };

    export default function QualityContent() {
    const t = useTranslations("Quality");
    const items = t.raw("items") as QualityItem[];

    return (
        <section className="px-32 py-20 bg-[var(--color-cream-1)]">
        {items.map((item, index) => (
            <div
            key={index}
            className="border-b border-[var(--color-dark-green)] py-10 flex gap-120 flex items-center"
            >
            {/* Number */}
            <div className="text-[150px] font-semibold text-lime-green font-heading w-[120px]">
                {(index + 1).toString().padStart(2, "0")}
            </div>

            {/* Content */}
            <div>
                <h2 className="text-lg font-medium mb-3 font-heading">
                {item.title}
                </h2>

                <ul className="text-sm text-gray-700 space-y-1 font-sans">
                {item.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                ))}
                </ul>
            </div>
            </div>
        ))}
        </section>
    );
}
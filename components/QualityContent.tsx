"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type QualityItem = {
    id: string;
    title: string;
    points: string[];
};

export default function QualityContent() {
    const t = useTranslations("Quality");
    const items = t.raw("items") as QualityItem[];

    return (
        <section className="px-6 md:px-32 py-20 bg-[var(--color-cream-1)] pb-4">
        {items.map((item, index) => (
            <motion.div
                id={item.id}
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.25, 1, 0.5, 1],
                    delay: 0.1,
                }}
                viewport={{ once: true, amount: 0.3 }}
                className={`scroll-mt-44 py-10 flex items-center gap-10 md:gap-120 ${
                    index !== items.length - 1 ? "border-b border-[var(--color-dark-green)]" : ""
                }`}
            >
                {/* Number */}
                <div className="text-[60px] md:text-[150px] font-medium text-lime-green font-heading w-[80px] md:w-[120px] min-w-[80px] md:min-w-[120px] shrink-0 leading-none">
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
            </motion.div>
        ))}
        </section>
    );
}
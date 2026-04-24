"use client";

import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const locations = [
    { id: 1, x: "20%", y: "36%", name: "Palu" },
    { id: 2, x: "52%", y: "37%", name: "Luwuk" },
    { id: 3, x: "69%", y: "43%", name: "Bangai Island" },
    { id: 4, x: "56%", y: "74%", name: "Kendari" },
    { id: 5, x: "18%", y: "87%", name: "Makasar" },
    ];

    export default function ClientPage() {
    const t = useTranslations("Client");

    const mapRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const isMapInView = useInView(mapRef, { once: true, margin: "-20%" });
    const isTextInView = useInView(textRef, { once: true, margin: "-10%" });

    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const description = t.rich("description", {
   bold: (chunks) => (
    <motion.span
        className="inline"
        style={{ color: "var(--color-dark-green)" }}
        initial={{ fontWeight: 400 }}
        animate={isTextInView ? { fontWeight: 600 } : {}}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
    >
        {chunks}
    </motion.span>
),
    });

    return (
        <main className="bg-[var(--color-cream-1)] text-[var(--color-dark-green)]">

        <section
            id="client"
            className="flex flex-col items-center justify-center px-6 pt-24 md:pt-40 pb-4"
        >
            <div
            ref={textRef}
            className="text-center text-xl md:text-[1.75rem] font-heading leading-snug max-w-3xl"
            >
            <motion.div
                initial={{ opacity: 0 }}
                animate={isTextInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
                {description}
            </motion.div>
            </div>
        </section>

        {/* MAP SECTION */}
        <section className="relative flex items-center justify-center px-6 py-12 md:py-16">
            <div ref={mapRef} className="relative w-full max-w-[560px] mx-auto">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isMapInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
                <Image
                src="/asset/Peta Sulawesi-01.svg"
                alt="Peta Sulawesi"
                width={700}
                height={600}
                className="w-full h-auto"
                priority
                />
            </motion.div>

            {/* DOTS */}
            {locations.map((loc, i) => (
                <motion.div
                key={loc.id}
                className="absolute"
                style={{
                    left: loc.x,
                    top: loc.y,
                    transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isMapInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                    duration: 0.4,
                    delay: 0.8 + i * 0.15,
                    ease: [0.34, 1.56, 0.64, 1],
                }}
                onMouseEnter={() => setHoveredId(loc.id)}
                onMouseLeave={() => setHoveredId(null)}
                >
                <motion.span
                    aria-hidden="true"
                    className="block w-[14px] h-[14px] bg-[var(--color-dark-green)] cursor-pointer"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.2 }}
                />

                <motion.div
                    className="absolute left-full top-1/2 ml-2 text-lg font-medium whitespace-nowrap pointer-events-none"
                    style={{
                    y: "-50%",
                    color: "var(--color-dark-green)",
                    }}
                    initial={{ opacity: 0, x: -4 }}
                    animate={
                    hoveredId === loc.id
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -4 }
                    }
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                    {loc.name}
                </motion.div>
                </motion.div>
            ))}
            </div>
        </section>
        <CTA />
        <Footer />
        </main>
    );
}
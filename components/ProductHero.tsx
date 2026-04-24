"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ProductHero() {
    const t = useTranslations("ProductHero");

    return(
        <motion.section
            id="product-section"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative h-[500px] bg-no-repeat bg-cover 
           bg-[position:30%_center]        {/* mobile: geser ke kanan 80% */}
           md:bg-[position:center_center]  {/* desktop: tengah */}
           flex items-end justify-start md:items-center text-dark-green"
            style={{ backgroundImage: "url('/photos/Product Hero - BG.webp')" }}>
            
            <div className="description p-6 pb-8 md:p-24 md:pt-36">
                <div className="subheadline-section">
                    <span className="italic text-heading">{t("subheadline")}</span>
                </div>
                <div className="headline overflow-hidden">
                    <motion.h1
                        className="text-[1.5rem] font-semibold text-heading"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.6 }}
                    >
                        {t("headline")}
                    </motion.h1>
                </div>
                <div className="description-hero">
                    <p className="w-full md:w-[40%] text-sm md:text-base">{t("description")}</p>
                </div>
            </div>
        </motion.section>
    )
}
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ProductHero() {
    const t = useTranslations("ProductHero");

    return(
        <motion.section
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative h-[500px] bg-no-repeat bg-cover flex items-center justify-start text-dark-green"
            style={{ backgroundImage: "url('/photos/Product Hero - BG.png')" }}>
            
            <div className="description p-24 pt-36">
                <div className="subheadline-section">
                    <span className="italic text-heading">{t("subheadline")}</span>
                </div>
                <div className="headline">
                    <span className="text-[1.5rem] font-semibold text-heading">{t("headline")}</span>
                </div>
                <div className="description-hero">
                    <p className="w-[40%]">{t("description")}</p>
                </div>
            </div>
        </motion.section>
    )
}
"use client";

import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';

import Button from "./Button";

export default function ProductSupply(){
    const t = useTranslations("ProductSupply");

    return(
        <section className="py-24 overflow-hidden">
            <div className="flex flex-col md:grid md:grid-cols-10 md:items-center">
                {/* Gambar — mobile: atas (order-1), desktop: kanan (col-span-6) */}
                <div className="order-1 md:order-2 md:col-span-6">
                    <motion.div
                        initial={{ x: 80, opacity: 0, scale: 0.97 }}
                        whileInView={{ x: 0, opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1.4,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="w-full overflow-hidden will-change-transform">
                        <img
                            src="/photos/Product Supply.webp"
                            alt="product supply"
                            className="w-full h-[260px] md:h-[500px] object-cover"
                            loading="eager"
                        />
                    </motion.div>
                </div>

                {/* Teks — mobile: bawah (order-2), desktop: kiri (col-span-4) */}
                <div className="order-2 md:order-1 md:col-span-4 flex justify-center items-center px-6 pt-8 md:px-0 md:pt-0">
                    <div className="max-w-md text-left">
                        <div className="overflow-hidden">
                            <motion.h2
                                className="font-heading text-2xl mb-4 font-[500]"
                                initial={{ y: "100%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                {t('title')}
                            </motion.h2>
                        </div>
                        <p className="text-md w-xs leading-relaxed">
                            {t("description")}
                        </p>
                        <div className="pt-8 flex flex-col items-start">
                            <Button href="#" variant="dark" icon="download">
                                {t("button")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
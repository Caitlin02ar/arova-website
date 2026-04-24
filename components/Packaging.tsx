"use client";

import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';

export default function Packaging(){
    const t = useTranslations("Packaging");
    return(
        <main>
        <section className="py-24 bg-[var(--color-cream-1)] overflow-hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-10 items-center">
            
            {/* Text - di desktop col-span-4, di mobile order-2 (bawah) */}
            <div className="order-2 md:order-1 md:col-span-4 flex justify-center items-center px-6 md:px-0 mt-8 md:mt-0">
                <div className="w-full md:max-w-md text-left pl-4 md:pl-10">
                    <div className="overflow-hidden">
                        <motion.h2
                            className="font-heading text-2xl mb-4 font-[500]"
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: "0%", opacity: 1 }}
                            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
                            viewport={{ once: true, amount: 0.15 }}
                        >
                            {t('titlePackaging')}
                        </motion.h2>
                    </div>
                    <p className="text-md leading-relaxed">
                        {t('descriptionPackaging')}
                    </p>
                </div>
            </div>

            {/* Image - di desktop col-span-6, di mobile order-1 (atas) */}
            <div className="order-1 md:order-2 md:col-span-6 flex flex-col">
                <motion.div
                    initial={{ x: 60, opacity: 0, scale: 0.97 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.3,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    viewport={{ once: true, amount: 0.15 }}
                    className="w-full overflow-hidden will-change-transform">
                    <img
                        src="/photos/Jerrycan.png"
                        alt="About Arova"
                        className="w-full h-auto object-contain"
                        loading="eager"
                    />
                </motion.div>
                <h3 className="font-heading italic text-[0.75rem] md:text-sm font-[500] text-center md:text-right md:pr-46">
                    {t('disclaimer')}
                </h3>
            </div>

        </div>
        </section>
        </main>
    )
}
"use client";

import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';


export default function Packaging(){
    const t = useTranslations("Packaging");
    return(
        <main>
        <section className="py-24 bg-[var(--color-cream-1)] overflow-hidden">
        
        <div className="grid grid-cols-10 items-center">
            
            <div className="col-span-4 flex justify-center items-center">
                <div className="max-w-md text-left">
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
                    <p className="text-md w-xs leading-relaxed">
                    {t('descriptionPackaging')}
                    </p>
                </div>
            </div>

            <div className="col-span-6 flex flex-col">
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
                        className="w-full h-[500px] object-cover object-right"
                        loading="eager"
                    />
                </motion.div>
                <h3 className="font-heading italic text-sm font-[500] text-right pr-44">{t('disclaimer')}</h3>
            </div>
        </div>
        </section>
        </main>
    )
}
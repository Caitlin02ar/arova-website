"use client";

import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';

import Button from "./Button";

export default function ProductSupply(){
    const t = useTranslations("ProductSupply");

    return(
        <section className="py-24 overflow-hidden">
            <div className="grid grid-cols-10 items-center">
                <div className="col-span-4 flex justify-center items-center">
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
                        <div className="pt-8">
                            <Button href="#" variant="dark" icon="download">
                                {t("button")}
                            </Button>
                        </div>
                        
                    </div>
                </div>
                <div className="col-span-6">
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
                            src="/photos/Product Supply.png"
                            alt="product supply"
                            className="w-full h-[500px] object-cover"
                            loading="eager"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
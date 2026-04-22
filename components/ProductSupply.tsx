"use client";

import { useTranslations } from "next-intl";
import Button from "./Button";

export default function ProductSupply(){
    const t = useTranslations("ProductSupply");

    return(
        <section className="py-24 overflow-hidden">
            <div className="grid grid-cols-10 items-center">
                <div className="col-span-4 flex justify-center items-center">
                    <div className="max-w-md text-left">
                        <h2 className="font-heading text-2xl mb-4 font-[500]">
                            {t("title")}
                        </h2>
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
                    <div className="w-full aspect-video">
                        <img src="/photos/Product Supply.png" alt="product supply" className="w-full h-[500px] object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}
"use client";

import { useTranslations } from "next-intl";
import QualityCard from "./QualityCard";
import CTA from "./CTA";
import Footer from "./Footer";
import Packaging from "./Packaging";

export default function WhyChoose(){
    const t = useTranslations("WhyChoose");
    return(
        <main>
            <div className="hero-quality w-full h-[60vh] md:h-[90vh]">
                <img
                    src="/photos/3d-cargo-container-ship-sea.jpeg"
                    alt=""
                    className="w-full h-full object-contain md:object-cover"
                />
            </div>
               <div className="max-w-6xl mx-auto px-8">
                <h1 className="font-heading text-[1.35rem] mt-12 font-medium text-left md:text-center">
                    {t("titleWhyChoose")}
                </h1>     
            </div>
            <div className="card flex gap-8 items-center justify-center p-8 pt-2">
                <QualityCard/>
            </div>

            {/* Packaging teks + gambar dalam satu section, teks pakai container yang sama */}
            <Packaging/>
            <CTA/>
            <Footer/>
        </main>
    )
}
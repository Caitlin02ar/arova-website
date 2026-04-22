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
            <div className="hero-quality aspect-video w-full h-[90vh]">
                <img src="/photos/3d-cargo-container-ship-sea.jpeg" alt="" className="w-full h-full object-cover" />
            </div>
            <h1 className="font-heading text-[1.35rem] flex items-center justify-center mt-12 font-medium">{t("titleWhyChoose")}</h1>
            <div className="card flex gap-8 items-center justify-center p-12 pt-6">
                <QualityCard/>
            </div>
            <Packaging/>
            <CTA/>
            <Footer/>
        </main>
    )
}
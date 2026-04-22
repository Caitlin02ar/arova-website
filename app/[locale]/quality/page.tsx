"use client";

import { useTranslations } from "next-intl";
import QualityContent from "@/components/QualityContent";
import WhyChoose from "@/components/WhyChoose";

export default function QualityPage() {
    const t = useTranslations("Quality");
    return(
        <main>
            <div className="hero-quality aspect-video w-full h-[90vh]">
                <img 
                    src="/photos/hero-bg.jpg" 
                    alt="hero-bg" 
                    className="w-full h-full object-cover"
                />
                <QualityContent/>
                <WhyChoose/>    
            </div>
        </main>
    )
}
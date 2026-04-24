"use client";

import { useTranslations } from "next-intl";
import QualityContent from "@/components/QualityContent";
import WhyChoose from "@/components/WhyChoose";

export default function QualityPage() {
    const t = useTranslations("Quality");
    return(
        <main>
            <div className="hero-quality relative w-full h-[90vh]">
    <img 
        src="/photos/Quality Hero.webp" 
        alt="hero-bg"
        className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
    />  
</div>        
    <QualityContent/>
    <WhyChoose/>  
        </main>
    )
}
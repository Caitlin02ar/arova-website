"use client";

import { useTranslations } from "next-intl";
import QualityContent from "@/components/QualityContent";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function QualityPage() {
    const t = useTranslations("Quality");
    return(
        <main>
            <div className="hero-quality relative w-full h-[90vh]">
                <Image
                    src="/photos/Quality Hero.webp"
                    alt="hero-bg"
                    fill
                    className="object-cover object-top md:object-center"
                    priority
                />
            </div>
        <QualityContent/>
        <WhyChoose/>  
        </main>
    )
}
"use client";

import { useTranslations } from "next-intl";
import ProductHero from "@/components/ProductHero";
import ProductIngridients from "@/components/ProductIngridients";
import ProductApply from "@/components/ProductApply"; 
import ProductSupply from "@/components/ProductSupply";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function ProductPage() {
    const t = useTranslations("Product");
    return(
        <main>
            <ProductHero/>
            <ProductIngridients/>
            <ProductApply/>
            <ProductSupply/>
            <CTA/>
            <Footer/>
        </main>
    )
}
"use client";

import { useTranslations } from "next-intl";
import SupplyCard from "./SupplyCard";

export default function ProductApply() {
    const t = useTranslations("ProductApply");
    return(
        <div className="flex flex-col items-center w-full">
            <h3 className="font-semibold text-heading text-[1.25rem]">{t("title")}</h3>
            <SupplyCard/>
        </div>
    )
}
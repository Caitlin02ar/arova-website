"use client";

import { useTranslations } from "next-intl";

export default function ProductIngridients() {
    const t = useTranslations("ProductIngridients");

    return(
        <div className="min-h-screen">
            <div className="ingridients flex flex-col items-center p-16">
                <img src="/asset/Water Drop.png" alt="water-drop" width={180} height={150} />
            </div>
        </div>
    )

}
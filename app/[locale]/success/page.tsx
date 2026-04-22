"use client";

import { useTranslations } from "next-intl";
import SuccessMessage from "@/components/SuccessMessage";

export default function SuccessPage(){
    const t = useTranslations("Notification");

    return(
        <section>
            <SuccessMessage/>
        </section>
    )
}
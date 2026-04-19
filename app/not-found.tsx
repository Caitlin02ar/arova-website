import { useTranslations } from "next-intl";

export default function NotFound(){
    const t = useTranslations("Notification");
    return(
        <main>
            <h1>{t("errorMessage")}</h1>
        </main>
    )
}
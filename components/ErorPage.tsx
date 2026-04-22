"use client";

import { useTranslations } from "next-intl";

export default function ErrorPage({ locale }: { locale: string }) {
  const t = useTranslations("Notification");

  return (
    <div className="h-screen flex items-center justify-center">
      <h1>{t("errorMessage")}</h1>
    </div>
  );
}
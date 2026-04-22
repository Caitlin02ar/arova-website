import Footer from "@/components/Footer";
import { getLocale, getTranslations } from "next-intl/server";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Notification" });

  return (
    <div className="flex flex-col">
      <div className="relative overflow-hidden h-screen">
        <img
          src="/photos/Water Drop 2.png"
          alt="water"
          style={{
            position: "absolute",
            width: "100%",
            height: "auto",
            bottom: 0,
            left: 0,
          }}
        />

        <div
          className="relative z-10 flex flex-col items-center"
          style={{ paddingTop: "14%" }}
        >
          <div className="flex items-center">
            <span className="text-[10rem] font-medium leading-none text-dark-green font-heading">4</span>
            <span className="w-[90px] inline-block" />
            <span className="text-[10rem] font-medium leading-none text-dark-green font-heading">4</span>
          </div>
          <p className="mt-2 text-lg font-medium text-dark-green font-heading">
            {t("errorMessage")}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
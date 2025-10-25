"use client"

import { useTranslation } from "react-i18next"
import { useCountUp } from "@/hooks/use-count-up"
import localFont from "next/font/local"

// Arabic font for Arabic translation only
export const palestine = localFont({
  src: "../components/fonts/alfont_com_Palestine-Regular.ttf",
  variable: "--font-palestine",
  display: "swap",
})

function StatCard({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) {
  const { count, ref } = useCountUp(target)

  return (
    <div ref={ref} className="space-y-4">
      <div className="text-5xl font-bold">
        {count}
        {suffix}
      </div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  )
}

export default function StatsSection() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === "ar"

  return (
    <section
      className={`py-16 md:py-24 ${isArabic ? palestine.variable : ""}`}
      dir={isArabic ? "rtl" : "ltr"}
      style={isArabic ? { fontFamily: "var(--font-palestine)" } : {}}
      id="numbers"
    >
      <div className="mx-auto max-w-5xl space-y-12 px-6 text-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold lg:text-5xl">{t("Stats_Title")}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("Stats_Subtitle")}
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <StatCard target={58} label={t("Stats_Wilayas")} />
          <StatCard target={47.4} label={t("Stats_Citizens")} suffix="M" />
          <StatCard target={100} label={t("Stats_Free")} suffix="%" />
        </div>
      </div>
    </section>
  )
}

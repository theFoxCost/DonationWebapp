"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import { palestine } from "@/app/fonts" // 👈 import the font

export default function FAQs() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === "ar"

  return (
    <section
      id="faq"
      dir={isArabic ? "rtl" : "ltr"} // 👈 switch direction for Arabic
      className={`
        scroll-py-16 py-16 md:scroll-py-32 md:py-32 transition-all duration-300
        ${isArabic ? `${palestine.className} text-right` : "text-left"}
      `}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div
          className={`grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto] ${
            isArabic ? "lg:text-right" : "lg:text-left"
          }`}
        >
          <div className={`text-center lg:${isArabic ? "text-right" : "text-left"}`}>
            <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
              {t("FAQ_Title_Line1")} <br className="hidden lg:block" />{" "}
              {t("FAQ_Title_Line2")} <br className="hidden lg:block" />{" "}
              {t("FAQ_Title_Line3")}
            </h2>
            <p>{t("FAQ_Subtitle")}</p>
          </div>

          <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
            {/* 1 */}
            <div className="pb-6">
              <h3 className="font-medium">{t("FAQ_Q1")}</h3>
              <p className="text-muted-foreground mt-4">{t("FAQ_A1_Intro")}</p>

              <ol
                className={`list-outside list-decimal space-y-2 ${
                  isArabic ? "pr-4" : "pl-4"
                }`}
              >
                <li className="text-muted-foreground mt-4">
                  {t("FAQ_A1_Step1")}
                </li>
                <li className="text-muted-foreground mt-4">
                  {t("FAQ_A1_Step2")}
                </li>
                <li className="text-muted-foreground mt-4">
                  {t("FAQ_A1_Step3")}
                </li>
              </ol>
            </div>

            {/* 2 */}
            <div className="py-6">
              <h3 className="font-medium">{t("FAQ_Q2")}</h3>
              <p className="text-muted-foreground mt-4">{t("FAQ_A2")}</p>
            </div>

            {/* 3 */}
            <div className="py-6">
              <h3 className="font-medium">{t("FAQ_Q3")}</h3>
              <p className="text-muted-foreground my-4">{t("FAQ_A3_Intro")}</p>
              <ul
                className={`list-outside list-disc space-y-2 ${
                  isArabic ? "pr-4" : "pl-4"
                }`}
              >
                <li className="text-muted-foreground">{t("FAQ_A3_Point1")}</li>
                <li className="text-muted-foreground">{t("FAQ_A3_Point2")}</li>
              </ul>
            </div>

            {/* 4 */}
            <div className="py-6">
              <h3 className="font-medium">{t("FAQ_Q4")}</h3>
              <p className="text-muted-foreground mt-4">{t("FAQ_A4")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

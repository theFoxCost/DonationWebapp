"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import i18n from "@/lib/i18n"
import { palestine, arabicFont } from "@/app/fonts" // ✅ import both fonts

export default function WhoSection() {
  const { t } = useTranslation()
  const isArabic = i18n.language === "ar"

  return (
    <section
      id="why"
      className={`py-16 px-6 md:px-12 lg:px-24 bg-background text-foreground mt-30 ${
        isArabic ? arabicFont.className : ""
      }`}
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* ✅ Title with Palestine Font */}
        <h4
          className={`text-center text-2xl sm:text-3xl md:text-4xl font-semibold ${
            palestine.className
          }`}
        >
          {t("WhyWeDothat")}
        </h4>

        {/* Hadith Section */}
        <div className="quotes flex flex-col-reverse md:flex-row items-start justify-between gap-10 md:gap-20">
          {/* English Left */}
          <div className="en w-full md:w-1/2 text-left">
            <p className="text-lg md:text-xl leading-relaxed italic">
              Abu Hurairah (may Allah be pleased with him) reported that the
              Messenger of Allah ﷺ said:
              <br />
              <span className="block mt-3 text-base md:text-lg font-normal">
                “Charity does not decrease wealth. No one forgives another except
                that Allah increases his honor, and no one humbles himself for
                the sake of Allah except that Allah raises his status.”
              </span>
              <span className="block mt-2 text-sm opacity-70">
                — Sahih Muslim
              </span>
            </p>
          </div>

          {/* Arabic Right */}
          <div className={`ar w-full md:w-1/2 text-right ${arabicFont.className}`}>
            <p className="text-xl md:text-2xl leading-relaxed font-semibold tracking-wide">
              :وعن أبي هُريرة رضي الله عنه قال
              <br />
              <span className="block mt-3 text-[1.15rem] md:text-[1.25rem] font-normal">
                ما نقصت صدقة من مال، وما زاد الله عبدًا بعفوٍ إلا عزًّا،
                وما تواضع أحدٌ لله إلا رفعه الله
              </span>
              <span className="block mt-2 text-sm opacity-70 text-right">
                — رواه مسلم
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

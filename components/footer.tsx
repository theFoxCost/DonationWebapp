"use client"

import React from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { useTranslation } from "react-i18next"
import { palestine } from "@/app/fonts"

export default function FooterSection() {
  const { t, i18n } = useTranslation()
  const isArabic = i18n.language === "ar"

  const links = [
    { title: t("Footer_Features"), href: "#" },
    { title: t("Footer_Solution"), href: "#" },
    { title: t("Footer_About"), href: "#" },
    { title: t("Footer_FAQ"), href: "#faq" },
  ]

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className={`py-16 md:py-32 transition-all duration-300 ${
        isArabic
          ? `${palestine.variable} font-[family:var(--font-palestine)] text-right`
          : "text-left"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Logo */}
        <Link href="/" aria-label={t("Footer_HomeLabel")} className="mx-auto block size-fit">
          <Logo />
        </Link>

        {/* Navigation Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {/* X / Twitter */}
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X/Twitter"
            className="text-muted-foreground hover:text-primary block"
          >
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
              />
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary block"
          >
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
              />
            </svg>
          </Link>

          {/* Facebook */}
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted-foreground hover:text-primary block"
          >
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
              />
            </svg>
          </Link>
        </div>

        {/* Copyright */}
        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} Tailark, {t("Footer_Rights")}
        </span>
      </div>
    </footer>
  )
}

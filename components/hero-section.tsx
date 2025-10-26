"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"
import { Logo } from "@/components/logo"
import { ArrowRight, Info, Menu, Rocket, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { LanguageSelector } from "./language-selector"
import { palestine } from "@/app/fonts"

const menuItems = [
  { key: "Why", href: "#why" },
  { key: "numbers", href: "#numbers" },
  { key: "About", href: "#" },
  { key: "FAQ", href: "#faq" },
]

export default function HeroSection() {
  const [menuState, setMenuState] = React.useState(false)
  const { t, i18n } = useTranslation()
  const { data: session } = useSession()
  const isArabic = i18n.language === "ar"

  React.useEffect(() => {
    const handleScroll = () => {
      if (menuState) setMenuState(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [menuState])

  return (
    <>
      {/* Header + Navigation */}
      <header>
        <nav
          data-state={menuState && "active"}
          className="fixed z-20 w-full border-b border-dashed bg-background backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
        >
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <Link href="/" aria-label="home" className="flex items-center space-x-2">
                  <Logo />
                </Link>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                >
                  <Menu
                    className={`m-auto size-6 duration-200 transition-all ${
                      menuState
                        ? "rotate-180 scale-0 opacity-0"
                        : "rotate-0 scale-100 opacity-100"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 m-auto size-6 duration-200 transition-all ${
                      menuState
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-180 scale-0 opacity-0"
                    }`}
                  />
                </button>
              </div>

              <div
                className={`bg-background mb-6 w-full flex-wrap items-center space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent lg:justify-end ${
                  menuState ? "flex" : "hidden lg:flex"
                }`}
              >
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        >
                          {t(item.key)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 🌐 Right Side */}
                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <LanguageSelector />

                  {session ? (
                    // ✅ Show user avatar
                    <div className="flex items-center gap-3">
                      <Image
                        src={session.user?.image || "/default-avatar.png"}
                        alt="User Avatar"
                        width={36}
                        height={36}
                        className="rounded-full border cursor-pointer hover:opacity-80"
                        onClick={() => signOut()}
                      />
                    </div>
                  ) : (
                    // ❌ Not logged in → show buttons
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => signIn("google")}
                      >
                        {t("Login")}
                      </Button>
                      <Button size="sm">
                        <Link href="#">{t("SignUp")}</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main
        className={`${isArabic ? palestine.className : ""} overflow-hidden`}
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        {/* Noise Texture */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "var(--background)",
            backgroundImage: `
                radial-gradient(circle at 1px 1px, color-mix(in oklch, var(--foreground), transparent 75%) 1px, transparent 0)
              `,
            backgroundSize: "20px 20px",
            opacity: 0.25,
          }}
        />

        {/* Hero Content */}
        <section className="relative z-10">
          <div className="relative pt-24">
            <div className="mx-auto max-w-7xl px-6">
              <div className="max-w-5xl text-center sm:mx-auto lg:mr-auto lg:mt-0 lg:w-4/5">
                <Link
                  href="/"
                  className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
                >
                  <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                    {t("New")}
                  </span>
                  <span className="text-sm">{t("IntroTailark")}</span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>
                  <ArrowRight className="size-4" />
                </Link>

                <h1 className="mt-8 text-balance text-4xl font-semibold md:text-5xl xl:text-6xl xl:[line-height:1.125]">
                  {t("MessageWelcome")}
                </h1>

                <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
                  {t("HeroDescription")}
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-wrap sm:hidden">
                  {t("HeroDescriptionMobile")}
                </p>

                <div className="mt-8 flex items-center justify-center gap-4">
                  <Link href="#">
                    <Button size="lg">
                      <Rocket className="relative size-4" />
                      <span className="text-nowrap">{t("StartBuilding")}</span>
                    </Button>
                  </Link>
                  <Link href="#">
                    <Button size="lg" variant="outline">
                      <Info className="relative size-4" />
                      <span className="text-nowrap">{t("LearnMore")}</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mask-b-from-55% relative mx-auto mt-16 max-w-6xl overflow-hidden px-4">
              <Image
                draggable={false}
                className="z-2 border-border/25 relative hidden rounded-2xl border dark:block"
                src="/illustration.svg"
                alt={t("AppScreen")}
                width={2796}
                height={2008}
              />
              <Image
                draggable={false}
                className="z-2 border-border/25 relative rounded-2xl border dark:hidden"
                src="/illustration.svg"
                alt={t("AppScreen")}
                width={2796}
                height={2008}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

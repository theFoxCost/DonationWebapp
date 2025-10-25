// app/fonts.ts
import localFont from "next/font/local";
import { Amiri } from "next/font/google"

export const palestine = localFont({
  src: "../components/fonts/alfont_com_Palestine-Regular.ttf",
  variable: "--font-palestine",
  display: "swap",
});
export const arabicFont = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
})

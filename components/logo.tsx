import { cn } from "@/lib/utils"
import localFont from "next/font/local"

const arabicFont = localFont({
  src: "./fonts/alfont_com_Tasees-Saudi.ttf", 
  variable: "--font-arabic",
})

export const Logo = ({
  className,
  uniColor,
}: {
  className?: string
  uniColor?: boolean
}) => {
  return (
    <div className={cn("flex items-center gap-2", arabicFont.className)}>
      {/* SVG Logo */}

      {/* Arabic Word */}
      <span className="text-4xl font-medium tracking-tight text-foreground">
        صدقة
      </span>
    </div>
  )
}

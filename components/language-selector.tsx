"use client";

import React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Languages } from "lucide-react";
import i18n from "@/lib/i18n";

interface Props {
  onChange?: (lang: string) => void;
}

const languages = [
  { code: "en", nativeLabel: "English" },
  { code: "ar", nativeLabel: "عربي" },
  { code: "fr", nativeLabel: "Français" },
  { code: "zh", nativeLabel: "中文" },
];

export function LanguageSelector({ onChange }: Props) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleChange = (code: string) => {
    i18n.changeLanguage(code);
    onChange?.(code);
  };

  return (
    <Select value={i18n.language} onValueChange={handleChange}>
      <SelectTrigger className="w-fit gap-2 border-0 bg-transparent px-0 hover:bg-muted md:border md:bg-background md:px-3">
        <Languages className="size-4 flex-shrink-0" />
        <SelectValue placeholder="Language" className="hidden md:inline" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.nativeLabel}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

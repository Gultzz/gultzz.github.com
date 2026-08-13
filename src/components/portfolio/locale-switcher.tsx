"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Locale } from "../../data/portfolio";

export function LocaleSwitcher({ locale }: { locale: Locale }) {
  return (
    <nav className="locale-switcher" aria-label="Language / Idioma">
      {(["pt", "en"] as const).map((item) => (
        <Link
          href={`/${item}`}
          hrefLang={item === "pt" ? "pt-BR" : "en"}
          aria-current={locale === item ? "page" : undefined}
          key={item}
        >
          {locale === item && (
            <motion.span className="locale-active" layoutId="locale-active" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
          )}
          <span>{item.toUpperCase()}</span>
        </Link>
      ))}
    </nav>
  );
}

"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function RootPage() {
  useEffect(() => {
    window.location.replace("/pt/");
  }, []);

  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/pt/" />
      <main className="redirect-page">
        <p>PORTFOLIO / GUSTAVO SCHULTZ</p>
        <h1>Redirecionando para o portfólio</h1>
        <Link href="/pt/">Continuar para a versão em português →</Link>
        <Link href="/en/" lang="en">Continue to the English version →</Link>
      </main>
    </>
  );
}

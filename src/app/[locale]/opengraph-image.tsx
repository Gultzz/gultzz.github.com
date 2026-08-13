import { ImageResponse } from "next/og";
import { getPortfolio, isLocale } from "../../data/portfolio";

export const alt = "Gustavo Schultz — Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const data = getPortfolio(isLocale(locale) ? locale : "pt");
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#111111",
        color: "#f4f4f2",
        fontFamily: "Arial, sans-serif",
        padding: "58px 64px",
      }}
    >
      <div
        style={{
          width: 270,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRight: "1px solid #444",
          paddingRight: 38,
        }}
      >
        <span style={{ fontSize: 16, letterSpacing: 4, color: "#888" }}>
          PORTFOLIO / 2026
        </span>
        <span style={{ fontSize: 18, letterSpacing: 3 }}>
          {data.locale.toUpperCase()} — GS
        </span>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 60,
        }}
      >
        <span
          style={{
            fontSize: 24,
            letterSpacing: 5,
            color: "#9b9b97",
            textTransform: "uppercase",
          }}
        >
          {data.position}
        </span>
        <strong
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 28,
            fontSize: 108,
            lineHeight: 0.82,
            letterSpacing: -7,
            textTransform: "uppercase",
          }}
        >
          <span>Gustavo</span>
          <span style={{ color: "#777" }}>Schultz</span>
        </strong>
        <span
          style={{
            maxWidth: 650,
            marginTop: 38,
            fontSize: 24,
            color: "#b8b8b4",
          }}
        >
          {data.intro}
        </span>
      </div>
    </div>,
    size,
  );
}

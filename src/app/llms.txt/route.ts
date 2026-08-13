import { siteUrl } from "../../lib/site";

export const dynamic = "force-static";

export function GET() {
  const content = `# Gustavo Schultz

> Official bilingual portfolio and professional profile of Gustavo Schultz, a Brazilian Fullstack Developer.

## Canonical profiles

- [Português](${siteUrl}/pt): Perfil profissional completo em português.
- [English](${siteUrl}/en): Full professional profile in English.

## Professional information

- Core technologies: ReactJS, React Native, NextJS, Angular, JavaScript, TypeScript, NodeJS, NestJS, ExpressJS, and C#.
- Experience: Firedev IT and EGS Sistemas.
- GitHub: https://github.com/Gultzz
- LinkedIn: https://www.linkedin.com/in/gustavo-schultz-cruz/

## Machine-readable resources

- [XML sitemap](${siteUrl}/sitemap.xml)
- [Robots policy](${siteUrl}/robots.txt)
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

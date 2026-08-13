import Image from "next/image";
import { notFound } from "next/navigation";
import { LocaleSwitcher } from "../../components/portfolio/locale-switcher";
import { SkillsChart } from "../../components/portfolio/skills-chart";
import { PageEffects } from "../../components/animation/page-effects";
import { WavyText } from "../../components/animation/wavy-text";
import { getPortfolio, isLocale } from "../../data/portfolio";
import { siteName, siteUrl } from "../../lib/site";

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const data = getPortfolio(locale);
  const pageUrl = `${siteUrl}/${data.locale}`;
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteName,
        alternateName: `${data.name} — ${data.position}`,
        inLanguage: ["pt-BR", "en"],
      },
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profile-page`,
        url: pageUrl,
        name: `${data.name} — ${data.position}`,
        description: data.about[0],
        inLanguage: data.lang,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        primaryImageOfPage: `${siteUrl}/gustavo-schultz.svg`,
      },
      {
        "@type": "Person",
        "@id": personId,
        name: data.name,
        givenName: "Gustavo",
        familyName: "Schultz",
        url: pageUrl,
        image: `${siteUrl}/gustavo-schultz.svg`,
        jobTitle: data.position,
        description: data.about[0],
        email: data.contacts.email.href,
        telephone: data.contacts.phone.href.replace("tel:", ""),
        sameAs: [data.contacts.github.href, data.contacts.linkedin.href],
        knowsAbout: data.stack,
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#content">{data.skip}</a>
      <PageEffects />
      <div className="portfolio-shell">
        <aside className="profile-rail" aria-label={`${data.name} — ${data.position}`}>
          <div className="profile-inner">
            <div className="profile-topline" data-intro>
              <span>PORTFOLIO / 2026</span>
              <LocaleSwitcher locale={data.locale} />
            </div>
            <div className="portrait-frame" data-intro>
              <Image src="/gustavo-schultz.svg" alt={data.portraitAlt} width={180} height={179} priority sizes="(max-width: 760px) 148px, 180px" />
              <span className="portrait-index">GS—01</span>
            </div>
            <header className="identity">
              <p className="role" data-intro>{data.position}</p>
              <h1 aria-label={data.name} data-intro>
                <WavyText text="Gustavo" />
                <WavyText text="Schultz" className="outlined" />
              </h1>
              <p className="intro" data-intro>{data.intro}</p>
            </header>
            <ul className="stack-list" aria-label={data.stackLabel} data-intro>
              {data.stack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
            <nav className="section-nav" aria-label={data.navigation} data-intro>
              {Object.entries(data.nav).map(([id, label], index) => (
                <a href={`#${id}`} key={id}><span>0{index + 1}</span>{label}</a>
              ))}
            </nav>
            <a className="resume-button resume-desktop" href={data.resumeFile} target="_blank" rel="noopener noreferrer" aria-label={`${data.resume}, ${data.pdfDocument}, ${data.opensNewWindow}`} data-intro>
              <span>{data.resume}</span><span aria-hidden="true">↗</span>
            </a>
          </div>
        </aside>

        <main id="content" className="content" tabIndex={-1}>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
          <section id="about" className="section about-section" aria-labelledby="about-title">
            <SectionHeader index="01" title={data.aboutTitle} id="about-title" />
            <div className="about-layout">
              <div className="about-copy">
                {data.about.map((paragraph) => <p data-reveal="up" key={paragraph}>{paragraph}</p>)}
              </div>
              <dl className="profile-facts">
                <div data-reveal="right"><dt>{data.personality}</dt><dd><a href={data.personalityUrl} target="_blank" rel="noopener noreferrer" aria-label={`ISTJ-A, ${data.opensNewWindow}`}>ISTJ-A ↗</a></dd></div>
                <div data-reveal="right"><dt>{data.languagesTitle}</dt><dd>{data.portuguese}<br />{data.english}</dd></div>
              </dl>
            </div>
            <span className="scroll-cue" aria-hidden="true">{data.scroll} ↓</span>
          </section>

          <section id="experience" className="section experience-section" aria-labelledby="experience-title">
            <SectionHeader index="02" title={data.experienceTitle} id="experience-title" description={data.experienceIntro} />
            <div className="experience-list">
              <span className="timeline-line" aria-hidden="true" />
              {data.experiences.map((experience, index) => (
                <article className="experience-card" key={experience.company}>
                  <span className="experience-number" aria-hidden="true">0{index + 1}</span>
                  <div className="experience-meta" data-reveal="left"><time>{experience.period}</time><h3 aria-label={experience.company}><WavyText text={experience.company} /></h3><p>{experience.role}</p></div>
                  <ul>{experience.items.map((item) => <li data-reveal="up" key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>

          <section className="section language-section" aria-labelledby="languages-title">
            <SectionHeader index="03" title={data.languagesTitle} id="languages-title" />
            <div className="language-grid">
              <p data-reveal="scale"><span>PT</span>{data.portuguese}</p>
              <p data-reveal="scale"><span>EN</span>{data.english}<a href="https://cert.efset.org/5JSjLm" target="_blank" rel="noopener noreferrer" aria-label={`${data.certificate}, ${data.opensNewWindow}`}>{data.certificate} ↗</a></p>
            </div>
          </section>

          <section id="skills" className="section skills-section" aria-labelledby="skills-title">
            <SectionHeader index="04" title={data.skillsTitle} id="skills-title" description={data.skillsIntro} />
            <SkillsChart skills={data.skills} locale={data.locale} labels={{ years: data.years, year: data.year, level: data.level, certificate: data.linkedInCertificate }} />
          </section>

          <section id="contact" className="section contact-section" aria-labelledby="contact-title">
            <SectionHeader index="05" title={data.contactTitle} id="contact-title" description={data.contactIntro} />
            <div className="contact-list">
              <ContactLink label="GitHub" value={data.contacts.github.label} href={data.contacts.github.href} external newWindowLabel={data.opensNewWindow} />
              <ContactLink label="LinkedIn" value={data.contacts.linkedin.label} href={data.contacts.linkedin.href} external newWindowLabel={data.opensNewWindow} />
              <ContactLink label={data.phone} value={data.contacts.phone.label} href={data.contacts.phone.href} />
              <ContactLink label="Email" value={data.contacts.email.label} href={data.contacts.email.href} />
            </div>
            <a className="resume-button resume-mobile" href={data.resumeFile} target="_blank" rel="noopener noreferrer" aria-label={`${data.resume}, ${data.pdfDocument}, ${data.opensNewWindow}`}>
              <span>{data.resume}</span><span aria-hidden="true">↗</span>
            </a>
          </section>

          <footer className="site-footer"><span data-reveal="left">© {new Date().getFullYear()} {data.name}</span><span data-reveal="right">{data.footer}</span></footer>
        </main>
      </div>
    </>
  );
}

function SectionHeader({ index, title, id, description }: { index: string; title: string; id: string; description?: string }) {
  return (
    <header className="section-header" data-reveal="title">
      <span aria-hidden="true">{index}</span><div><h2 id={id} aria-label={title}><WavyText text={title} className="section-title-text" /></h2>{description && <p>{description}</p>}</div>
    </header>
  );
}

function ContactLink({ label, value, href, external = false, newWindowLabel }: { label: string; value: string; href: string; external?: boolean; newWindowLabel?: string }) {
  return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} data-reveal="up"><span>{label}</span><strong>{value}</strong>{external && <span className="sr-only">({newWindowLabel})</span>}<i aria-hidden="true">↗</i></a>;
}

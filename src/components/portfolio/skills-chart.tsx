"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Portfolio } from "../../data/portfolio";

type Skill = Portfolio["skills"][number];
type BarStyle = CSSProperties & { "--skill-width": string };

export function SkillsChart({
  skills,
  locale,
  labels,
}: {
  skills: readonly Skill[];
  locale: "pt" | "en";
  labels: { years: string; year: string; level: string; certificate: string };
}) {
  const root = useRef<HTMLDivElement>(null);
  const [widths, setWidths] = useState<number[]>(skills.map(() => 0));

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    let disposed = false;
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const { scaleLinear } = await import("d3-scale");
        if (!disposed) {
          const scale = scaleLinear()
            .domain([0, 100])
            .range([0, 100])
            .clamp(true);
          setWidths(skills.map((skill) => scale(skill.level)));
        }
      },
      { rootMargin: "120px" },
    );
    observer.observe(node);
    return () => {
      disposed = true;
      observer.disconnect();
    };
  }, [skills]);

  return (
    <div className="skills-chart" ref={root} role="list">
      {skills.map((skill, index) => {
        const name =
          locale === "pt" && "ptName" in skill ? skill.ptName : skill.name;
        const yearLabel = labels.years;
        return (
          <div
            className="skill-row"
            role="listitem"
            tabIndex={0}
            data-reveal="up"
            key={skill.name}
            aria-label={`${name}: ${skill.years} ${yearLabel}, ${labels.level} ${skill.level}%`}
          >
            <span className="skill-heading">
              <strong>{name}</strong>
              <span>
                {skill.years} {yearLabel}
              </span>
            </span>
            <span className="skill-track" aria-hidden="true">
              <span
                className="skill-fill"
                style={{ "--skill-width": `${widths[index]}%` } as BarStyle}
              />
              <span className="skill-value">{skill.level}</span>
            </span>
            <span className="skill-detail">
              {labels.level} {skill.level}%
              {"certificate" in skill && skill.certificate
                ? ` · ${labels.certificate}`
                : ""}
            </span>
          </div>
        );
      })}
    </div>
  );
}

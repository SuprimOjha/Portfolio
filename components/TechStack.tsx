import Reveal from "./Reveal";

const rows = [
  ["React", "Next.js", "TypeScript", "Node.js", "Express", "NestJS", "GraphQL", "REST API"],
  ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Docker", "Kubernetes", "AWS", "Vercel"],
];

export default function TechStack() {
  return (
    <section className="section-pad-sm section-surface" style={{ overflow: "hidden" }}>
      <div className="container" style={{ marginBottom: "48px" }}>
        <Reveal>
          <div className="section-header">
            <span className="section-label">// tools &amp; technologies</span>
            <h2 className="section-title">My Tech Arsenal</h2>
          </div>
        </Reveal>
      </div>

      {rows.map((row, ri) => (
        <div key={ri} className="marquee-outer" style={{ marginBottom: "12px" }}>
          <div className="marquee-fade-l" />
          <div className="marquee-fade-r" />
          <div className={`marquee-track ${ri % 2 === 0 ? "marquee-ltr" : "marquee-rtl"}`}>
            {[...row, ...row, ...row].map((tech, i) => (
              <div key={i} className="marquee-chip">
                <span className="marquee-dot" />
                <span className="marquee-label">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

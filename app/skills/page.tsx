"use client";
import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";

const categories = [
  { title: "Frontend", icon: "🎨", accent: "#00ff88", skills: [{ name: "React / Next.js", level: 95 }, { name: "TypeScript", level: 90 }, { name: "CSS / Tailwind", level: 92 }, { name: "Vue.js", level: 75 }, { name: "React Native", level: 70 }] },
  { title: "Backend", icon: "⚙️", accent: "#0ea5e9", skills: [{ name: "Node.js / Express", level: 93 }, { name: "NestJS", level: 82 }, { name: "Python / FastAPI", level: 78 }, { name: "GraphQL", level: 80 }, { name: "REST APIs", level: 95 }] },
  { title: "Databases", icon: "🗄️", accent: "#a855f7", skills: [{ name: "PostgreSQL", level: 88 }, { name: "MongoDB", level: 85 }, { name: "Redis", level: 80 }, { name: "Prisma / Drizzle ORM", level: 85 }, { name: "Elasticsearch", level: 65 }] },
  { title: "DevOps & Cloud", icon: "☁️", accent: "#f59e0b", skills: [{ name: "Docker / Kubernetes", level: 83 }, { name: "AWS", level: 80 }, { name: "CI/CD (GitHub Actions)", level: 88 }, { name: "Terraform", level: 70 }, { name: "Vercel / Netlify", level: 92 }] },
];

const tools = ["VS Code", "Git", "Figma", "Postman", "Jest", "Vitest", "Webpack", "Vite", "pnpm", "Linux", "Nginx", "Cloudflare"];

function SkillBar({ name, level, accent }: { name: string; level: number; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && ref.current) { ref.current.style.transform = `scaleX(${level / 100})`; obs.disconnect(); }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div className="skill-item">
      <div className="skill-item-header">
        <span className="skill-name">{name}</span>
        <span className="skill-pct" style={{ color: accent }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <div ref={ref} className="skill-bar-fill" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}88)` }} />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="page-wrap">
      <section className="page-hero grid-bg">
        <div className="page-glow-purple" />
        <div className="container">
          <div className="page-hero-inner">
            <Reveal>
              <span className="section-label">// technical expertise</span>
              <h1 className="page-hero-title">Skills &amp; <span className="gradient-text">Technologies</span></h1>
              <p className="page-hero-desc">A continuously growing toolkit built through years of hands-on experience with real production systems.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="skills-grid">
            {categories.map((cat, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card skill-category-card">
                  <div className="skill-cat-header">
                    <span className="skill-cat-icon">{cat.icon}</span>
                    <h2 className="skill-cat-title">{cat.title}</h2>
                    <div className="skill-cat-line" style={{ background: `linear-gradient(90deg, ${cat.accent}40, transparent)` }} />
                  </div>
                  <div className="skills-list">
                    {cat.skills.map(s => <SkillBar key={s.name} name={s.name} level={s.level} accent={cat.accent} />)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-surface">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="section-label">// daily drivers</span>
              <h2 className="section-title">Tools &amp; Environment</h2>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="tools-grid">
              {tools.map(t => <div key={t} className="tool-chip">{t}</div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container" style={{ maxWidth: "800px" }}>
          <Reveal>
            <div className="card learning-box">
              <div className="learning-header">
                <span className="status-dot" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}>Currently learning</span>
              </div>
              <h2 className="learning-title">Always Evolving</h2>
              <p className="learning-text">Technology never stands still, and neither do I. Here&apos;s what I&apos;m currently exploring and integrating into my toolkit.</p>
              <div className="learning-chips">
                {["Rust", "LLM Integration", "Edge Computing", "WebAssembly", "Deno", "Bun"].map(item => (
                  <span key={item} className="learning-chip">{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

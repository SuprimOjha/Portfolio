"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const categories = ["All", "Full Stack", "Frontend", "Backend", "DevOps", "Open Source"];

const projects = [
  { title: "SaaS Analytics Dashboard", description: "Real-time analytics platform with interactive charts, multi-tenant architecture, and role-based access control built for scale.", tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts"], category: "Full Stack", accent: "#00ff88", stats: { users: "10K+", uptime: "99.9%", speed: "< 200ms" }, featured: true },
  { title: "E-Commerce Platform", description: "Full-featured store with payment processing via Stripe, inventory management, admin panel, and email notifications.", tags: ["React", "Node.js", "Stripe", "MongoDB", "Redis"], category: "Full Stack", accent: "#0ea5e9", stats: { orders: "50K+", revenue: "$2M+", uptime: "99.8%" }, featured: true },
  { title: "DevOps Automation Suite", description: "CI/CD pipeline automation, container orchestration, and infrastructure as code. Reduced deployment time by 80%.", tags: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS"], category: "DevOps", accent: "#a855f7", stats: { deploys: "500+/day", time: "-80%", cost: "-40%" }, featured: true },
  { title: "Real-time Chat Application", description: "WebSocket-powered messaging platform with end-to-end encryption, file sharing, and channel management for teams.", tags: ["Socket.io", "React", "Node.js", "MongoDB"], category: "Full Stack", accent: "#f59e0b", stats: { users: "5K+", msgs: "1M+", latency: "< 50ms" }, featured: false },
  { title: "AI Code Review Tool", description: "GitHub integration that uses AI to automatically review pull requests, suggest improvements, and catch bugs.", tags: ["Python", "OpenAI API", "GitHub API", "FastAPI"], category: "Backend", accent: "#ec4899", stats: { reviews: "10K+", bugs: "99+", time: "-60%" }, featured: false },
  { title: "Component Library", description: "Open source React component library with 60+ accessible components, full TypeScript support, and comprehensive Storybook documentation.", tags: ["React", "TypeScript", "Storybook", "CSS-in-JS"], category: "Open Source", accent: "#00ff88", stats: { stars: "1.2K", comps: "60+", downloads: "50K/mo" }, featured: false },
  { title: "Portfolio Builder SaaS", description: "Drag-and-drop portfolio builder for developers and designers with custom domains, analytics, and theme customization.", tags: ["Next.js", "Supabase", "Stripe", "Vercel"], category: "Full Stack", accent: "#0ea5e9", stats: { users: "2K+", sites: "5K+", uptime: "99.9%" }, featured: false },
  { title: "API Rate Limiter", description: "Open source middleware for Express/Fastify with Redis backend, sliding window algorithms, and detailed analytics.", tags: ["Node.js", "Redis", "TypeScript", "npm"], category: "Open Source", accent: "#a855f7", stats: { stars: "800+", downloads: "100K/mo", pkgs: "2" }, featured: false },
  { title: "Landing Page Generator", description: "AI-powered landing page generator that creates optimized marketing pages from a simple description with A/B testing.", tags: ["React", "OpenAI", "Vercel Edge", "Tailwind"], category: "Frontend", accent: "#f59e0b", stats: { pages: "20K+", conv: "+35%", speed: "100/100" }, featured: false },
];

function GithubIcon() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>; }
function LinkIcon() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>; }

function ProjectCard({ p }: { p: typeof projects[0] }) {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div className="project-accent-bar" style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />
      <div className="project-card-inner">
        <div className="project-header">
          <span className="project-cat" style={{ color: p.accent }}>{p.category}</span>
          <div className="project-links">
            <a href="#" className="icon-btn-sm"><GithubIcon /></a>
            <a href="#" className="icon-btn-sm"><LinkIcon /></a>
          </div>
        </div>
        <h3 className="project-title">{p.title}</h3>
        <p className="project-desc">{p.description}</p>
        <div className="stats-mini" style={{ marginBottom: "16px" }}>
          {Object.entries(p.stats).map(([k, v]) => (
            <div key={k} className="stats-mini-item">
              <div className="stats-mini-val" style={{ color: p.accent }}>{v}</div>
              <div className="stats-mini-key">{k}</div>
            </div>
          ))}
        </div>
        <div className="project-tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? projects : projects.filter(p => p.category === cat);
  const featured = filtered.filter(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <div className="page-wrap">
      <section className="page-hero grid-bg">
        <div className="page-glow-right" />
        <div className="container">
          <div className="page-hero-inner">
            <Reveal>
              <span className="section-label">// my work</span>
              <h1 className="page-hero-title">Projects &amp; <span className="gradient-text">Case Studies</span></h1>
              <p className="page-hero-desc">{projects.length} projects crafted with passion. From side projects to production systems serving thousands of users.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="filter-bar">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(c => (
              <button key={c} className={`filter-tab${cat === c ? " active" : ""}`} onClick={() => setCat(c)}>
                {c}
                {c !== "All" && <span className="filter-count">{projects.filter(p => p.category === c).length}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: "64px 24px" }}>
        {featured.length > 0 && (
          <div style={{ marginBottom: "64px" }}>
            <Reveal><p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "32px" }}>Featured</p></Reveal>
            <div className="projects-grid">
              {featured.map((p, i) => <Reveal key={i} delay={i * 100}><ProjectCard p={p} /></Reveal>)}
            </div>
          </div>
        )}
        {rest.length > 0 && (
          <div>
            {featured.length > 0 && <Reveal><p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "32px" }}>All Projects</p></Reveal>}
            <div className="projects-grid">
              {rest.map((p, i) => <Reveal key={i} delay={i * 80}><ProjectCard p={p} /></Reveal>)}
            </div>
          </div>
        )}
        {filtered.length === 0 && <p style={{ textAlign: "center", padding: "96px 0", color: "var(--muted)" }}>No projects in this category yet.</p>}
      </div>
    </div>
  );
}

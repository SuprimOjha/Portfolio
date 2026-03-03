import Link from "next/link";
import Reveal from "./Reveal";

const projects = [
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time analytics platform with interactive charts, multi-tenant architecture, and role-based access control. Built for scale.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts"],
    accent: "#00ff88",
    category: "Full Stack",
    stats: { users: "10K+", uptime: "99.9%", speed: "< 200ms" },
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured store with payment processing, inventory management, and an admin panel. Processes thousands of orders daily.",
    tags: ["React", "Node.js", "Stripe", "MongoDB", "Redis"],
    accent: "#0ea5e9",
    category: "Full Stack",
    stats: { orders: "50K+", revenue: "$2M+", uptime: "99.8%" },
  },
  {
    title: "DevOps Automation Suite",
    description: "CI/CD pipeline automation, container orchestration, and infrastructure as code. Reduced deployment time by 80%.",
    tags: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "AWS"],
    accent: "#a855f7",
    category: "DevOps",
    stats: { deploys: "500+/day", time: "-80%", cost: "-40%" },
  },
];

function GithubIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>;
}
function LinkIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>;
}

export default function FeaturedProjects() {
  return (
    <section className="section-pad">
      <div className="container">
        <Reveal>
          <div className="fp-header">
            <div>
              <span className="section-label">// selected work</span>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <Link href="/projects" className="fp-view-all">
              View all projects
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 150}>
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
                  <div className="stats-mini">
                    {Object.entries(p.stats).map(([k, v]) => (
                      <div key={k} className="stats-mini-item">
                        <div className="stats-mini-val" style={{ color: p.accent }}>{v}</div>
                        <div className="stats-mini-key">{k}</div>
                      </div>
                    ))}
                  </div>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

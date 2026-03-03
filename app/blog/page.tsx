import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog | Alex Dev" };

const posts = [
  { title: "Building Scalable APIs with Node.js and Redis Caching", excerpt: "A deep dive into designing high-performance APIs that can handle millions of requests using intelligent caching strategies.", tags: ["Node.js", "Redis", "Performance"], date: "Feb 20, 2026", readTime: "8 min read", featured: true, accent: "#00ff88" },
  { title: "Next.js 15 App Router: Everything You Need to Know", excerpt: "Complete guide to the App Router, Server Components, and all the new features that make Next.js 15 a game-changer.", tags: ["Next.js", "React", "Web Dev"], date: "Feb 10, 2026", readTime: "12 min read", featured: true, accent: "#0ea5e9" },
  { title: "TypeScript Patterns That Changed How I Write Code", excerpt: "Five advanced TypeScript patterns I use daily that make code more maintainable, type-safe, and enjoyable to work with.", tags: ["TypeScript", "Patterns", "Best Practices"], date: "Jan 28, 2026", readTime: "6 min read", featured: true, accent: "#a855f7" },
  { title: "Docker and Kubernetes for Full Stack Developers", excerpt: "A practical guide to containerizing your Next.js applications and deploying them to Kubernetes without losing your sanity.", tags: ["Docker", "Kubernetes", "DevOps"], date: "Jan 15, 2026", readTime: "10 min read", featured: false, accent: "#f59e0b" },
  { title: "PostgreSQL Performance Optimization in 2026", excerpt: "Real-world techniques to optimize PostgreSQL queries, indexes, and configurations that I've learned from scaling production databases.", tags: ["PostgreSQL", "Database", "Performance"], date: "Jan 5, 2026", readTime: "9 min read", featured: false, accent: "#00ff88" },
  { title: "Building AI-Powered Features with the OpenAI API", excerpt: "Practical examples of integrating AI into your web applications using streaming responses, function calling, and RAG.", tags: ["AI", "OpenAI", "Node.js"], date: "Dec 20, 2025", readTime: "7 min read", featured: false, accent: "#ec4899" },
];

function ArrowIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
}

export default function BlogPage() {
  const featured = posts.filter(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <div className="page-wrap">
      <section className="page-hero grid-bg">
        <div className="page-glow-right" />
        <div className="container">
          <div className="page-hero-inner">
            <Reveal>
              <span className="section-label">// thoughts &amp; tutorials</span>
              <h1 className="page-hero-title">Tech <span className="gradient-text">Blog</span></h1>
              <p className="page-hero-desc">Deep dives, tutorials, and lessons learned from building production applications. Written for developers, by a developer.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: "64px 24px" }}>
        <Reveal>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "32px" }}>Featured Posts</p>
        </Reveal>

        <div className="blog-featured-grid">
          {featured.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <article className="card" style={{ display: "flex", flexDirection: "column", height: "100%", cursor: "pointer" }}>
                <div className="project-accent-bar" style={{ background: `linear-gradient(90deg, ${p.accent}, transparent)` }} />
                <div className="blog-card-inner">
                  <div className="blog-meta">
                    <span>{p.date}</span>
                    <span style={{ color: "var(--border)" }}>·</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="blog-title">{p.title}</h3>
                  <p className="blog-excerpt">{p.excerpt}</p>
                  <div className="blog-tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                  <div className="read-more" style={{ color: p.accent }}>
                    Read article <ArrowIcon />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", margin: "40px 0 24px" }}>More Articles</p>
        </Reveal>

        <div className="blog-list">
          {rest.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <article className="card blog-list-item">
                <div className="blog-list-bar" style={{ background: p.accent }} />
                <div className="blog-list-content">
                  <div className="blog-meta">
                    <span>{p.date}</span>
                    <span style={{ color: "var(--border)" }}>·</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="blog-list-title">{p.title}</h3>
                  <p className="blog-excerpt" style={{ marginBottom: "12px" }}>{p.excerpt}</p>
                  <div className="blog-tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                </div>
                <div style={{ color: p.accent, display: "flex", alignItems: "center", gap: "4px", fontSize: "0.875rem", flexShrink: 0 }}>
                  <ArrowIcon />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

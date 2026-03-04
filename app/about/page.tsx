import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "About | Suprim Dev" };

const timeline = [
  { year: "2024 – Present", role: "Senior Full Stack Engineer", company: "TechCorp Inc.", description: "Leading development of microservices architecture serving 1M+ users. Mentoring junior developers and driving technical decisions.", tags: ["Next.js", "TypeScript", "AWS", "Kubernetes"] },
  { year: "2022 – 2024", role: "Full Stack Developer", company: "StartupXYZ", description: "Built the core product from MVP to $10M ARR. Owned the entire stack from React frontend to Node.js APIs and PostgreSQL databases.", tags: ["React", "Node.js", "PostgreSQL", "Docker"] },
  { year: "2020 – 2022", role: "Frontend Developer", company: "Digital Agency Co.", description: "Developed responsive web applications for Fortune 500 clients. Focused on performance optimization and accessibility.", tags: ["React", "Vue.js", "SCSS", "Jest"] },
  { year: "2019 – 2020", role: "Junior Developer", company: "Freelance", description: "Started my journey building websites and small applications. Learned the fundamentals of web development and client communication.", tags: ["HTML", "CSS", "JavaScript", "PHP"] },
];

const values = [
  { icon: "🎯", title: "Precision", desc: "Every line of code is intentional. I optimize for clarity, performance, and maintainability." },
  { icon: "🚀", title: "Velocity", desc: "I move fast without breaking things, leveraging modern tooling and proven patterns." },
  { icon: "🤝", title: "Collaboration", desc: "Great software is built by great teams. I communicate clearly and lift everyone around me." },
  { icon: "📐", title: "Craft", desc: "I care deeply about both the code quality and the user experience it creates." },
];

export default function AboutPage() {
  return (
    <div className="page-wrap">
      {/* Hero */}
      <section className="page-hero grid-bg">
        <div className="page-glow-left" />
        <div className="container">
          <div className="about-hero-grid">
            <Reveal>
              <div>
                <span className="section-label">// about me</span>
                <h1 className="page-hero-title" style={{ textAlign: "left", fontSize: "clamp(36px,5vw,60px)" }}>
                  Passionate about <span className="gradient-text">building for the web</span>
                </h1>
                <p className="about-bio-text">I&apos;m Suprim, a full stack developer with 5+ years of experience turning complex problems into elegant digital solutions. I&apos;ve worked with early-stage startups and enterprise companies alike, always focused on shipping high-quality products that people love.</p>
                <p className="about-bio-text">When I&apos;m not coding, you can find me contributing to open source, writing technical articles, or exploring the latest in AI and cloud technologies.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ position: "relative" }}>
                <div className="code-visual">
                  <div className="code-visual-header">
                    <span className="code-dot" style={{ background: "#ff5f57" }} />
                    <span className="code-dot" style={{ background: "#febc2e" }} />
                    <span className="code-dot" style={{ background: "#28c840" }} />
                  </div>
                  <div className="code-body">
                    <div><span className="code-kw">const</span> <span className="code-var">Suprim</span> <span className="code-op">= &#123;</span></div>
                    <div className="code-indent"><span className="code-key">name</span><span className="code-op">: </span><span className="code-str">&quot;Alex Johnson&quot;</span><span className="code-op">,</span></div>
                    <div className="code-indent"><span className="code-key">role</span><span className="code-op">: </span><span className="code-str">&quot;Full Stack Dev&quot;</span><span className="code-op">,</span></div>
                    <div className="code-indent"><span className="code-key">location</span><span className="code-op">: </span><span className="code-str">&quot;San Francisco&quot;</span><span className="code-op">,</span></div>
                    <div className="code-indent"><span className="code-key">skills</span><span className="code-op">: [</span></div>
                    <div className="code-indent2"><span className="code-str">&quot;React&quot;</span><span className="code-op">, </span><span className="code-str">&quot;Node&quot;</span><span className="code-op">,</span></div>
                    <div className="code-indent2"><span className="code-str">&quot;TypeScript&quot;</span><span className="code-op">,</span></div>
                    <div className="code-indent2"><span className="code-str">&quot;PostgreSQL&quot;</span><span className="code-op">,</span></div>
                    <div className="code-indent"><span className="code-op">],</span></div>
                    <div className="code-indent"><span className="code-key">coffee</span><span className="code-op">: </span><span className="code-num">Infinity</span><span className="code-op">,</span></div>
                    <div className="code-indent"><span className="code-key">available</span><span className="code-op">: </span><span className="code-num">true</span></div>
                    <div><span className="code-op">&#125;;</span></div>
                  </div>
                </div>
                <div className="code-badge">5+ Years</div>
                <div className="code-badge2">50+ Projects</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad section-surface">
        <div className="container">
          <Reveal>
            <div className="section-header">
              <span className="section-label">// what drives me</span>
              <h2 className="section-title">Core Values</h2>
            </div>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="card value-card">
                  <div className="value-icon">{v.icon}</div>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: "800px" }}>
          <Reveal>
            <div className="section-header">
              <span className="section-label">// my journey</span>
              <h2 className="section-title">Experience Timeline</h2>
            </div>
          </Reveal>
          <div className="timeline">
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="timeline-item">
                  <div className="timeline-dot-wrap"><div className="timeline-dot" /></div>
                  <div className="card timeline-content">
                    <div className="timeline-header">
                      <div>
                        <div className="timeline-role">{item.role}</div>
                        <div className="timeline-company">{item.company}</div>
                      </div>
                      <span className="timeline-year">{item.year}</span>
                    </div>
                    <p className="timeline-desc">{item.description}</p>
                    <div className="timeline-tags">
                      {item.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

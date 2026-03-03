"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const roles = ["Python Developer","Full Stack Developer","React & Next.js Expert","Node.js Architect","Cloud Solutions Builder","TypeScript Enthusiast"];
const particles = [
  { x: "15%", y: "20%", size: 4, color: "#00ff88", dur: "7s", delay: "0s" },
  { x: "80%", y: "15%", size: 6, color: "#0ea5e9", dur: "9s", delay: "1s" },
  { x: "90%", y: "70%", size: 3, color: "#a855f7", dur: "6s", delay: "2s" },
  { x: "10%", y: "75%", size: 5, color: "#00ff88", dur: "11s", delay: "0.5s" },
  { x: "55%", y: "85%", size: 4, color: "#0ea5e9", dur: "8s", delay: "1.5s" },
  { x: "70%", y: "40%", size: 3, color: "#a855f7", dur: "10s", delay: "3s" },
];

export default function HeroSection() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const cur = roles[idx];
    let i = typing ? 0 : cur.length;
    const iv = setInterval(() => {
      if (typing) {
        i++; setDisplayed(cur.slice(0, i));
        if (i >= cur.length) { clearInterval(iv); setTimeout(() => setTyping(false), 2000); }
      } else {
        i--; setDisplayed(cur.slice(0, i));
        if (i <= 0) { clearInterval(iv); setIdx(p => (p + 1) % roles.length); setTyping(true); }
      }
    }, typing ? 60 : 30);
    return () => clearInterval(iv);
  }, [idx, typing, mounted]);

  return (
    <section className="hero grid-bg">
      <div className="hero-glow" />
      <div className="hero-center-glow" />

      {particles.map((p, i) => (
        <div key={i} className="particle" style={{ left: p.x, top: p.y, width: p.size, height: p.size, background: p.color, boxShadow: `0 0 ${p.size * 4}px ${p.color}`, "--dur": p.dur, "--delay": p.delay } as React.CSSProperties} />
      ))}

      <div className="corner-code" style={{ top: "96px", left: "32px" }}>
        {[`const dev = {`, `  name: "Suprim",`, `  type: "Full Stack",`, `  available: true`, `}`].map((l, i) => <div key={i}>{l}</div>)}
      </div>
      <div className="corner-code" style={{ bottom: "96px", right: "32px", textAlign: "right" }}>
        {[`// Currently working on`, `// next-gen web apps`, `// Open to opportunities`].map((l, i) => <div key={i}>{l}</div>)}
      </div>

      <div className="hero-content">
        <div className="status-badge" style={{ marginBottom: "32px", display: "inline-flex" }}>
          <span className="status-dot" />
          Available for freelance &amp; full-time roles
        </div>

        <h1 className="hero-name">
          Hi, I&apos;m <span className="gradient-text">Suprim</span>
        </h1>

        <div className="hero-role">
          <span className="hero-role-bracket">&lt;</span>
          <span className="hero-role-text">{displayed}</span>
          <span className="typing-cursor" />
          <span className="hero-role-bracket">/&gt;</span>
        </div>

        <p className="hero-desc">
          I craft high-performance web applications with clean architecture and delightful user experiences. From database design to polished frontends — I ship the full picture.
        </p>

        <div className="hero-actions">
          <Link href="/projects" className="btn-primary">View My Work</Link>
          <Link href="/contact" className="btn-outline">Get In Touch</Link>
          <a href="/resume.pdf" download className="hero-cv-link">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            Download CV
          </a>
        </div>

        <div className="hero-socials">
          {[
            { href: "https://github.com", label: "GitHub", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
            { href: "https://linkedin.com", label: "LinkedIn", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
            { href: "https://twitter.com", label: "Twitter", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-indicator-label">scroll</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  );
}

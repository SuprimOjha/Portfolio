"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const contactLinks = [
  { label: "Email", value: "alex@devportfolio.com", href: "mailto:alex@devportfolio.com", accent: "#00ff88", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  { label: "GitHub", value: "github.com/alexdev", href: "https://github.com", accent: "#0ea5e9", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
  { label: "LinkedIn", value: "linkedin.com/in/alexdev", href: "https://linkedin.com", accent: "#a855f7", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 2000);
  };

  return (
    <div className="page-wrap">
      <section className="page-hero grid-bg">
        <div className="page-glow-left" />
        <div className="container">
          <div className="page-hero-inner">
            <Reveal>
              <span className="section-label">// let&apos;s connect</span>
              <h1 className="page-hero-title">Get In <span className="gradient-text">Touch</span></h1>
              <p className="page-hero-desc">Have a project in mind? Want to collaborate? Or just want to say hi? My inbox is always open.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <Reveal>
              <div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, marginBottom: "16px" }}>Let&apos;s work together</h2>
                <p style={{ color: "var(--text-dim)", lineHeight: 1.7, marginBottom: "32px" }}>I&apos;m currently available for freelance projects, full-time roles, and interesting side projects. Response time is typically within 24 hours.</p>

                <div className="contact-info-links">
                  {contactLinks.map((c, i) => (
                    <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="contact-info-link">
                      <div className="contact-icon-wrap" style={{ color: c.accent, background: `${c.accent}10`, border: `1px solid ${c.accent}30` }}>{c.icon}</div>
                      <div>
                        <div className="contact-sublabel">{c.label}</div>
                        <div className="contact-val">{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="avail-box">
                  <div className="avail-header">
                    <span className="status-dot" />
                    <span className="avail-label">Currently Available</span>
                  </div>
                  <p className="avail-text">Open to full-time roles and freelance contracts starting April 2026.</p>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={200}>
              <div className="card contact-form-card">
                {status === "sent" ? (
                  <div className="send-success">
                    <div className="send-success-icon">✅</div>
                    <h3 className="send-success-title">Message Sent!</h3>
                    <p className="send-success-text">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                    <button className="btn-outline" onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}>Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700 }}>Send a Message</h2>
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-input" placeholder="John Doe" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-input" placeholder="john@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input type="text" className="form-input" placeholder="Project inquiry, job opportunity..." value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea className="form-input" rows={6} placeholder="Tell me about your project, timeline, budget..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} required style={{ resize: "none" }} />
                    </div>
                    <button type="submit" className="btn-primary btn-send" disabled={status === "sending"} style={{ opacity: status === "sending" ? 0.6 : 1 }}>
                      {status === "sending" ? (
                        <><span className="spinner" />Sending...</>
                      ) : (
                        <>Send Message <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

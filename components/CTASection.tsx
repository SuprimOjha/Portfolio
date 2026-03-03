import Link from "next/link";
import Reveal from "./Reveal";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-glow" />
      <div className="cta-inner">
        <Reveal>
          <div className="status-badge">
            <span className="status-dot" />
            Open to new opportunities
          </div>
          <h2 className="cta-title">
            Let&apos;s build something <span className="gradient-text">amazing</span> together
          </h2>
          <p className="cta-text">
            Whether you have a project in mind or just want to chat about tech, I&apos;d love to connect. Drop me a message and let&apos;s create something extraordinary.
          </p>
          <div className="cta-actions">
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
            <Link href="/projects" className="btn-outline">See My Work</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

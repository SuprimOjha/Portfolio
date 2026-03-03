import Reveal from "./Reveal";

const stats = [
  { value: "5+", label: "Years Experience", color: "var(--accent)" },
  { value: "50+", label: "Projects Shipped", color: "var(--accent-blue)" },
  { value: "30+", label: "Happy Clients", color: "var(--accent-purple)" },
  { value: "99%", label: "Client Satisfaction", color: "var(--accent)" },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="stat-item">
                <div className="stat-value" style={{ color: s.color, textShadow: `0 0 30px ${s.color}60` }}>{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

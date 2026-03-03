import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="logo">
              <div className="logo-icon">
                <span className="logo-icon-outer" />
                <span className="logo-icon-inner" />
              </div>
              <span className="logo-text">
                <span className="logo-white">Suprim</span>
                <span className="logo-accent">.dev</span>
              </span>
            </Link>
            <p className="footer-brand-text">Full Stack Developer building modern web applications that users love.</p>
          </div>
          <div>
            <p className="footer-col-title">Navigation</p>
            <div className="footer-nav-links">
              {links.map(l => <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="footer-col-title">Status</p>
            <div className="footer-status">
              <span className="status-dot" />
              <span className="footer-status-text">Available for work</span>
            </div>
            <p className="footer-location">Based in Nepal, Morang</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Suprim.dev </p>
          <p className="footer-made">
            Made with <span className="footer-heart">♥</span><span className="footer-coffee">by Suprim Ojha</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

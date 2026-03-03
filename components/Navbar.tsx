"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
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

        <nav className="nav-links">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`nav-link${pathname === l.href ? " active" : ""}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-cta">
          <Link href="/contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>
            Hire Me
          </Link>
        </div>

        <button className={`hamburger${open ? " open" : ""}`} onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={`nav-link${pathname === l.href ? " active" : ""}`}>{l.label}</Link>
            ))}
            <Link href="/contact" className="btn-primary" style={{ textAlign: "center", justifyContent: "center" }}>Hire Me</Link>
          </div>
        </div>
      )}
    </header>
  );
}

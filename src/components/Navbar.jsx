import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import "./Navbar.css";

const links = [
  ["About", "#about"], ["Skills", "#skills"], ["Experience", "#experience"],
  ["Projects", "#projects"], ["Education", "#education"], ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");
  const close = () => setOpen(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The current theme still works when browser storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => setTheme(current => current === "dark" ? "light" : "dark");

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={close} aria-label="Pratik Salunkhe home">
          <span className="brand-mark">P<span>.</span></span>
          <span>PRATIK SALUNKHE<small>SOFTWARE DEVELOPER</small></span>
        </a>
        <div className="nav-actions">
          <div className={`nav-links ${open ? "nav-links-open" : ""}`} id="primary-navigation">
            {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          </div>
          <button
            className={`theme-toggle ${theme === "light" ? "is-light" : ""}`}
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "light"}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className="theme-toggle-thumb" aria-hidden="true" />
            <span className={`theme-toggle-icon ${theme === "light" ? "is-active" : ""}`} aria-hidden="true"><Sun size={15} /></span>
            <span className={`theme-toggle-icon ${theme === "dark" ? "is-active" : ""}`} aria-hidden="true"><Moon size={15} /></span>
          </button>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-controls="primary-navigation" aria-expanded={open}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

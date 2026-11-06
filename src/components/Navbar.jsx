import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import "./Navbar.css";

const links = [
  ["About", "#about"], ["Skills", "#skills"], ["Experience", "#experience"],
  ["Projects", "#projects"], ["Education", "#education"], ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={close} aria-label="Pratik Salunkhe home">
          <span className="brand-mark">P<span>.</span></span>
          <span>PRATIK SALUNKHE<small>SOFTWARE DEVELOPER</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={close}>{label}</a>)}
          {/* <a className="nav-cta" href={`mailto:${personalInfo.email}`} onClick={close}>Let’s talk <ArrowUpRight size={15} /></a> */}
        </div>
      </nav>
    </header>
  );
}

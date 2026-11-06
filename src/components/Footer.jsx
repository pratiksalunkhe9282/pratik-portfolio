import { ArrowUp, Heart } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="footer-brand" href="#home">P<span>.</span></a>
        <p>Designed & built with <Heart size={13} /> by {personalInfo.name}</p>
        <span className="footer-copy">© {new Date().getFullYear()} · ALL RIGHTS RESERVED</span>
        <a className="back-top" href="#home" aria-label="Back to top"><ArrowUp size={17} /></a>
      </div>
    </footer>
  );
}

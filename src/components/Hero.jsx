import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { PROFILE_IMAGE, personalInfo } from "../data/portfolioData";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero section-pad" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
          <p className="hero-kicker">HELLO, I'M</p>
          <h1>Pratik<br /><span>Salunkhe.</span></h1>
          <h2>Software Developer <i>·</i> MERN Stack</h2>
          <p className="hero-intro">{personalInfo.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-outline" href="#contact">Get in touch</a>
          </div>
          <div className="hero-socials">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
            <span><MapPin size={16} /> {personalInfo.location}</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="profile-frame">
            {PROFILE_IMAGE ? <img src={PROFILE_IMAGE} alt="Pratik Salunkhe" /> : (
              <div className="profile-placeholder"><span>PS</span><small>YOUR PHOTO HERE</small></div>
            )}
          </div>
          <div className="floating-card card-top"><Sparkles size={16} /><span>Curious mind.<br />Builder mindset.</span></div>
          <div className="floating-card card-bottom"><span className="mini-code">{"</>"}</span><span>Building for<br /><b>the web</b></span></div>
          {/* <div className="hero-index">01 <span> / 07</span></div> */}
        </div>
      </div>
      <a className="scroll-cue" href="#about"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
    </section>
  );
}

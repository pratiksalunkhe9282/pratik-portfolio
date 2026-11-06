import { ArrowUpRight, Code2, Layers3, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data/portfolioData";
import "./About.css";

const traits = [
  { icon: Code2, title: "Frontend craft", text: "Responsive layouts and reusable UI components." },
  { icon: Layers3, title: "Full-stack thinking", text: "Connecting interfaces, APIs and data." },
  { icon: Rocket, title: "Always learning", text: "Exploring tools and improving with every build." },
];

export default function About() {
  return (
    <section className="section-pad section" id="about">
      <div className="container">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Developer by skill.<br /><span className="accent-text">Problem-solver by nature.</span></>} description="A quick introduction to the person behind the code." />
        <div className="about-layout">
          <div className="about-copy">
            <p>{personalInfo.about}</p>
            <a className="text-link" href="#contact">Let’s build something <ArrowUpRight size={16} /></a>
          </div>
          <div className="trait-grid">
            {traits.map(({ icon: Icon, title, text }) => (
              <article className="trait-card" key={title}><Icon size={21} /><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
        <div className="about-note"><span>MY APPROACH</span><p>Stay curious. Keep it simple. Make it useful.</p><span className="note-line" /></div>
      </div>
    </section>
  );
}

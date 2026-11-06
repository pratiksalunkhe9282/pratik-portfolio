import { Braces, Database, Globe2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolioData";
import "./Skills.css";

const groups = [
  { name: "Frontend", icon: Globe2, note: "Interfaces & experiences" },
  { name: "Backend", icon: Braces, note: "Server-side development" },
  { name: "Database", icon: Database, note: "Data & persistence" },
];

export default function Skills() {
  return (
    <section className="section-pad section section-alt" id="skills">
      <div className="container">
        <SectionHeading eyebrow="MY TOOLKIT" title={<>Technologies I <span className="accent-text">work with.</span></>} description="A growing toolkit across frontend, backend and database technologies." />
        <div className="skill-groups">
          {groups.map(({ name, icon: Icon, note }) => (
            <article className="skill-group" key={name}>
              <div className="skill-group-head"><div className="skill-icon"><Icon size={20} /></div><div><h3>{name}</h3><p>{note}</p></div></div>
              <div className="skill-chips">{skills.filter(s => s.group === name).map(skill => <span key={skill.name}>{skill.name}</span>)}</div>
            </article>
          ))}
        </div>
        <p className="skills-footnote"><span /> I believe strong fundamentals and consistent practice matter more than the size of a tech stack.</p>
      </div>
    </section>
  );
}

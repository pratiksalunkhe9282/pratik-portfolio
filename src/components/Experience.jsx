import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "../data/portfolioData";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="section-pad section" id="experience">
      <div className="container">
        <SectionHeading eyebrow="WHERE I'VE GROWN" title={<>Experience that <span className="accent-text">moves me forward.</span></>} description="Learning by doing, collaborating and building practical skills." />
        <div className="experience-list">
          {experiences.map((item, index) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-index"><span>0{index + 1}</span><div /></div>
              <div className="experience-main">
                <div className="experience-top"><div><p className="experience-period">{item.period}</p><h3>{item.role}</h3><h4><BriefcaseBusiness size={15} /> {item.company}</h4></div>{item.current && <span className="current-label">CURRENT</span>}</div>
                <p className="experience-description">{item.description}</p>
                <div className="experience-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <ArrowUpRight className="experience-arrow" size={20} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

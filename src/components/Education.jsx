import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolioData";
import "./Education.css";

export default function Education() {
  return (
    <section className="section-pad section" id="education">
      <div className="container">
        <SectionHeading eyebrow="THE FOUNDATION" title={<>Learning that shaped <span className="accent-text">my path.</span></>} description="The academic foundation behind my interest in technology and problem-solving." />
        <article className="education-card">
          <div className="education-icon"><GraduationCap size={30} /></div>
          <div className="education-content">
            <span className="education-label">BACHELOR'S DEGREE</span>
            <h3>{education.degree}</h3>
            <h4>{education.college}</h4>
            <div className="education-meta"><span><MapPin size={15} /> {education.location}</span><span><CalendarDays size={15} /> {education.period}</span></div>
          </div>
          <div className="education-stamp">2025<br /><small>GRADUATE</small></div>
        </article>
      </div>
    </section>
  );
}

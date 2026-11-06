import { ArrowUpRight, Code2, ExternalLink, FolderCode } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolioData";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="section-pad section section-alt" id="projects">
      <div className="container">
        <SectionHeading eyebrow="SELECTED WORK" title={<>Things I've <span className="accent-text">worked on.</span></>} description="A look at a project where I turned requirements into a practical user experience." />
        <div className="project-list">
          {projects.map(project => (
            <article className="project-card" key={project.number}>
              <div className="project-art">
                <div className="project-art-top"><span>CASE STUDY / {project.number}</span><FolderCode size={18} /></div>
                <div className="hospital-ui">
                  <div className="mock-sidebar"><b>H+</b><i /><i /><i /><i /></div>
                  <div className="mock-content">
                    <div className="mock-welcome">Good morning <b>👋</b></div>
                    <div className="mock-sub">Hospital overview</div>
                    <div className="mock-stats"><span /><span /><span /></div>
                    <div className="mock-chart"><div /><div /><div /><div /><div /><div /><div /></div>
                    <div className="mock-row"><span /><span /><span /></div>
                    <div className="mock-row"><span /><span /><span /></div>
                  </div>
                </div>
                <div className="project-art-caption">PATIENT CARE · MADE SIMPLER</div>
              </div>
              <div className="project-info">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="contribution"><span>MY CONTRIBUTION</span><p>{project.contribution}</p></div>
                <ul className="project-highlights">{project.highlights.map(point => <li key={point}><span>↗</span>{point}</li>)}</ul>
                <div className="project-bottom">
                  <div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Open live project"><ExternalLink size={17} /></a>}
                    {project.codeUrl && <a href={project.codeUrl} target="_blank" rel="noreferrer" aria-label="Open source code"><Code2 size={17} /></a>}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="project-note"><ArrowUpRight size={16} /> More projects will be added as I keep building.</p>
      </div>
    </section>
  );
}


import { Experience, useResumeContext } from "./resume-context";
import "./resume.css"
import ExperienceComponent from "./Experience-component";

export default function Resume() {
    const resumeCtx = useResumeContext();

  return (
    <div className="resume">
        <div className="name">{resumeCtx.resume.name.first} {resumeCtx.resume.name.last}</div>
        <div className="location">{resumeCtx.resume.location}</div>
        <div className="email">{resumeCtx.resume.email}</div>
        {resumeCtx.resume.Experience.map(
            (exp:Experience, index:Number) => (
                <ExperienceComponent exp={exp}/>
            )
        )}
    </div>
  )
}


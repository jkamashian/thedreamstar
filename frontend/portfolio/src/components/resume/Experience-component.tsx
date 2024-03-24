import { useResumeContext, Experience } from "./resume-context";
import "./resume.css"
export default function ExperienceComponent(exp:Experience) {
    const resumeCtx = useResumeContext();

  return (
    <div className="Experience">
      
       {exp.companyName}
       {exp.Role}
       {exp.Start}
       {exp.Start}
    </div>
  )
}

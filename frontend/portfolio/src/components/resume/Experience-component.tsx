import React from "react"; // Import React
import { Experience } from "./resume-context"; // Assuming this is where Experience type is defined
import "./resume.css";

// Define a type for the props expected by ExperienceComponent
interface ExperienceComponentProps {
  exp: Experience;
}

// Destructure `exp` from props
export default function ExperienceComponent({ exp }: ExperienceComponentProps) {
  // There's no need to use resumeCtx here unless it's for something not shown

  return (
    <div className="Experience">
      <div>{exp.companyName}</div>
      <div>{exp.Role}</div>
      <div>{exp.Start}</div>
      <div>{exp.End}</div>
    </div>
  );
}

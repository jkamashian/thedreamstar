export enum SelectedPage {
    AboutMe = "aboutme",
    Experiences = "experiences",
    Projects = "projects",
  }

export interface Education {
  schoolName: string; // Change to schoolName
  major: string;
  graduationYear: string;
  degree: string;
}

export interface ExperienceType {
  companyName: string;
  logo: string;
  link: string;
  note: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  location: string;
  bullets: string[];
  skills: string[];
  images: string[];
}

export interface ProjectType {
  name: string;
  logo: string;
  link: string;
  description: string;
  youtube: string;
  skills: string[];
  images: string[];
}

export interface Profile {
  name: string;
  photo: string; // Change to photo
  logo: string;
  location: string;
  linkedin: string;
  github: string;
  summery: string; // Change to summary
  education: Education;
  experiences: ExperienceType[];
  projects: ProjectType[];
}
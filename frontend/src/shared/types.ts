export enum SelectedPage {
    AboutMe = "aboutme",
    Experiences = "experiences",
    projects = "projects",
  }

export interface ExperienceType {
  companyName: string,
  logo: string,
  link:string,
  jobTitle: string,
  summery:string,
  startDate: string,
  endDate: string,
  location:string,
  bullets: string[],
  skills: string[]
  images: string[]
}
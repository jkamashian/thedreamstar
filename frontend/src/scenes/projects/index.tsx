import { SelectedPage, Profile, ProjectType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Resume from "@/assets/resume.json"
import Project from "./Project";
import imageMap from "@/shared/ImageMap";
const resumeData: Profile = Resume as Profile
const projects = resumeData.projects

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };
const Projects = ({setSelectedPage}: Props) => {
  return (
    <section id="projects" className="mx-auto min-h-full w-5/6 p-20">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}>
            <div>
                <HText>Projects</HText>
                <p className="my-5 text-sm">
                Prior work experience listed by date.
                </p>
            </div>
        </motion.div>
        {/*Prior Experience */}
        {projects.map((project: ProjectType)=>(
            <Project
            key={project.name}
            name={project.name}
            logo={imageMap[project.logo]}
            link={project.link}
            description={project.description}
            youtube={project.youtube}
            skills={project.skills}
            images={project.images}
            />
            )
        )}
    </section>
  )
}

export default Projects
import { motion } from "framer-motion";
import { SelectedPage, ExperienceType, Profile } from "@/shared/types";
import HText from "@/shared/HText";
import Experience from "./Experience";
import Resume from "@/assets/resume.json"
const resumeData: Profile = Resume as Profile

const experiences = resumeData.experiences


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Experiences = ({setSelectedPage}: Props) => {
  return (<section
  id="experiences"
  className="mx-auto min-h-full w-5/6 p-20"
  >
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Experiences)}>
      <div>
        <HText> Work Experience</HText>
        <p className="my-5 text-sm">
          Prior work experience listed by date.
        </p>

      </div>
    </motion.div>
    {/*Prior Experience */}
    {experiences.map((experience: ExperienceType)=>(
      <Experience
        key={experience.companyName}
        companyName={experience.companyName}
        logo={experience.logo}
        link={experience.link}
        jobTitle={experience.jobTitle}
        startDate={experience.startDate}
        endDate={experience.endDate}
        location={experience.location}
        bullets={experience.bullets}
        skills={experience.skills}
        images={experience.images}
      />
    ))}

  </section>)
}

export default Experiences;
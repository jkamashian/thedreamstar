import { motion } from "framer-motion";
import { SelectedPage, ExperienceType } from "@/shared/types";
import HText from "@/shared/HText";
import Experience from "./Experience";

import RakutenLogo from '@/assets/rakuten.png';
import VerysLogo from '@/assets/verys.png';

const experiences: Array<ExperienceType> = [
  {
    companyName:"Rakuten Advertising",
    logo: RakutenLogo,
    link: "https://rakutenadvertising.com/",
    jobTitle: "Senior Software Engineer",
    summery: "AdTech, OpenRTB ad exchange server",
    startDate:"Mar 2022",
    endDate:"Present",
    location: "Salt Lake City, UT (Remote)",
    bullets:[
      "Bolstered the development and maintenance on an OpenRTB ad exchange server, coding in Go, and deployed on GCP servers.",
      "Expertly integrated multiple third-party demand partners into our platform, significantly enhancing revenue streams and broadening market reach.",
      "Pioneered a pivotal migration from JSON-based messaging to a more efficient GRPC in Pub/Sub, achieving over 30% cost reduction in messaging and storage.",
      "Mentored peers in software development best practices, fostering a collaborative and knowledge-sharing environment despite not having direct reports.",
      "Managed projects using Scrum and Kanban methodologies, ensuring agile and efficient workflow management",
    ],
    skills:["Go", "Docker", "MySQL", "Aerospike", "CircleCI", "Open RTB", "Google Cloud Platform (GCP)"],
    images: [],
  },
  {
    companyName:"Verys",
    logo: VerysLogo,
    link: "https://www.linkedin.com/company/verys/about/",
    jobTitle: "Lead Senior Software Developer",
    summery: "adtech, OpenRTB ad exchange server",
    startDate:"Mar 2022",
    endDate:"Present",
    location: "Salt Lake City, UT (Remote)",
    bullets:[
      "Played a key role in shaping company policy and conducting employee performance evaluations, driving organizational excellence and development.",
      "Crafted and executed comprehensive employee training programs, significantly enhancing team productivity and fostering skill advancement.",
      "Spearheaded the development of innovative prototypes and projects, contributing to company expansion and elevating client satisfaction levels.",
    ],
    skills:["Back-End Web Development", "Team Management", "Team Leadership", "Training", "CircleCI", "Interviewing", "Project Planning"],
    images: [],
  },
] 

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
        summery={experience.summery}
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
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from"@heroicons/react/24/solid";
import HText from "@/shared/HText";

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

  </section>)
}

export default Experiences;
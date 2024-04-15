import { useState } from 'react';

import { Profile, ExperienceType, ProjectType } from '@/shared/types';

function getUniqueSkills(resumeData: Profile): string[] {
    // Extract skills from experiences
    const experienceSkills = resumeData.experiences.flatMap((exp: ExperienceType) => exp.skills);
    // Extract skills from projects
    const projectSkills = resumeData.projects.flatMap((proj: ProjectType) => proj.skills);
    // Combine all skills into a single array
    const allSkills = [...experienceSkills, ...projectSkills];
    // Use Set to get unique values and convert back to array
    const uniqueSkills = Array.from(new Set(allSkills));
    return uniqueSkills;
}



type Props = {
    resumeData: Profile,
  }

function Skills({resumeData}:Props) {
    const [uniqueSkills] = useState(() => getUniqueSkills(resumeData));    
  return (
    <div className="flex w-full items-center justify-between gap-8 ">
       <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Skills:</h4>
          <div className="flex flex-wrap">
            {uniqueSkills.map((skill: string, index: number) => (
              <span key={index} className="inline-block py-1 px-2 rounded-lg bg-gray-200 mr-2 mb-2">{skill}</span>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Skills
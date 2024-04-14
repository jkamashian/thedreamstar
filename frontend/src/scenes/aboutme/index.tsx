import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import { motion } from "framer-motion";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Logos from './Logos';

import HeadShot from '@/assets/headshot.png';
import BigLogo from '@/assets/jakebiglogo.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const AboutMe = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")


  return (
    <section
    id="aboutme"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/* Main Image inside header */}
        <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-3/4'
            onViewportEnter={()=> setSelectedPage(SelectedPage.AboutMe)}>
            {/* Main header */}
            <div className='z-10 mt-32 md:basis-3/5'>
                {/* Headings */}
                <div   className='md:-mt-20'>
                <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition= {{duration:0.5}}
                        variants={{
                            hidden: { opacity:0, y:-50},
                            visible: {opacity: 1, y:0},
                        }}
                    >
                        <div className='relative'>
                            <div className='before:absolute before:-top-10 before:left-20 before:z-[-1]'>
                                <img alt='{Jacob Kamashian}' src={BigLogo}/>
                            </div>
                        </div>
                    </motion.div>
                
                    
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition= {{duration:0.5}}
                        variants={{
                            hidden: { opacity:0, x:-50},
                            visible: {opacity: 1, x:0},
                        }}
                    >
                        <p className='mt-8 text-md md:text-start'>
                            Results-driven Senior Software Engineer with over 10 years of experience in software development, project management, and team leadership. 
                            Proficient in delivering high-quality, scalable software solutions while collaborating effectively with cross-functional teams. 
                            Committed to meeting deadlines, driving business results, and mentoring junior colleagues through strong technical expertise, effective communication, and problem-solving skills.
                        </p>
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount:0.5}}
                        transition= {{duration:0.5}}
                        variants={{
                            hidden: { opacity:0, y:50},
                            visible: {opacity: 1, y:0},
                        }}
                    >
                        <div className=' p-4'>
                            <div className='flex items-center gap-4'>
                                <AcademicCapIcon className='h-12 w-12 rounded-full' />
                                <div>
                                    <p className='font-semibold'>Bachelor of Computer Science </p>
                                    <p className='text-sm text-gray-600'>Game Software Development</p>
                                    <p className='text-sm text-gray-500'>Westwood College 2010</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    
                </div>
                {/* ACTIONS */}
            </div>
            {/* Image */}
            <motion.div 
                className='md:-mt-20'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition= {{duration:0.5}}
                variants={{
                    hidden: { opacity:0, x:+50},
                    visible: {opacity: 1, x:0},
                }}
                >
                <img className="py-8" alt='{Jacob Kamashian}' src={HeadShot}/>
            </motion.div>
        </motion.div>
        {/* Tech Icons */}
        {isAboveMediumScreens && (
                <div className='h-[150px] w-full bg-primary-100 py-8'>
                    <div className='mx-auto w-5/6'>
                        <div className="flex w-full items-center justify-between gap-8">
                            <Logos/>
                        </div>
                    </div>
                </div>
            )}
    </section>
  )
}

export default AboutMe
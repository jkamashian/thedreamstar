import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import { motion } from "framer-motion";

import HeadShot from '@/assets/headshot.png';
import BigLogo from '@/assets/jakebiglogo.png';

import GoLogo from '@/assets/gologo.png';
import JsLogo from '@/assets/jslogo.png';
import PythonLogo from '@/assets/pythonlogo.png';
import RedisLogo from '@/assets/redislogo.png';
import AwsLogo from '@/assets/awslogo.png';
import GitLogo from '@/assets/gitlogo.png';
import MongoDbLogo from '@/assets/mongodb.png';
import SplunkLogo from '@/assets/splunk.png';
import TsLogo from '@/assets/typescript.png';
import DockerLogo from '@/assets/dockerlogo.png';
import SeleniumLogo from '@/assets/seleniumlogo.png';

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
        <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
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
                        <div className='
                        before:absolute before:-top-20 before:left-20 before:z-[-1]  
                        md:before:content-gogopher '>
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
                        <p className='mt-8 text-sm md:text-start'>
                    Results-driven Senior Software Engineer with over 10 years of experience in software development, project management, and team leadership. 
                    Proficient in delivering high-quality, scalable software solutions while collaborating effectively with cross-functional teams. 
                    Committed to meeting deadlines, driving business results, and mentoring junior colleagues through strong technical expertise, effective communication, and problem-solving skills.
                    </p>
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
                <img alt='{Jacob Kamashian}' src={HeadShot}/>
            </motion.div>
        </motion.div>
        {/* Tech Icons */}
        {isAboveMediumScreens && (
                <div className='h-[150px] w-full bg-primary-100 py-10'>
                    <div className='mx-auto w-5/6'>
                        <div className="flex w-full items-center justify-between gap-8">
                            <img alt='Python logo' src={PythonLogo}/>
                            <img alt='Go logo' src={GoLogo}/>
                            <img alt='Splunk logo' src={DockerLogo}/>
                            <img alt='Redis logo' src={RedisLogo}/>
                            <img alt='Aws logo' src={AwsLogo}/>
                            <img alt='Git logo' src={GitLogo}/>
                            <img alt='js logo' src={JsLogo}/>
                            <img alt='js logo' src={TsLogo}/>
                            <img alt='Mongo logo' src={MongoDbLogo}/>
                            <img alt='Splunk logo' src={SplunkLogo}/>
                            <img alt='Selenium logo' src={SeleniumLogo}/>
                        </div>
                    </div>
                </div>
            )}
    </section>
  )
}

export default AboutMe
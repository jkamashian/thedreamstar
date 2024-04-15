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
import ReactLogo from '@/assets/react.png';
import UnityLogo from '@/assets/unitylogo.png';

import { useState } from 'react';

const logosList = [
    GoLogo,
    JsLogo,
    PythonLogo,
    RedisLogo,
    AwsLogo,
    GitLogo,
    MongoDbLogo,
    SplunkLogo,
    TsLogo,
    DockerLogo,
    SeleniumLogo,
    ReactLogo,
    UnityLogo
];
// I wanted to shuffle the logos to keep the clutter down but still show skills
const shuffleArray = (array:string[]) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

function Logos() {
    const [shuffledLogos] = useState(() => shuffleArray(logosList).slice(0, 10));    
  return (
    <div className="h-16 flex w-full items-center justify-between gap-8">
        {shuffledLogos.map((logo: string, index: number) => (
            <img key={index} alt={`Logo ${index}`} src={logo} className='max-h-full max-w-full' />
        ))}
    </div>
  )
}

export default Logos
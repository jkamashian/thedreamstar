import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    name: string;
    logo: string;
    link: string;
    description: string;
    youtube: string;
    skills: string[];
    images: string[];
}

const Project = ({
    name,
    logo,
    link,
    description,
    youtube,
    skills,
    images,
}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/src/assets//${logo})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 15px top 20px',
    };
  return (
        <div className="mt-5 rounded-md border border-gray-300 p-6 text-left shadow-lg relative" style={isAboveMediumScreens ? backgroundImageStyle:undefined}>
        <div>
        {isAboveMediumScreens ? (
            <div className="mb-4">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-primary-500 hover:underline">{name}</a>
            </div> 
        ) : (
            <div className="mb-4 text-center">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-primary-500 hover:underline">
                <img src={`/src/assets/${logo}`} alt={name} className="mx-auto mb-2" />
                {name}
            </a>
            </div>
        )}
        
        <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Project Description:</h4>
            <p className="list-disc list-outside pl-5">
                {description}
            </p>
        </div>
        {youtube !== "" && (
        <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Video:</h4>
            <div className="flex justify-center">
      
            <iframe
                src={youtube}
                title={name}
                frameBorder="0"
                allowFullScreen
                width="420" 
                height="345"
            ></iframe>
            </div>
        </div>
        )}

        
        <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Skills Utilized:</h4>
            <div className="flex flex-wrap">
            {skills.map((skill: string, index: number) => (
                <span key={index} className="inline-block py-1 px-2 rounded-lg bg-gray-200 mr-2 mb-2">{skill}</span>
            ))}
            </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
            {images.map((image: string, index: number) => (
            <img key={index} src={image} alt={`Image ${index}`} className="rounded-lg" />
            ))}
        </div>
        </div>
    </div>
  )
}

export default Project
import useMediaQuery from "@/hooks/useMediaQuery";
type Props = {
  companyName: string,
  logo: string,
  link:string,
  jobTitle: string,
  startDate: string,
  endDate: string,
  location:string,
  bullets: string[],
  skills: string[]
  images: string[]
}

function Experience({
  companyName,
  logo,
  link,
  jobTitle,
  startDate,
  endDate,
  location,
  bullets,
  skills,
  images,
}: Props) {
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
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-primary-500 hover:underline">{companyName}</a>
          </div> 
        ) : (
          <div className="mb-4 text-center">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-primary-500 hover:underline">
              <img src={`/src/assets/${logo}`} alt={companyName} className="mx-auto mb-2" />
              {companyName}
            </a>
          </div>
        )}
        <h3 className="text-xl font-bold mb-2">{jobTitle}</h3>
        <div className="flex mb-4 text-sm text-gray-600">
          <div className="mr-4">
            <p className="text-gray-600">{location}</p>
            <p><span className="font-semibold">Start Date:</span> {startDate}</p>
            <p><span className="font-semibold">End Date:</span> {endDate}</p>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Responsibilities:</h4>
          <ul className="list-disc list-outside pl-5">
            {bullets.map((bullet: string, index: number) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>
        </div>
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
  );
}

export default Experience
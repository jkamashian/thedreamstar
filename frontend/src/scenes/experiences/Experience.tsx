type Props = {
  companyName: string,
  logo: string,
  link:string,
  jobTitle: string,
  summery:string,
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
  summery,
  startDate,
  endDate,
  location,
  bullets,
  skills,
  images,
}: Props) {
  return (
    <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
              <a href={link}>
                <img src={`${logo}`}/>
                <h4 className="font-bold">{companyName}</h4>
              </a>
            </div>
        </div>
        
        <h4 className="font-bold">{jobTitle}</h4>
        <p>{summery}</p>
        <p>{startDate}</p>
        <p>{endDate}</p>
        <p>{location}</p>
        <ul>
          {bullets.map((bullet: string, index: number) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        <ul>
          {skills.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        {images.map((image: string, index: number) => (
          <img key={index} src={image}/>
        ))}
      
    </div>
  )
}

export default Experience
import Navbar from "@/scenes/navbar"
import AboutMe from "@/scenes/aboutme"
import Experiences from "@/scenes/experiences"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types";


function App() {
  const[selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.AboutMe);
  const[isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect (
    () => {
      const handleScroll = () => {
        if(window.scrollY === 0){
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.AboutMe);
        }else{
          setIsTopOfPage(false);
        }
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, []
  );
  return (
    <div className='app bg-gray-20 bg-gray-50'>
      <Navbar
        isTopOfPage={isTopOfPage} 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <AboutMe setSelectedPage={setSelectedPage}/>
      <Experiences setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App

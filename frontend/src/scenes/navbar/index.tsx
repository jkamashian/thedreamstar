import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import LinkedIn from "@/assets/LinkedIn.png"
import Github from "@/assets/github.png"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    isTopOfPage: boolean
    selectedPage: SelectedPage;
    setSelectedPage: (value:SelectedPage) => void;
}
const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    // applies  flex tailwind icon aligns horizon and vert
    const flexBetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "": "bg-primary-100 drop-shadow"
    return (
        <nav>
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`} >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-4`}>
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <a href="https://github.com/jkamashian" target="_blank">
                                    <img alt="github" src={Github}/>
                                </a>
                                <div className={`${flexBetween} gap-8 mx-auto w-3/6`}>
                                    
                                    <Link 
                                        page="About Me"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Experiences"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link 
                                        page="Projects"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                <a href="https://www.linkedin.com/in/jacobkamashian/" target="_blank">
                                    <img alt="github" src={LinkedIn}/>
                                </a>
                                </div>
                            </div>
                        ) : (
                            <div className={`${flexBetween} w-full `}>
                                <a href="https://github.com/jkamashian" target="_blank">
                                    <img alt="github" src={Github}/>
                                </a>
                                <a href="https://www.linkedin.com/in/jacobkamashian/" target="_blank">
                                    <img alt="github" src={LinkedIn}/>
                                </a>
                                <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={()=> setMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                            </div>
                            
                        )}
                    </div>
                </div>
            </div>
            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/*close icon */}
                    <div className="flex justify-end p-12">
                        <button onClick={()=> setMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-x w-6 text-gray-400"/>
                        </button>
                    </div>
                    {/*Menu Items */}
                    <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                        <Link 
                            page="About Me"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Experiences"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link 
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>

                </div>
            )}
        </nav>
        )
}

export default Navbar
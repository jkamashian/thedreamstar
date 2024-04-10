import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page: string;
    selectedPage: string;
    setSelectedPage: (value:SelectedPage) => void;
}

function Link({
    page, 
    selectedPage, 
    setSelectedPage,
  }: Props) {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; // converts the page to the enum type
  return (
    <AnchorLink
      className={`
      ${selectedPage === lowerCasePage ? "text-primary-500" : ""}
      transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
        {"{"+page+"}"}
    </AnchorLink>
  )
}

export default Link

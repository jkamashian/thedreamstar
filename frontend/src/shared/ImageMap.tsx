import verys from "@/assets/verys.png";
import verisys from "@/assets/verisys.png";
import zenimax from "@/assets/zmilogo.png";
import sqa from "@/assets/sqa.png";
import aofl from "@/assets/aofl.png";
import firstam from "@/assets/firstam.png";
import rakuten from "@/assets/rakuten.png";
import midigator from "@/assets/midigator.png"
import reactIcon from "@/assets/react.png"
import goIcon from "@/assets/gologo.png"
import unityIcon from "@/assets/unity.png"

// this is a temporary solution to deal with the way that react creates builds 
interface ImageMapType {
    [key: string]: string;
  }

  
  const imageMap: ImageMapType = {
    'verys.png': verys,
    'verisys.png': verisys,
    'zmilogo.png': zenimax,
    'sqa.png': sqa,
    'aofl.png': aofl,
    'firstam.png': firstam,
    'midigator.png': midigator,
    'rakuten.png': rakuten,
    'react.png': reactIcon,
    'gologo.png': goIcon,
    'unity.png': unityIcon
  };

export default imageMap;
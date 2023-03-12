import style from "./OfferIcon.module.css"
import {OfferIconProps} from "@/types"

const OfferIcon: React.FunctionComponent<OfferIconProps> = ({logo, alt}) => {
  
  function getImgPath(path: string) {
    return `./images${path.split('./images')[1]}`
  }

  return (
    <img className={style['offer--icon'] } src={getImgPath(logo)} alt={alt} />
  )
}

export default OfferIcon

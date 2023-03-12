import style from "./OfferIcon.module.css"

function OfferIcon({logo, alt}) {
  
  function getImgPath(path) {
    return `./images${path.split('./images')[1]}`
  }

  return (
    <img className={style['offer--icon'] } src={getImgPath(logo)} alt={alt} />
  )
}

export default OfferIcon

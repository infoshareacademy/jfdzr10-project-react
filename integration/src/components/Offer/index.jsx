import style from "./Offer.module.css"
import OfferIcon from "@/components/OfferIcon"
import CompanyName from "@/components/CompanyName"
import OfferTitle from "@/components/OfferTitle"
import OfferDetails from "@/components/OfferDetails"
import OfferTools from "@/components/OfferTools"

function Offer({offer}) {
  

  return (
    <div className={style.offer}>
      <OfferIcon logo={offer.logo} alt={offer.company}/>
      <div className={style['offer--deatils']}>
        <CompanyName name={offer.company} />
        <OfferTitle title={offer.position} />
        <OfferDetails postedAt={offer.postedAt} contract={offer.contract} location={offer.location} />
      </div>
      <OfferTools tools={[...offer.languages, ...offer.tools]} />
    </div>
  )
}

export default Offer

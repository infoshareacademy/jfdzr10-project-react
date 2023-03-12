import Offer from "../Offer"


function OffersList({offers}) {
  

  return (
    <>
      {offers.map(offer => <Offer offer={offer}/>)}
    </>
  )
}

export default OffersList

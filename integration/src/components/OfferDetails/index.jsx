
function OfferDetails({postedAt, contract, location}) {

  return (
    <span>
      {`${postedAt} ${contract} ${location}`}
    </span>
  )
}

export default OfferDetails

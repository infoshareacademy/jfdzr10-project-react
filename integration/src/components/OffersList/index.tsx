import Offer from "../Offer";
import { OffersListProps } from "@/types";

const OffersList: React.FunctionComponent<OffersListProps> = ({ offers }) => {
  return (
    <>
      {offers.map((offer) => (
        <Offer offer={offer} />
      ))}
    </>
  );
};

export default OffersList;

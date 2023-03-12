import { OfferDetailsProps } from "@/types";

const OfferDetails: React.FunctionComponent<OfferDetailsProps> = ({
  postedAt,
  contract,
  location,
}) => {
  return <span>{`${postedAt} ${contract} ${location}`}</span>;
};

export default OfferDetails;

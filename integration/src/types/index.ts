type CompanyNameProps = {
  name: string;
}

type Offer = {
  id: number
  company: string
  new: boolean
  logo: string
  featured: string
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: Array<string>
  tools: Array<string>
}

type OfferProps = {
  offer: Offer
}

type OfferDetailsProps = {
  postedAt: string
  contract: string
  location: string
}

type OfferIconProps = {
  logo: string
  alt: string
}

type OffersListProps = {
  offers: Array<Offer>
}

type OfferTitleProps = {
  title: string
}

type OfferToolsProps = {
  tools: Array<string>
}

type ToolProps = {
  toolName: string
}

export {
  type CompanyNameProps,
  type OfferProps,
  type Offer,
  type OfferDetailsProps,
  type OfferIconProps,
  type OffersListProps,
  type OfferTitleProps,
  type OfferToolsProps,
  type ToolProps,
}
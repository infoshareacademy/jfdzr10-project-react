import Tool from "@components/Tool"

function OfferTools({tools}) {
  

  return (
    <span>
      {tools.map(tool => <Tool toolName={tool} />)}
    </span>
  )
}

export default OfferTools

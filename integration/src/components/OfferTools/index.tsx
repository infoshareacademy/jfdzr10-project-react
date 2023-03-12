import Tool from "@/components/Tool";
import { OfferToolsProps } from "@/types";

const OfferTools: React.FunctionComponent<OfferToolsProps> = ({ tools }) => {
  return (
    <span>
      {tools.map((tool) => (
        <Tool toolName={tool} />
      ))}
    </span>
  );
};

export default OfferTools;

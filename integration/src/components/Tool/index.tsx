import { ToolProps } from "@/types";

const Tool: React.FunctionComponent<ToolProps> = ({ toolName }) => {
  return <span>{toolName}</span>;
};

export default Tool;

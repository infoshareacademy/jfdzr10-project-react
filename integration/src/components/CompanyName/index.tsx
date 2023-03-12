import style from "./CompanyName.module.css";
import { CompanyNameProps } from "@/types";

const CompanyName: React.FunctionComponent<CompanyNameProps> = ({ name }) => {
  return <span className={style["company-name"]}>{name}</span>;
};

export default CompanyName;

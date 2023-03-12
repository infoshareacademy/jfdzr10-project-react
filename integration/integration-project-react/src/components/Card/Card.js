import style from "./Card.module.css";
import { Tags } from "../Tags/Tags.js";
import { Logo } from "../Logo/Logo.js";
import { Company } from "../Company/Company.js";
import { Info } from "../Info/Info.js";
import { Position } from "../Position/Position.js";

export const Card = (props) => {
  return (
    <>
      <div className="style.card">
        <Logo src={props.logo} alt="Logo of company" />
        <div>
          <Company company={props.company} />
          <Position position={props.position} />
          <Info info={props.info} />
        </div>
        <div>
          <Tags tags={props.tags} />
        </div>
      </div>
    </>
  );
};

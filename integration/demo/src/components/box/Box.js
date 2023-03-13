import style from './Box.module.css';

import { Logo } from '../logo/Logo';
import { Tags } from '../tags/Tags';
import { Company } from '../company/Company';
import { Info } from '../info/Info';
import { Position } from '../position/Position';

export const Box = (props) => {
  return (
    <div className={style.box}>
      <Logo src={props.logo} alt={`Logo of company ${props.company}`} />
      <div className={style.box2}>
        <Company company={props.company} />
        <Position position={props.position} />
        <Info info={props.info} />
      </div>
      <div className={style.tagsBox}>
        <Tags tags={props.tags} />
      </div>
    </div>
  );
};


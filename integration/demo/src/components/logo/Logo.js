import style from './Logo.module.css';

export const Logo = (props) => {
  return <img className={style.logo} src={`../images/${props.src}`} alt={props.alt} />;
};

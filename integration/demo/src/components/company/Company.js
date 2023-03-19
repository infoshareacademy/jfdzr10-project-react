import style from './Company.module.css';

export const Company = (props) => {
  return (
    <>
      <h1 className={style.Company}>{props.company}</h1>
    </>
  );
};

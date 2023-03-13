import style from './Position.module.css';

export const Position = (props) => {
  return (
    <>
      <h2 className={style.Position}>{props.position}</h2>
    </>
  );
};


import style from './Tags.module.css';

export const Tags = (props) => {
  return (
    <div className={style.tagsBox}>
      {props.tag &&
        props.tags.map((item, i) => {
          return (
            <div className={style.tags} key={i}>
              {item}
            </div>
          );
        })}
    </div>
  );
};

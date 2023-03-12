export const Tags = (props) => {
  return (
    <div>
      {props.tags.map((e, i) => {
        return <div key={i}>{e}</div>;
      })}
    </div>
  );
};

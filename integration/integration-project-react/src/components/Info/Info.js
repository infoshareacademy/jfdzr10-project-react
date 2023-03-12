export const Info = (props) => {
  return (
    <>
      <div>
        <p>{props.info.contract}</p>
        <p>{props.info.postedAt}</p>
        <p>{props.info.location}</p>
      </div>
    </>
  );
};

import style from "./JobInfo.module.css";

export const JobInfo = ({ postedAt, contract, location }) => {
	return (
		<div className={style.info}>
			<p>{postedAt}</p> - <p>{contract}</p> - <p>{location}</p>
		</div>
	);
};

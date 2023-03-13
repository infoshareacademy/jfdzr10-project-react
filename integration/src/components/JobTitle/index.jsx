import style from "./JobTitle.module.css";

export const JobTitle = ({ title }) => {
	return <h2 className={style.title}>{title}</h2>;
};

import style from "./Company.module.css";

export const Company = ({ company, children }) => {
	return (
		<h3 className={style.header}>
			{company} {children}
		</h3>
	);
};

import style from "./TagsList.module.css";

export const TagsList = ({ tags }) => {
	return (
		<ul className={style.list}>
			{tags.map((tag) => (
				<li key={crypto.randomUUID()} className={style.listItem}>
					{tag}
				</li>
			))}
		</ul>
	);
};

import style from "./ListItem.module.css";
import { Wrapper } from "../Wrapper";
import { ImageComponent } from "../ImageComponent";
import { Company } from "../Company";
import { NewLabel } from "../NewLabel";
import { JobTitle } from "../JobTitle";
import { JobInfo } from "../JobInfo";
import { TagsList } from "../TagsList";

export const ListItem = ({
	company,
	isNew,
	logo,
	title,
	postedAt,
	contract,
	location,
	tags,
}) => {
	return (
		<li className={style.listItem}>
			<Wrapper>
				<ImageComponent logo={logo} />
				<div>
					<Company company={company}>{isNew && <NewLabel />}</Company>
					<JobTitle title={title} />
					<JobInfo
						postedAt={postedAt}
						contract={contract}
						location={location}
					/>
				</div>
			</Wrapper>
			<div>
				<TagsList tags={tags} />
			</div>
		</li>
	);
};

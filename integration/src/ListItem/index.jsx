import style from "./ListItem.module.css";
import { Wrapper } from "../Wrapper";
import { ImageComponent } from "../ImageComponent";
import { Company } from "../Company";
import { NewLabel } from "../NewLabel";

export const ListItem = ({ company, isNew }) => {
	return (
		<li className={style.listItem}>
			<Wrapper>
				<ImageComponent />
				<div>
					<Company company={company}>{isNew && <NewLabel />}</Company>
					<h2>Junior Frontend Developer</h2>
					<div>
						<span>2d ago</span>
						<span>Part Time</span>
						<span>USA only</span>
					</div>
				</div>
			</Wrapper>
			<div>
				<ul>
					<li>Fontend</li>
					<li>Junior</li>
					<li>React</li>
				</ul>
			</div>
		</li>
	);
};

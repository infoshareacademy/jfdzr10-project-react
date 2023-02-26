import { StyledListItem } from "./ListItem.styled";

const ListItem = ({ name, email }) => {
	return (
		<StyledListItem>
			{name} - {email}
		</StyledListItem>
	);
};

export default ListItem;

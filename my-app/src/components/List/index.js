import ListItem from "../ListItem";
import { StyledList } from "./List.styled";

const List = ({ list }) => {
	const renderList = () =>
		list.map((item) => (
			<ListItem key={item.id} name={item.name} email={item.email} />
		));

	return <StyledList>{renderList()}</StyledList>;
};

export default List;

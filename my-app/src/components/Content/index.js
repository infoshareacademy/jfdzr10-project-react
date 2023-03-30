import { StyledContent } from "./Content.styled";
// import List from "../List";
// import { users } from "../../data/users";

const Content = ({ children }) => {
	return (
		<StyledContent>
			{/* <List list={users} /> */}
			{children}
		</StyledContent>
	);
};

export default Content;

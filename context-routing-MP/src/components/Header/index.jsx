import { Link } from "react-router-dom";
import { Styled } from "./Header.style";

export const StyledHeader = () => {
	return (
		<Styled.StyledHeader>
			<Styled.StyledList>
				<Styled.StyledListItem>
					<Link to="/">Home</Link>
				</Styled.StyledListItem>
				<Styled.StyledListItem>
					<Link to="/about">About</Link>
				</Styled.StyledListItem>
				<Styled.StyledListItem>
					<Link to="/posts">Posts</Link>
				</Styled.StyledListItem>
				<Styled.StyledListItem>
					<Link to="/add">Add Post</Link>
				</Styled.StyledListItem>
			</Styled.StyledList>
		</Styled.StyledHeader>
	);
};

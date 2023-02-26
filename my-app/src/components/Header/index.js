import { StyledHeader, StyledHeading } from "./Header.styled";

const Header = ({ title }) => {
	return (
		<StyledHeader>
			<StyledHeading>{title}</StyledHeading>
		</StyledHeader>
	);
};

export default Header;

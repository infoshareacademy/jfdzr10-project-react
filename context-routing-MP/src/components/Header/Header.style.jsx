import styled from "styled-components";

const StyledHeader = styled.header`
	padding: 32px;
`;

const StyledList = styled.ul`
	list-style-type: none;
	padding: 0;
`;

const StyledListItem = styled.li`
	margin-bottom: 16px;
	padding: 16px;

	a {
		text-decoration: none;
	}
`;

export const Styled = { StyledHeader, StyledList, StyledListItem };

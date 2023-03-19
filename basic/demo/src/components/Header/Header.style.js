import styled from 'styled-components';

export const StyledHeader = styled.header`
    background: ${({isDarkMode}) => isDarkMode ? '#000' : '#fff'};
`;

export const StyledH = styled.h1`
    font-size: 30px;
`;
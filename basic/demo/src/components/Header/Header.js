import { StyledHeader, StyledH } from "./Header.style";


export const Header = ({ title, handleSwitchTheme, isDarkMode }) => {
    return (
        <StyledHeader isDarkMode={isDarkMode}>
            <StyledH>
                {title}
            </StyledH>
            <button onClick={handleSwitchTheme}>
                SWITCH
            </button>
        </StyledHeader>
    )
}

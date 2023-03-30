import { StyledFooter } from "./Footer.styled";

const getCurrentYear = new Date().getFullYear();

const Footer = ({ text1, text2 }) => {
	return (
		<StyledFooter>
			{text1} {getCurrentYear}. {text2}
		</StyledFooter>
	);
};

export default Footer;

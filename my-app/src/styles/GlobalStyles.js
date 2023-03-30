import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 62.5%;
}

*,
*:before,
*:after {
	box-sizing: inherit;
	margin: 0;
	padding: 0;
}

body {
	font-family: "Montserrat", sans-serif;
	font-size: 1.6rem;
	font-weight: 400;
	color: black;
	background-color: white;
	height: 100vh;
	width: 100%;
}

`;
export default GlobalStyles;

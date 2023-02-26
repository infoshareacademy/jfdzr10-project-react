import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import Header from "./Components/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${({ isDark }) => (isDark ? "#000" : "#fff")};
  color: ${({ isDark }) => (isDark ? "#fff" : "#000")};
`;

const date = new Date();
const dateFormat =
  date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const changeMode = () => setDarkMode(!darkMode);
  return (
    <Wrapper onClick={changeMode} isDark={darkMode}>
      <Header />
      <Content />
      <Footer date={dateFormat} />
    </Wrapper>
  );
}

export default App;

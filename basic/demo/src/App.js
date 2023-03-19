import { useState } from 'react';
import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { List } from './components/List/List';
import { Footer } from './components/Footer/Footer';
import { TEXTS } from './helper/translations';
import { PEOPLE_LIST } from './helper/peopleList';

const StyledWrapper = styled.div`
  background: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#fff')};
  color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSwitchTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <StyledWrapper isDarkMode={isDarkMode}>
      <Header title={TEXTS.TITLE} handleSwitchTheme={handleSwitchTheme} isDarkMode={isDarkMode} />
      <Content text={TEXTS.CONTENT} />
      <List list={PEOPLE_LIST} />
      <Footer text1={TEXTS.FOOTER.TEXT1} text2={TEXTS.FOOTER.TEXT2} />
    </StyledWrapper>
  );
}

export default App;

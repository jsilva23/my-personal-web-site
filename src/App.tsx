import { Fragment } from 'react';
import Section from './components/Section';
import SideBar from './components/SideBar';
import GlobalStyle from './styles/GlobalStyle';
import { Main } from './styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main>
        <SideBar />
        <Section />
      </Main>
    </Fragment>
  );
}

export default App;

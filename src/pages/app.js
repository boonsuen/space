import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const StyledApp = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => (
  <StyledApp>
    <Sidebar />
    <Content />
  </StyledApp>
);

export default App;
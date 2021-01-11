import { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const StyledApp = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => {
  const [contextMenuState, setContextMenuState] = useState({
    visible: false,
    clickX: null,
    clickY: null,
    selectedTodo: null
  });

  const handleClick = event => {
    console.log(event.target.className);
    if (event.target.className === 'contextMenu--option') {
      setContextMenuState({
        visible: false,
        clickX: null,
        clickY: null,
        selectedTodo: null
      });
    } else if (contextMenuState.visible) {
      setContextMenuState({
        visible: false,
        clickX: null,
        clickY: null,
        selectedTodo: null
      });
    }
  };

  return (
    <StyledApp onClick={handleClick}>
      <Sidebar />
      <Content
        contextMenuState={contextMenuState} 
        setContextMenuState={setContextMenuState}
      />
    </StyledApp>
  );
};

export default App;
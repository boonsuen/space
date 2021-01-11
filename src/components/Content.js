import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Item from './Item';
import AddTodoButton from './AddTodoButton';
import ContextMenu from './ContextMenu';
import useLocalStorage from '../hooks/useLocalStorage';

import img_sort from '../assets/img/sort.svg';
import img_dotsHorizontal from '../assets/img/dots-horizontal.svg';

const StyledContent = styled.div`
  display: flex;
  flex-basis: 0%;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 50px 55px;
  overflow-y: scroll;
`;

const TodoWrapper = styled.div`
  background: #fff;
  max-width: 750px;
  width: 100%;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {    
    background-image: linear-gradient(135deg, #2454FF 0%, rgb(151 18 255 / 67%) 70%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
  }
`;

const HeaderActions = styled.div`
  display: flex;

  button {
    background: none;
    margin-left: 12px;
  }
`;

const Todos = styled.div``;

const Content = props => {
  const [hasMounted, setHasMounted] = useState(false);
  const [todos, setTodos] = useLocalStorage('todos', []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    console.log('props.contextMenuState', props.contextMenuState);
    if (props.contextMenuState.visible) {
      const root = document.getElementById('itemContextMenu');
      root.style.display = 'block';
      const clickX = props.contextMenuState.clickX;
      const clickY = props.contextMenuState.clickY;
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;
      const rootW = root.offsetWidth;
      const rootH = root.offsetHeight;
            
      const right = (screenW - clickX) > rootW;
      const left = !right;
      const top = (screenH - clickY) > rootH;
      const bottom = !top;
      
      if (right) {
        root.style.left = `${clickX + 5}px`;
      }
      
      if (left) {
        root.style.left = `${clickX - rootW - 5}px`;
      }
      
      if (top) {
        root.style.top = `${clickY + 5}px`;
      }
      
      if (bottom) {
        root.style.top = `${clickY - rootH - 5}px`;
      }
    }
  }, [props.contextMenuState]);

  // TODO: improve handleScroll
  const handleScroll = event => {
    if (props.contextMenuState.visible) {
      props.setContextMenuState({
        visible: false,
        clickX: null,
        clickY: null
      });
    }
  };

  if (!hasMounted) {
    return null;
  }  
    
  return (
    <StyledContent onScroll={handleScroll}>
      <TodoWrapper>
        <Header>
          <h1>Todo</h1>
          <HeaderActions>
            <button type="button">
              <img src={img_sort} alt="Sort" />
            </button>
            <button type="button">
              <img src={img_dotsHorizontal} alt="Todo options" />
            </button>
          </HeaderActions>
        </Header>
        <Todos>
          {todos.map((todo, idx) => (
            <Item 
              todo={todo} 
              key={`todo-${idx}`} 
              setContextMenuState={props.setContextMenuState} 
            />
          ))}          
          <AddTodoButton todos={todos} setTodos={setTodos} />      
        </Todos>
      </TodoWrapper>    
      <ContextMenu 
        contextMenuState={props.contextMenuState}
        setContextMenuState={props.setContextMenuState}
      />
    </StyledContent>
  );
};

export default Content;
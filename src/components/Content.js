import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddTodoButton from './AddTodoButton';
import useLocalStorage from '../hooks/useLocalStorage';

import img_sort from '../assets/img/sort.svg';
import img_dotsHorizontal from '../assets/img/dots-horizontal.svg';
import img_check from '../assets/img/check.svg';

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

const Item = styled.div`
  display: flex; 
  align-items: center;
  padding: 12px 0; 
  border-bottom: 1px solid #E4E4E4;
  color: #202020;
`;

const Checkbox = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #000;
  transition: background 10s;
  margin-right: 15px;

  &:hover {
    background: linear-gradient(135deg, #6CFFFF 0%, #6C95FF 100%);
    border-radius: 50%;

    img {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CheckboxInner = styled.div`
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 50%;

  img {
    transition: opacity 0.1s, transform 0.2s;
    opacity: 0;
    transform: translateY(3px);
  }
`;

const TodoContent = styled.div``;

const Content = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [todos, setTodos] = useLocalStorage('todos', []);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
    
  return (
    <StyledContent>
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
        <div className="todo_items">
          {todos.map((todo, idx) => (
            <Item role="button" tabIndex="0" key={`todo-${idx}`}>
              <Checkbox>
                <CheckboxInner className="flex-center">
                  <img src={img_check} alt="Check" />
                </CheckboxInner>            
              </Checkbox>
              <TodoContent>
                {todo}
              </TodoContent>
            </Item>
          ))}          
          <AddTodoButton todos={todos} setTodos={setTodos} />      
        </div>
      </TodoWrapper>    
    </StyledContent>
  );
};

export default Content;
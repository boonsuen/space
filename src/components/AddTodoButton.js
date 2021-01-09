import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import img_add from '../assets/img/add.svg';

const StyledAddTodoButton = styled.button`
  width: 100%;
  justify-content: flex-start;
  padding: 12px 0;
  color: #0F7DFF;
  background: none;
  border-bottom: ${props => props.isEditing 
    ? '1px solid #99C2FF' 
    : '1px solid #fff'};
  transition: border-bottom 0.2s ease-out;  

  img {
    margin-right: 15px;
    padding-bottom: 1px;
  }
`;

const Checkbox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #696F7B;
  transition: background 10s;
  margin-right: 15px;
`;

const CheckboxInner = styled.div`
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 50%;
`;

const Input = styled.input`
  flex: 1;
  padding-left: 0;
  font-size: 16px;
  border: none;
  background: none;
  box-shadow: none;
  border-radius: 0;  
  color: #202020;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.isEditing ? '#696F7B' : '#0F7DFF'};
    transition: color 0.2s ease-out;
  }
`;

const Actions = styled.div`
  display: flex;
  margin-top: 16px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Add = styled.button`
  background-color: #4966FF;
  animation: ${fadeIn} ease-out 0.3s;
  color: #fff;
  width: 67px;
  height: 34px;
  margin-right: 10px;
  border-radius: 3px;

  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.0, 1.0);
  transform: translateZ(0);
`;

const Cancel = styled.button`
  background: none;
  animation: ${fadeIn} ease-out 0.5s;
  padding: 0 4px;
  color: #696F7B;
  transition: all 0.2s;

  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.0, 1.0);
  transform: translateZ(0);

  &:hover {
    color: #23375E;
  }
`;

const AddTodoButton = props => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoContent, setTodoContent] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    props.setTodos(props.todos.concat(todoContent));
    setTodoContent('');
  };

  const handleChange = event => {
    setTodoContent(event.target.value);
  };

  const handleClick = actionType => event => {
    if (actionType === 'EDIT') {
      setIsEditing(true);
    } else if (actionType === 'CANCEL') {
      setIsEditing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledAddTodoButton
        type="button"
        onClick={handleClick("EDIT")}
        isEditing={isEditing}
      >
        {isEditing ? (
          <Checkbox className="flex-center">
            <CheckboxInner></CheckboxInner>
          </Checkbox>
        ) : (
          <img src={img_add} alt="Add" />
        )}
        <Input
          aria-label="Add a task"
          type="text"
          maxLength="255"
          placeholder="Add a task"
          tabIndex="-1"
          isEditing={isEditing}
          value={todoContent}
          onChange={handleChange}
        />
      </StyledAddTodoButton>
      {isEditing && (
        <Actions>
          <Add type="submit">Add</Add>
          <Cancel onClick={handleClick("CANCEL")}>Cancel</Cancel>
        </Actions>
      )}
    </form>
  ); 
  // isEditing ?
  // <div className="baseAdd addTask">
  //   <button className="baseAdd-icon" type="button" aria-label="Add a task">
  //     <i className="icon fontIcon ms-Icon ms-Icon--Add iconSize-24" aria-hidden="true"></i>
  //   </button>
  //   <input 
  //     id="baseAddInput-addTask" 
  //     className="baseAdd-input chromeless" 
  //     aria-label="Add a task" 
  //     aria-describedby="baseAddInput-addTask-description" 
  //     type="text" 
  //     maxLength="255" 
  //     placeholder="Add a task" 
  //     tabIndex="-1" 
  //     defaultValue="hello" 
  //   />
  // </div>
};

export default AddTodoButton;
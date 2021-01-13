import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { StyledEditTodoModal } from './Modal';
import MarkAsCompletedButton from './MarkAsCompletedButton';

import img_close from '../assets/img/close.svg';

const CloseModalButton = styled.button`
  margin: 0 0 20px auto;
  background: none;
`;

const ModalInput = styled.input`
  line-height: 40px;
  width: 100%;
  height: 40px;
  border: 1px solid #F2F2F2;
  font-size: 16px;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
  border-radius: 4px;
  transition: all 200ms;
  margin-bottom: 15px;
  background-color: #F2F2F2;

  &:focus {
    border-color: #889fff;
    background-color: #fcfcff;
    outline: none;
  }
`;

const EditContentActions = styled.div`
  display: flex;
  margin-bottom: 25px;
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

const Save = styled.button`
  cursor: ${props => !props.enabled && 'not-allowed'};
  background-color: ${props => props.enabled ? '#2C80FF' : '#83B4FF'};
  animation: ${fadeIn} ease-out 0.3s;
  color: #fff;
  width: 67px;
  height: 34px;
  margin-right: 10px;
  border-radius: 3px;
  transition: background-color 0.2s;

  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.0, 1.0);
  transform: translateZ(0);

  &:hover {
    background-color: ${props => props.enabled && '#0066FF'};
  }
`;

const Cancel = styled.button`
  background: none;
  padding: 0 4px;
  color: #696F7B;
  transition: color 0.2s;

  &:hover {
    color: #23375E;
  }
`;

const TodoActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 3px;
  background-color: #FFF6E4;
`;

const EditContentForm = ({ todo, editTodo }) => {
  const [todoContent, setTodoContent] = useState(todo.content);  
  const [isNewTodoContent, setIsNewTodoContent] = useState(false);
  const modalInputRef = useRef(null);

  const handleTodoContentChange = event => {
    setTodoContent(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (isNewTodoContent) {
      editTodo('EDIT_CONTENT', todo.id, { newContent: todoContent });
      setIsNewTodoContent(false);
      modalInputRef.current.blur();
    }
  };

  const handleCancel = event => {
    setTodoContent(todo.content);
  };

  useEffect(() => {
    setIsNewTodoContent(todoContent !== todo.content);
  }, [todoContent]);

  return (
    <form onSubmit={handleSubmit}>
      <ModalInput
        aria-label="Add a task"
        type="text"
        maxLength="255"
        tabIndex="-1"
        value={todoContent}
        onChange={handleTodoContentChange}
        ref={modalInputRef}
      />
      <EditContentActions>
        <Save enabled={isNewTodoContent} type="submit">Save</Save>
        {isNewTodoContent && 
          <Cancel onClick={handleCancel} type="button">Cancel</Cancel>
        }
      </EditContentActions>
    </form>
  );
};

const EditTodoModal = ({ 
  todo, 
  editTodo,
  handleDeleteTodo, 
  showEditTodoModal, 
  closeEditTodoModal 
}) => {
  return (
    <StyledEditTodoModal
      isOpen={showEditTodoModal}
      onRequestClose={closeEditTodoModal}
      contentLabel="Edit Todo Modal"
      closeTimeoutMS={200}
    >
      <CloseModalButton onClick={closeEditTodoModal} type="button">
        <img src={img_close} alt="Close Modal" />
      </CloseModalButton>
      <EditContentForm 
        todo={todo} 
        editTodo={editTodo}
        closeEditTodoModal={closeEditTodoModal}
      />       
      <TodoActions>
        <MarkAsCompletedButton />
        <DeleteButton type="button" onClick={handleDeleteTodo(todo.id)}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Delete task</title>
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4H3.5C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" 
              fill="#FF5252"
            />
          </svg>
        </DeleteButton>
      </TodoActions>             
    </StyledEditTodoModal>
  );
};

export default EditTodoModal;
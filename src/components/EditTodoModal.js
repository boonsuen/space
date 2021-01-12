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
  transition: all 300ms;
  margin-bottom: 20px;
  background-color: #F2F2F2;

  &:focus {
    border-color: #889fff;
    background-color: #fcfcff;
    outline: none;
  }
`;

const Actions = styled.div`
  display: flex;
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

const EditTodoModal = ({ showEditTodoModal, closeEditTodoModal }) => {

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
      <form onSubmit={event => {
        event.preventDefault();
      }}>
        <ModalInput
          aria-label="Add a task"
          type="text"
          maxLength="255"
          placeholder=""
          tabIndex="-1"
          value={'Build the Space App MVP'}
          onChange={() => {}}
        />
        <Actions>
          <Save type="submit">Save</Save>
          <Cancel type="button">Cancel</Cancel>
        </Actions>
        <MarkAsCompletedButton />
      </form> 
      <button type="button">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title>Delete task</title>
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4H3.5C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" 
            fill="#FF5252"
          />
        </svg>
      </button>        
    </StyledEditTodoModal>
  );
};

export default EditTodoModal;
import styled from 'styled-components';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const ReactModalAdapter = ({ className, ...props }) => {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <Modal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      closeTimeoutMS={200}
      {...props}
    />
  );
};

const BaseModal = styled(ReactModalAdapter)`
  .ReactModal__Overlay {
    position: fixed; 
    top: 0px; 
    left: 0px; 
    right: 0px; 
    bottom: 0px; 
    background-color: rgba(3, 53, 153, 0.1);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }

  .ReactModal__Content {
    opacity: 0;
    transform: translate(-50%, -60%);
  }

  .ReactModal__Content--after-open {
    opacity: 1;
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    transform: translate(-50%, -50%);
  }

  .ReactModal__Content--before-close {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
`;
 
const StyledEditTodoModal = styled(BaseModal)`
  &__content {
    position: absolute; 
    top: 50%; 
    left: 50%; 
    right: auto; 
    bottom: auto; 
    background: rgb(255, 255, 255); 
    overflow: auto; 
    border-radius: 10px; 
    outline: none;
    margin-right: -50%; 
    padding: 28px;
    max-width: 590px;
    width: 90%;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(188, 196, 215, 0.5);

    -webkit-backface-visibility: hidden;
    -webkit-transform: translateZ(0) scale(1.0, 1.0);
    transform: translateZ(0);
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;

export { StyledEditTodoModal };
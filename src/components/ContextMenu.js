import React from 'react';
import styled from 'styled-components';

import img_edit from '../assets/img/edit.svg';

const StyledContextMenu = styled.div`
  position: fixed;
  background: white;
  box-shadow: 0px 3px 12px rgb(0 0 0 / 9%);
  border-radius: 4px;
  z-index: 1;
  display: none;
  
  .contextMenu--option {
    display: flex;
    align-items: center;
    padding: 12px 20px 12px 12px;
    min-width: 150px;
    cursor: pointer;
    user-select: none;
    transition: background 0.2s, color 0.3s;
    &:hover {
      background: rgb(248 249 251);
    }
    &:first-child {
      border-bottom: 1px solid #EFF1F4;
    }
    &:last-child svg path {
      transition: fill 0.3s;
    }
    &:last-child:hover {
      color: #FF3838;

      svg path {
        fill: #FF5252 !important;
      }
    }

    img, svg {
      margin-right: 10px;
    }
  }
`;

const ContextMenu = props => {
  const handleDelete = event => {

  };

  return (
    props.contextMenuState.visible && 
      <StyledContextMenu id="itemContextMenu">
        <div className="contextMenu--option">
          <img src={img_edit} alt="Edit" />
          Edit task
        </div>
        <div className="contextMenu--option" onClick={handleDelete}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4H3.5C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" 
            fill="#000C1F"
          />
        </svg>
          Delete task
        </div>
      </StyledContextMenu>
  );
};

export default ContextMenu;
import styled from 'styled-components';

import img_check from '../assets/img/check.svg';

const StyledItem = styled.div`
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

export default function Item({ todo }) {
  return (
    <StyledItem role="button" tabIndex="0">
      <Checkbox>
        <CheckboxInner className="flex-center">
          <img src={img_check} alt="Check" />
        </CheckboxInner>            
      </Checkbox>
      <TodoContent>
        {todo}
      </TodoContent>
    </StyledItem>
  );
}
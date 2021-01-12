import styled from 'styled-components';

import img_check from '../assets/img/check.svg';

const StyledMarkAsCompletedButton = styled.button`
  padding: 14px 11px;
  border: 1px solid #3E51FF;
  border-radius: 4px;
  background-color: #fff;
  color: #202020;
`;

const Checkbox = styled.div`
  min-width: 18px;
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

const MarkAsCompletedButton = () => {
  return (
    <StyledMarkAsCompletedButton type="button">
      <Checkbox className="flex-center">
        <CheckboxInner className="flex-center">
          <img src={img_check} alt="Check" />
        </CheckboxInner>            
      </Checkbox>  
      Mark as completed
    </StyledMarkAsCompletedButton>
  );
};

export default MarkAsCompletedButton;
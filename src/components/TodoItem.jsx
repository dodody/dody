import React from 'react';
import styled, {css} from 'styled-components'
import {MdDone, MdDelete} from 'react-icons/md'

const TodoItem = ({id, done,text}) => {
  return (
    <TodoItemStyle>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove><MdDelete /></Remove>
    </TodoItemStyle>
  );
};

const Remove = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightgray;
  font-size: 24px;
  cursor: pointer;
  &:hover{
    color: red;
  }
`;

const TodoItemStyle = styled.div`
  display: flex;
  align-items: center;
  &:hover{
    ${Remove}{
      opacity: 1;
    }
  }
`;


const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid lightgray;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props => props.done && css`
    border: 1px solid #38d9a9;
    color: #38d9a9;
  `}
`;

const Text = styled.div`
  flex: 1;
  color: #333;
  ${props => props.done && css`
    color: #999;
  `}
`;

export default TodoItem;
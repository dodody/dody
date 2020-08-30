import React, {useState} from 'react';
import styled, {css} from 'styled-components'
import {MdAdd} from 'react-icons/md'

function TodoCreate(props) {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  return (
    <>
      {open && 
        <InsertFormPositioner><InsertForm>
          <Input placeholder="작성후 enter를 쳐주세요" autoFocus/>
        </InsertForm></InsertFormPositioner>
      }
      <CircleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

const Input = styled.input`
  padding: 12px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #f2f2f2;
  outline: none; 
  width: 100%;
`; 

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`; 

const InsertForm = styled.div`
  background-color: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid lightgray;
`;


const CircleButton = styled.button`
  background-color: #39d9a9;
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  font-size: 60px;
  color:white;
  border-radius: 100px;
  border: none;
  outline: none;
  transition: 0.2s ease;
  ${props => props.open && css`
    background-color: red;
    transform: translate(-50%, 50%) rotate(45deg);
    &:hover{
      background-color: #ff8787;
    }
    &:active{
      background-color: #fa5252;
    }
  `}

  &:hover{
    background-color: #63e6be;
  }
  &:active{
    background-color: #63e6be;
  }
`;

export default TodoCreate;
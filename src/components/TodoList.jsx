import React from 'react';
import styled from 'styled-components'
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <TodoListStyle>
      <TodoItem text="dody" done={true}/>
    </TodoListStyle>
  );
}

const TodoListStyle = styled.div`
  flex: 1;
  padding: 20px 30px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default TodoList;
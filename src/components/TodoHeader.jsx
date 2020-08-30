import React from 'react';
import styled from 'styled-components'

function TodoHeader(props) {
  return (
    <TodoHeaderStyle>
      <h1>2020년 8월 30일 일요일</h1>
      <div className="tasks-left">할일 2개 남음</div>
    </TodoHeaderStyle>
  );
}

const TodoHeaderStyle = styled.div`
  padding: 20px 30px;
  border-bottom: 1px solid #e9e9e9;
  h1{
    font-size: 22px;
    margin: 0;
  }
  .tasks-left{
    color: #12b886;
    font-size: 15px;
    margin-top: 10px;
    font-weight: bold;
  }
`;

export default TodoHeader;
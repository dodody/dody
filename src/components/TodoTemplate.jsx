import React from 'react';
import styled from 'styled-components'

const TodoTemplate = ({children}) => {
  return (
    <TodoTemplateStyle>
      {children}
    </TodoTemplateStyle>
  );
};

const TodoTemplateStyle = styled.div`
  height: 568px;
  width: 512px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0,0,0,0.4);
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default TodoTemplate;
import React from 'react';
import TodoTemplate from 'components/TodoTemplate'
import TodoHeader from 'components/TodoHeader'
import TodoList from 'components/TodoList'
import TodoCreate from 'components/TodoCreate'
import {createGlobalStyle} from 'styled-components'

const Globalstyle = createGlobalStyle`
  body{
    background-color: #f2f2f2;
  }
`
function App() {
  return (
    <>
      <Globalstyle />
      <TodoTemplate>
        <TodoHeader />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}
 
export default App;

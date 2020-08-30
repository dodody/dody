import React, {useReducer, createContext, useContext, useRef} from 'react';

 const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 3,
    text: '프로젝트 생성하기',
    done: false
  },
  {
    id: 4,
    text: '프로젝트 생성하기',
    done: false
  }
]

function todoReducer(state, action){
  switch (action.type){
    case 'CREATE' : 
      return state.concat(action.todo);
    case 'TOGGLE' : 
      return state.map(
        todo => todo.id === action.id ? {...todo, done: !todo.done} : todo
      )
    case 'REMOVE ' : 
      return state.filer(todo => todo.id !== action.id);
    default :
      throw new Error (console.log(action.type))
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }){
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  return ( 
    <TodoStateContext.Provider value ={state}>
      <TodoDispatchContext value ={dispatch}>
        {children}
      </TodoDispatchContext>
    </TodoStateContext.Provider>
  );
}

export function useTodoState(){
  return useContext(TodoStateContext);
}

export function useTodoDispatch(){
  return useContext(TodoDispatchContext);
}
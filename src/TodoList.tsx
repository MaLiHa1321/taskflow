import React from 'react';
import "./style.css";
import { Todo } from './modal';
import SingleTodo from './SingleTodo';

interface props{
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({todos,setTodos}: props) => {
  return (
    <div className='todos'>
      {
      todos.map(todo =>(
        <SingleTodo todo={todo} 
        key={todo.id}
        todos={todos}
        setTodos={setTodos}></SingleTodo>
      ))
      }
    </div>
  )
}

export default TodoList;

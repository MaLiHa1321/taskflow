import React from 'react';
import { Todo } from './modal';
import './style.css';



interface props{
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo,todos,setTodos}: props) => {
  return <form  className='todos_single'>
    <span className='todos_single_text'> {todo.todo} </span>
      
    <div>
        <span className='icon'>Edit</span>
        <span className='icon'>Delete</span>
        <span className='icon'>Completed</span>
    </div>
  


  </form>

}

export default SingleTodo

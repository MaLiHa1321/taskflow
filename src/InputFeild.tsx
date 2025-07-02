import React from 'react'
import './style.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputFeild = ({todo, setTodo,handleAdd} : Props) => {

  return (
    <div>
     <form className='input' onSubmit={handleAdd} >
        <input type="text"
         placeholder='Enter a task'
          className='input_box'
          value={todo}
          onChange={(e)=>setTodo(e.target.value)

          } />
        <button  className='input_submit' type='submit'>Go</button>
     </form>
    </div>
  )
}

export default InputFeild

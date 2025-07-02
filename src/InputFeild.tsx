import React, { useRef } from 'react'
import './style.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputFeild = ({todo, setTodo,handleAdd} : Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
     <form className='input' onSubmit={(e) =>{
       handleAdd(e)
       inputRef.current?.blur();
       }} >
        <input
        ref={inputRef}
         type="text"
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

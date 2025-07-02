import React from 'react'
import './style.css';

const InputFeild = () => {
  return (
    <div>
     <form className='input'>
        <input type="text" placeholder='Enter a task' className='input_box' />
        <button className='input_submit' type='submit'>Go</button>
     </form>
    </div>
  )
}

export default InputFeild

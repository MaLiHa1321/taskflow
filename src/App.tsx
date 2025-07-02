import React, { useState } from 'react';
import './App.css';
import InputFeild from './InputFeild';
import { Todo } from './modal';

// let name: string = "maliha";
// let hobbies : number[];
// let role: [number, string];
// role =[3,"4"];

// type Person ={
//   name: string | number;
//   age?: number;
// }
// let person: Person ={
//   name: 4,
//   // age: 3
// };

// function printName(name: string | number){
//   console.log(name)
// }

// printName(5);

// let ageName:(age: number) => never;



const App:React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const[todos, setTodos] = useState<Todo[]>([])

  const handleAdd =(e: React.FormEvent) =>{
    e.preventDefault();
    console.log(todo)
  }

  console.log(todo)
  return (
    <div className="App">
     <h2 className="heading">Taskify</h2>
     <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputFeild>
    </div>
  );
}

export default App;

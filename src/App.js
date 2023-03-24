import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <LoadToDo></LoadToDo>
    </div>
  );
}


function LoadToDo(){
  const [toDos, setToDo] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setToDo(data))
  },[])
  return  (
    <div >
<h1>WElcome to you to list</h1>

<div className='toDo-container'>
{
toDos.map(todo=> <DisplayToDo
title={todo.title}
id ={todo.id}
completed={todo.completed}
></DisplayToDo>)
}
   
</div>
 </div>
  )
}




function DisplayToDo(props){
  console.log(props.completed)
  return(
    <div className='single-toDO'>
      <h1>ID: {props.id}</h1>
      <h2>title: {props.title}</h2>
      <p>Completed: {String(props.completed)} </p>
    </div>
  )
}
export default App;

import React, {useState} from 'react';

import './index.css';
import ToDos from './components/ToDos.jsx';
import Nav from './components/Nav.jsx';

function App() {
  function ToDo (description){
    this.description=description;
    this.complete=false;
  }
  ToDo.prototype.completeTodo = function () {
    if(this.complete){
      this.complete = false;
    }else{
      this.complete = true;
    }
    
  }
  
  const [todos,setTodos] = useState([]);

  function AddTodo(todo){
    let newTodo = new ToDo(todo);
    setTodos(oldTodo => [...oldTodo, newTodo]);
  }
  function completeToDo(id){
       
     let newtodos = [];
    newtodos = todos.map((obj,index) => {
       if(id === index){
        obj.completeTodo();
        return obj;
       }
       return obj;
      }
    ) 
 
    setTodos(newtodos);

    console.log(todos);
       
  }
  
  return (
    <div id="container">
      <Nav AddTodo = {AddTodo} />
      
     <ToDos todos={todos} completeToDo = {completeToDo} />
    </div>
  );
}

export default App;

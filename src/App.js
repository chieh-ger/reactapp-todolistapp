import React, { useState } from 'react';
import ToDo from './components/ToDos';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodoState] = useState({
    todos: [
        {
            id: uuidv4(),
            title: 'Take chicken out for defrost',
            completed: false
        },
        {
            id: uuidv4(),
            title: 'Throw away rubbish',
            completed: true

        },
        {
            id: uuidv4(),
            title: 'Feed Cats',
            completed: true
        }
    ]
  });

  const toggleStatus = (id) => {
    todo.todos.map(item => item.id === id ? item.completed = !item.completed : null);
    setTodoState({
      todos: todo.todos
    })
  }

  const deleteItem = (id) => {
    let newArr = todo.todos.filter(item => item.id !== id);
    setTodoState({
      todos: newArr
    })
  }

  const addItem = (text) => {
    setTodoState({
      todos: [...todo.todos, {id: uuidv4(), title: text, completed: false}]
    })
  }

  return (
    <div className="App row">
      <button className="fa fa-plus add" onClick={addItem}></button>
      <ToDo todoList={todo.todos} toggle={id => toggleStatus(id)} delete={id => deleteItem(id)}/>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import ToDo from './components/ToDos';
import Header from './components/header/Header';
import ActionArea from './components/actions/ActionArea';
import About from './components/about/About';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [todo, setTodoState] = useState({
    todos: []
  });

  useEffect(() => {
    async function fetchData() {
      await axios.get('https://jsonplaceholder.typicode.com/todos').then(result => setTodoState({todos: result.data}));
    }
    fetchData();
  })
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
    todo.todos = [...todo.todos, {id: uuidv4(), title: text, completed: false}]
    setTodoState({
      todos: todo.todos
    })
  }
  
  const markAllDone = () => {
    todo.todos.map(item => item.completed = true);
    setTodoState({
      todos: todo.todos
    })
  }

  const removeAll = () => {
    setTodoState({
      todos: []
    })
  }

  return (
    <Router>
      <div className="App row">
        <div className="col-sm-12 input-area">
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <ActionArea addAction={task => addItem(task)} markDone={markAllDone} removeAll={removeAll}/>
              <ToDo todoList={todo.todos} toggle={id => toggleStatus(id)} delete={id => deleteItem(id)}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        </div>
      </div>
    </Router>
  );
}

import React from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

function ToDo(props) {
    console.log(props.todoList);
    return props.todoList.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggle={(id) => props.toggle(id)} delete={(id) => props.delete(id)}/>
    ))
}

// PropTypes
ToDo.propTypes = {
    todoList: PropTypes.array.isRequired
}

export default ToDo;

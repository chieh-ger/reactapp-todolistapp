import React from 'react'
import PropTypes from 'prop-types';

import './Item.css';

function ToDoItem(props) {
    const getStyle = () => {
        return {
            backgroundColor: '#eee',
            padding: '10px',
            borderBottom: '1px dotted #ccc',
            textDecoration: props.todo.completed ? 'line-through' : 'none'
        }
    }
    const { id, title, completed } = props.todo;

    return (
        <div className="col-sm-12 item" style={getStyle()}>
            <p>
                <input type="checkbox" onChange={() => props.toggle(id)} checked={completed}/> {' '}
                {title}
                <button className="trash-can fas fa-trash-alt" onClick={() => props.delete(id)}></button>
            </p>
        </div>
    )
}

// PropTypes
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
export default ToDoItem

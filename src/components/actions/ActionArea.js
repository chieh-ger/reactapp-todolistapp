import React, { useState } from 'react'

import './ActionArea.css';

export default function ActionArea(props) {
    const [newTask, setNewTask] = useState(' ');
    return (
        <div className="input-group">
            <input className="new-task form-control" value={newTask} type="text" onKeyPress={(e) => e.key === 'Enter' ? (props.addAction(newTask), setNewTask(' ')) : null} onChange={e => setNewTask(e.target.value)}/>
            <span className="input-group-btn">
                <button className="fa fa-plus action-btn bg-green" onClick={(task) => {props.addAction(newTask); setNewTask(' ')}}></button>
                <button className="fa fa-minus action-btn bg-red" onClick={props.removeAll}></button>
                <button className="fa fa-check-square action-btn bg-blue" onClick={props.markDone}></button>
            </span>
        </div>
    )
}

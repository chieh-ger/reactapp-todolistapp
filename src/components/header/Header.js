import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    const style = {
        color: '#fff',
        fontWeight: '600'
    }
    return (
        <div className="header">
            <h2>Task List App</h2>
            <Link style={style} to="/">Home</Link> | <Link style={style} to="/about">About</Link>
        </div>
    )
}

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavLinks } from '../context/NavLinksContext';
import { addTodo } from '../store/todoReducer';
import '../style/FormAddTodo.css';

export default function FormAddTodo() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const { changeActive } = useNavLinks();
    const handleSave = (e) => {
        setText(e.target.value);
    }
    const addNewTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: Date.now(),
            text,
            done: false,
        }
        dispatch(addTodo(newTodo));
        changeActive(0);
        setText('');
    }
  return (
    <form className='formAddTodo'>
        <input
            value={text}
            onChange={handleSave}
            type="text"
            placeholder='Add New To Do'    
        />
        <button onClick={addNewTodo}>
            <Link to='/' className='Link-to-all'>Add</Link>
        </button>
    </form>
  )
}

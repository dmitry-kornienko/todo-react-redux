import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoReducer';
import '../style/FormAddTodo.css';

export default function FormAddTodo() {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

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
        <button onClick={addNewTodo}>Add</button>
    </form>
  )
}

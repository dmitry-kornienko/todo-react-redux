import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, doneTodo } from '../store/todoReducer';
import '../style/TodoItem.css';

export default function TodoItem({ todo, index }) {
    const dispatch = useDispatch();
    const removeTodo = (id) => {
        dispatch(deleteTodo(id));
    }
    const donedTodo = (index) => {
        dispatch(doneTodo(index));
    }
  return (
    <div className='todoItem'>
        <div className='todoInfo'>
            <div onClick={() => donedTodo(index)} className={!todo.done ? 'isDone' : 'isDone doned'}></div>
            <div className={!todo.done ? 'todoText' : 'todoText doneTodo'}>{todo.text}</div>
        </div>
        <button onClick={() => removeTodo(todo.id)} className='deleteBtn'>x</button>
    </div>
  )
}

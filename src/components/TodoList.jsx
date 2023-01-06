import React from 'react';
import TodoItem from './TodoItem';
import '../style/TodoList.css';

export default function TodoList({ todos }) {
  return (
    <div className='todoList'>
        {todos.length
            ?
            todos.map((todo, index) =>
                <TodoItem todo={todo} index={index} key={todo.id} />    
            )
            :
            <div className='emptyTodos'>No ToDo's</div>
        }
    </div>
  )
}

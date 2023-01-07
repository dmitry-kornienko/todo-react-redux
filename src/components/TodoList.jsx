import React from 'react';
import TodoItem from './TodoItem';
import '../style/TodoList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function TodoList({ todos }) {
  return (
    <div className='todoList'>
        {todos.length
          ?
          <TransitionGroup>
            {todos.map((todo, index) =>
              <CSSTransition
                key={todo.id}
                timeout={500}
                classNames="todo"
              >
                <TodoItem todo={todo} index={index} />    

              </CSSTransition>
            )}
          </TransitionGroup>
          :
          <div className='emptyTodos'>No ToDo's</div>
        }
    </div>
  )
}

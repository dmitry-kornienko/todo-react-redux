import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList';

export default function ActiveTodos() {
  const todos = useSelector(state => state.todos.todos);
  const activeTodos = todos.filter(item => item.done === false);
  return (
    <TodoList todos={activeTodos} condition='active' />
  )
}

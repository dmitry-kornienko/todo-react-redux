import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList';

export default function DoneTodos() {
  const todos = useSelector(state => state.todos.todos);
  const doneTodos = todos.filter(item => item.done === true);
  return (
    <TodoList todos={doneTodos} condition='done' />
  )
}

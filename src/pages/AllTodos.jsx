import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList';

export default function AllTodos() {
    const todos = useSelector(state => state.todos.todos);
    return (
        <TodoList todos={todos} />
    )
}

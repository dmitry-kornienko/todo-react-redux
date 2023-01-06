import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style/App.css';
import AllTodos from './pages/AllTodos';
import DoneTodos from './pages/DoneTodos';
import ActiveTodos from './pages/ActiveTodos';
import Header from './components/Header';
import Navigation from './components/Navigation';
import FormAddTodo from './components/FormAddTodo';

export default function App() {
  return (
    <div className='app'>
      <Header>Daily To Do List</Header>
      <FormAddTodo />
      <Navigation />
      <Routes>
        <Route path='/' element={ <AllTodos /> } />
        <Route path='/done' element={ <DoneTodos /> } />
        <Route path='/active' element={ <ActiveTodos /> } />
      </Routes>
    </div>
  )
}

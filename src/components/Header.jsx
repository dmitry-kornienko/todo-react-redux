import React from 'react';
import '../style/App.css';

export default function Header({ children }) {
  return (
    <div className='header'>
      { children }
    </div>
  )
}

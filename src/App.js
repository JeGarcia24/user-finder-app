import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="app-container">
      <div className='title'>
        <span><i className="fa fa-github fa-2x" aria-hidden="true"></i></span>
        <h1>GitHub User Finder</h1>
      </div>
      <UserProfile />
    </div>
  );
}

export default App;

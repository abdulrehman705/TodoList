import React from 'react';
import ToDoList from './ToDoList';
import FirstTask from './FirstTask';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import SecendTask from './SecendTask';

const App = () => {
  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<ToDoList />} />
          {/* <Route path='/' element={<FirstTask />} /> */}
          {/* <Route path='/' element={<SecendTask />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App;
import axios from 'axios';
import React, { useState } from 'react';
import Form from './Form';
import UserResponse from './UserResponse'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes 
} from "react-router-dom";

import CreateForm from './CreateForm';

function App() {
  return (
    <>
      <Router>
        <Routes >
              <Route path="/" element={<CreateForm />} />
              <Route path='/form' element={<Form />} />
              <Route path='/userResponse' element={<UserResponse />} />
        </Routes >
      </Router>
    </>
  )
}

export default App;

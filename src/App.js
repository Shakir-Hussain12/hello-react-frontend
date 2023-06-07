import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Message from './components/Message';

const App = () => (
  <Routes>
    <Route exact path="/" Component={Message} />
  </Routes>
);

export default App;

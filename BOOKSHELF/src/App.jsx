import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<BookSearch/>} />
        <Route path="/bookshelf" element={<Bookshelf/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

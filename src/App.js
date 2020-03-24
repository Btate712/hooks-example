import React from 'react';
import './App.css';
import PersonInfoForm from './components/PersonInfoForm';
import BookInfoForm from './components/BookInfoForm';

function App() {
  return (
    <div className="App">
      <PersonInfoForm />
      <br />
      <BookInfoForm />
    </div>
  );
}

export default App;

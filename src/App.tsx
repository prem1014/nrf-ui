import React from 'react';
import logo from './logo.svg';
import './App.css';
import Donar from './Components/Donar/Donar.component';
import AppRoute from './Components/Routes/Routes.component';

function App() {
  return (
    <div className="App container-fluid">
      <AppRoute />
    </div>
  );
}

export default App;

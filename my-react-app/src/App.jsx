import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a mi tienda!" />
    </>
  );
}

export default App;

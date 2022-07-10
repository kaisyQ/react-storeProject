import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginFormView from './views/LoginFormView/LoginFormView'
import AboutView from './views/AboutView/AboutView'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'
import StoreItemView from './views/StoreItemsView.tsx/StoreItemsView'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<AboutView />}/>
        <Route path='/login' element={<LoginFormView />}/>
        <Route path='/store' element={<StoreItemView />}/>
      </Routes>
    </div>
  );
}

export default App;


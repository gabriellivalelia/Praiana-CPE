import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import {Login} from Login;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
        <Route path="/" element={<App/>}>
        <Route path="Login" element={<Login/>}/>
        <Route path="cadastro" element={<Cadastro/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="Vitrine" element={<Vitrine/>}/>
        <Route path="Perfil" element={<Perfil/>}/>
        </Route>
     </Routes>
    <App />
  </BrowserRouter>
);


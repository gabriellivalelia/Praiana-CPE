import React from 'react';
import { BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import CadastroTeste from './pages/Cadastro';
import Perfil from './pages/Perfil';
import Home from './pages/Home';
import Vitrine from './pages/Vitrine';


function Rotas ()
{
   return( <BrowserRouter>
    <Routes>
       <Route path="/" element={<App/>}>
       <Route path="/pages/Login" element={<Login/>}/>
       <Route path="/pages/Cadastro" component={<CadastroTeste/>}/>
       <Route path="Home" element={<Home/>}/>
       <Route path="Vitrine" element={<Vitrine/>}/>
       <Route path="Perfil" element={<Perfil/>}/>
       <Outlet/>
       </Route>
    </Routes>
 </BrowserRouter>)

}

export default Rotas;
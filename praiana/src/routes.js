import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Perfil from './pages/Perfil';
import Home from './pages/Home';
import Vitrine from './pages/Vitrine';


function Rotas ()
{
   return( 
   <BrowserRouter>
    <Switch>
       <Route path="/Login" component={Login}/>
       <Route path="/Cadastro" component={Cadastro}/>
       <Route path="/Home" component={Home}/>
       <Route path="/Vitrine" component={Vitrine}/>
       <Route path="/Perfil" component={Perfil}/>
    </Switch>
 </BrowserRouter>)

}

export default Rotas;
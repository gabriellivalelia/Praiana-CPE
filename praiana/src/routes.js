import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
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
       <Route exact path="/Login" component={Login}/>
       <Route exact path="/Cadastro" component={Cadastro}/>
       <Route exact path="/Home" component={Home}/>
       <Route exact path="/Vitrine" component={Vitrine}/>
       <Route exact path="/Perfil" component={Perfil}/>
       <Route component = {()=><Redirect to = "/Home" />}/>
    </Switch>
 </BrowserRouter>)

}

export default Rotas;
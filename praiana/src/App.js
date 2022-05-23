import React from 'react';
import Rotas from './routes';
import "./global.css";
import Header from './Components/Header/header';
import Footer from './Components/footer/footer';
import { useHistory } from "react-router-dom";




function App() {

  const history = useHistory();

  return(
      <div>
      <Rotas/>
      </div>
  )
};



export default App;

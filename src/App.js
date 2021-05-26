import React,{useState} from 'react';
import Formulario from './components/Formulario';
import Home from './components/Home';


function App() {

  const[ingreso,guardarIngreso]=useState({
    email:'',
    password:'',
  })
  const[validacion,guardarValidacion] =useState(false);

 
  

  return (
   <div>
     {!validacion ?  <Formulario
     ingreso={ingreso}
     guardarIngreso={guardarIngreso}
     guardarValidacion={guardarValidacion}/>
    :
    <Home/>
    }
    
   </div>
  );
}

export default App;

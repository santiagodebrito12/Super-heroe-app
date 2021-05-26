import React,{useState} from 'react';



const Formulario = ({ingreso,guardarIngreso,guardarValidacion}) => {
    const[error,guardarError]=useState(false);

    const handleChange = e =>{

        guardarIngreso({
            ...ingreso,
            [e.target.name]:e.target.value
        })
    }
   
    const handleSubmit = e =>{
        e.preventDefault();
        const{email,password}=ingreso;
        
        if(email.trim()==='' ||password.trim() === ''){
            guardarError(true);
            return;
        }
        guardarValidacion(true);
        guardarError(false);
        console.log('paso validacion...')
       
    }
   
    return ( 
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
            <div className="col-8">
            <div className="card-ingreso ">
            <h1>Formulario de ingreso</h1>
          
            <input 
            type="text"
            placeholder="Ingrese su email"
            name="email"
            className="shadow-lg p-3 mb-5 bg-body rounded"
            onChange={handleChange}/>
            <input
            type="password"
            placeholder="Ingrese su contraseña"
            name="password"
            className="shadow-lg p-3 mb-5 bg-body rounded"
            onChange={handleChange}/>
            <button type="button" className="btn btn-danger" onClick={handleSubmit}> Enviar </button>
            {error ? <p className="error">Ambos campos son Obligatorios</p> : null}
            </div>
            </div>
            </div>
        </div>
     );
}
 
export default Formulario;
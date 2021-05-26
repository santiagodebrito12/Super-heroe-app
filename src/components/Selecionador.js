import React,{useState} from 'react';



const Selecionador = ({superheroe,guardarSuperheroe,guardarEquipo,guardarHeroevalido}) => {
  
    const[error,guardarError]=useState(false);

    const handleChange = e =>{
        guardarSuperheroe(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault();
        if(superheroe.trim()===''){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarHeroevalido(true);
    }

    return (
        <div className="contenedor-selecionador">
            <h2>Seleciona tu SuperHeroe</h2>
            <input type="text" placeholder="Ingrese el nombre del super Heroe" name="nombre"
            onChange={handleChange}
            />
            <button className="btn btn-danger" onClick={handleSubmit}> Selecionar super Heroe</button>
            {error ? <p className="error">Super Heroe selecionado invalido </p> : null}
            
           
        </div>
      );
}
 
export default Selecionador;
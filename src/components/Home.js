import React,{Fragment, useState, useEffect} from 'react';

import Selecionador from './Selecionador';
import Equipo from './Equipo';
import Listado from './Listado';
import axios from 'axios';

const Home = () => {
    const[superheroe,guardarSuperheroe]=useState('');
    const[heroevalido,guardarHeroevalido]=useState(false);
    const[resultado,guardarResultado] = useState({})
    const[equipo,guardarEquipo]=useState([]);
    
  
    useEffect(()=>{
        const consultarApi = async()=>{
            const apiKey = '10225764006710426';
            const url =`https://www.superheroapi.com/api.php/${apiKey}/search/${superheroe}`;
            
            const respuesta = await axios.get(url);
            guardarResultado(respuesta.data.results);
            
        }
        consultarApi();
    },[heroevalido])


    return ( 
        <Fragment>
        <h1 className="titulo-home">Bienvenido a Super Heroes app</h1>
        <div className="container">
        <div className="row">
            <div className="col-5 ">
                <Selecionador
                superheroe={superheroe}
                guardarSuperheroe={guardarSuperheroe}
                equipo={guardarEquipo}
                guardarHeroevalido={guardarHeroevalido}
                />
                {heroevalido ? <Listado resultado={resultado} /> : null }
            </div>
            <div className="col-5">
                <Equipo
                resultado={resultado}
                />
            </div>


        </div>

        </div>
        </Fragment>
     );
}
 
export default Home;

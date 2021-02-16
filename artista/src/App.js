import React, {Fragment, useState,useEffect} from 'react';
import Form from './components/Form'
import axios from 'axios'
import Cancion from './components/Cancion'
import Info from './components/Info'

function App() {

  const [busquedaletra, setbusquedaLetra] = useState({})
  const [letra, guardarLetra] = useState('')
  const [info, setinfo] = useState({})

  useEffect(() => {
    if(Object.keys(busquedaletra).length ===0) return
    const consultApiLetra = async () =>{
      const {artista,cancion} = busquedaletra
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const urlBio = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
      //usar Promise para no tener que esperar los resultado de las dos api
      const [letra, informacion] = await Promise.all([
        axios.get(url),
        axios(urlBio)
        // aqui no tenemos que esperar a que termine una se ejecuta al mismo tiempo
      ])
      guardarLetra(letra.data.lyrics)
      setinfo(informacion.data.artists[0])
      
      //guardarLetra(result.data.lyrics)
    }
    consultApiLetra()
  }, [busquedaletra])

  return (
    <Fragment>
      <Form 
        setbusquedaLetra = {setbusquedaLetra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default App;

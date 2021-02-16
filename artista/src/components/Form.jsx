import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Form = ({setbusquedaLetra}) => {

    const [busqueda, setbusqueda] = useState({
        artista:'',
        cancion:''
    })
    const [error, seterror] = useState(false)
    
    const handleChange = (e) =>{
        setbusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const {artista, cancion} = busqueda

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(artista.trim() ==='' || cancion.trim() ==='') {
            seterror(true)
            return
        }
        seterror(false)
        setbusquedaLetra(busqueda)
    }

    return ( 
        <div className="bg-info">
               {error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> :null}
            <div className="container">
                <div className="row">
                 
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={handleSubmit}
                   >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={(e) => handleChange(e)}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Cancion"
                                            onChange={handleChange}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
Form.propTypes = {
    setbusquedaLetra: PropTypes.func.isRequired
}
export default Form;
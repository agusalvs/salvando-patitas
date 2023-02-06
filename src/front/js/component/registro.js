import React, {useContext, useState} from "react";
import {Context} from "../store/appContext.js";
const Registro = () => {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [celular, setCelular] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirmar, setConfirmar] = useState("");
    const [direccion, setDireccion] = useState("");
    const {store, actions} = useContext(Context);


    function enviarDatos(e) {
        e.preventDefault();
        actions.signup(nombre, correo, celular, contraseña, direccion);
        setNombre("");
        setCorreo("");
        setCelular("");
        setContraseña("");
        setConfirmar("");
        setDireccion("");
        console.log(nombre, correo, celular, contraseña, direccion);
    }

    return (
        <center>
            <h1 style={
                {
                    color: "#36544F",
                    fontSize: "20px",
                    marginBottom: "60px",
                    marginTop: "60px"
                }
            }>CREAR UNA CUENTA</h1>

            <form className="row g-3 mx-auto "
                onSubmit={enviarDatos}
                style={
                    {width: "500px"}
            }>
                <div className="col-md-6">
                    <label htmlFor="inputNombre" className="form-label"
                        style={
                            {color: "#36544F"}
                    }>
                        Nombre
                    </label>
                    <input type="text" className="form-control" id="inputNombre"
                        value={nombre}
                        onChange={
                            (e) => setNombre(e.target.value)
                        }
                        style={
                            {
                                borderRadius: "2rem",
                                borderColor: "#86C8BC",
                                borderWidth: "2px",
                                backgroundColor: "#FFF6BD",
                                opacity: "75%",
                                fontSize: "15px"
                            }
                        }/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label"
                        style={
                            {color: "#36544F"}
                    }>
                        Contraseña
                    </label>
                    <input type="password" className="form-control" id="inputPassword4 "
                        value={contraseña}
                        onChange={
                            (e) => setContraseña(e.target.value)
                        }
                        style={
                            {
                                borderRadius: "2rem",
                                borderColor: "#86C8BC",
                                borderWidth: "2px",
                                backgroundColor: "#FFF6BD",
                                opacity: "75%",
                                fontSize: "15px"
                            }
                        }/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label "
                        style={
                            {color: "#36544F"}
                    }>
                        Correo
                    </label>
                    <input type="email" className="form-control" id="inputEmail4"
                        value={correo}
                        onChange={
                            (e) => setCorreo(e.target.value)
                        }
                        style={
                            {
                                borderRadius: "2rem",
                                borderColor: "#86C8BC",
                                borderWidth: "2px",
                                backgroundColor: "#FFF6BD",
                                opacity: "75%",
                                fontSize: "15px"
                            }
                        }/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label"
                        style={
                            {color: "#36544F"}
                    }>
                        Confirmar  Contraseña
                    </label>
                    <input type="password" className="form-control" id="inputPassword4"
                        value={confirmar}
                        onChange={
                            (e) => setConfirmar(e.target.value)
                        }
                        style={
                            {
                                borderRadius: "2rem",
                                borderColor: "#86C8BC",
                                borderWidth: "2px",
                                backgroundColor: "#FFF6BD",
                                opacity: "75%",
                                fontSize: "15px"
                            }
                        }/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label"
                        style={
                            {color: "#36544F"}
                    }>
                        Celular
                    </label>
                    <input type="tel" className="form-control" id="inputCelular"
                        value={celular}
                        onChange={
                            (e) => setCelular(e.target.value)
                        }
                        style={
                            {
                                borderRadius: "2rem",
                                borderColor: "#86C8BC",
                                borderWidth: "2px",
                                backgroundColor: "#FFF6BD",
                                opacity: "75%",
                                fontSize: "15px"
                            }
                        }/>

                </div>
                <div className="col-md-6">
                    <label htmlFor="inputDireccion" className="form-label"
                        style={
                            {color: "#36544F"}
                    }>
                        Dirección
                    </label>
                    <input type="text" className="form-control" id="inputDireccion"
                        value={direccion}
                        onChange={
                            (e) => setDireccion(e.target.value)
                        }
                        style={
                            {
                                borderRadius: "2rem",
                                borderColor: "#86C8BC",
                                borderWidth: "2px",
                                backgroundColor: "#FFF6BD",
                                opacity: "75%",
                                fontSize: "15px"
                            }
                        }/>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary"
                        style={
                            {
                                width: "300px",
                                backgroundColor: "#86C8BC",
                                color: "#FFFFFF",
                                borderColor: "#86C8BC",
                                borderRadius: "2rem"
                            }
                    }>Registrarse</button>
                </div>
            </form>
        </center>
    );
};

export default Registro;

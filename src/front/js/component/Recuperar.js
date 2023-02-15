import React, {useContext, useState} from "react";
import {Context} from "../store/appContext.js";


const Recuperar = () => {
    const [contraseñagmail, setContraseñagmail] = useState("");
    const [nuevacontraseña, setNuevacontraseña] = useState("");
    const [repetircontraseña, setRepetircontraseña] = useState("");


    function enviarDatos(e) {
        e.preventDefault();
        if (nuevacontraseña === repetircontraseña) {
            actions.cambiar(contraseñagmail, nuevacontraseña);
            setContraseñagmail("");
            setNuevacontraseña("");
            setRepetircontraseña("");
        } else {
            Swal.fire({icon: 'error', title: 'Ups...', text: '¡Las contraseñas no coinciden!'})
        }
        console.log(contraseñagmail, nuevacontraseña, repetircontraseña);
    }

    return (
        <center>
            <div style={
                {
                    width: "800px",
                    backgroundColor: "#CEEDC7",
                    padding: "20px",
                    borderRadius: "1rem"
                }
            }>
                <p className="mb-2 fs-2"
                    style={
                        {color: "#36544F"}
                }>
                    {" "}
                    Cambiar contraseña{" "} </p>

                <p className="mb-5 fw-light"
                    style={
                        {color: "#64748B"}
                }>
                    Crear nueva contraseña
                </p>

                <form className="row g-3 mx-auto "
                    onSubmit={enviarDatos}
                    style={
                        {width: "700px"}
                }>

                    <div className="col-md-12">
                        <input type="password" className="form-control me-2" id="inputPassword" placeholder="Contraseña establecida por e-mail "
                            value={nuevacontraseña}
                            onChange={
                                (e) => setContraseñagmail(e.target.value)
                            }
                            style={
                                {
                                    width: "325px",
                                    borderRadius: "2rem",
                                    borderColor: "#86C8BC",
                                    borderWidth: "2px",
                                    backgroundColor: "#FFF6BD",
                                    opacity: "75%",
                                    fontSize: "15px"
                                }
                            }/>
                    </div>


                    <div className="col-md-12">
                        <input type="password" className="form-control me-2" id="inputPassword" placeholder="Nueva contraseña"
                            value={nuevacontraseña}
                            onChange={
                                (e) => setNuevacontraseña(e.target.value)
                            }
                            style={
                                {
                                    width: "325px",
                                    borderRadius: "2rem",
                                    borderColor: "#86C8BC",
                                    borderWidth: "2px",
                                    backgroundColor: "#FFF6BD",
                                    opacity: "75%",
                                    fontSize: "15px"
                                }
                            }/>
                    </div>
                    <div className="col-md-12">
                        <input type="password" className="form-control me-2" id="inputPassword" placeholder="Repetir contraseña"
                            value={repetircontraseña}
                            onChange={
                                (e) => setRepetircontraseña(e.target.value)
                            }
                            style={
                                {
                                    width: "325px",
                                    borderRadius: "2rem",
                                    borderColor: "#86C8BC",
                                    borderWidth: "2px",
                                    backgroundColor: "#FFF6BD",
                                    opacity: "75%",
                                    fontSize: "15px"
                                }
                            }/>
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <button type="submit" className="btn btn-primary"
                            style={
                                {
                                    width: "300px",
                                    backgroundColor: "#86C8BC",
                                    color: "#FFFFFF",
                                    borderColor: "#86C8BC",
                                    borderRadius: "2rem"
                                }
                        }>
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
        </center>
    );
};
export default Recuperar;

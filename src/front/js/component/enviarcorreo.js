import React, {useContext, useState} from "react";
import {Context} from "../store/appContext.js";


const Enviarcorreo = () => {

    const [correo, setCorreo] = useState("");
    const {actions} = useContext(Context);
    function enviarDatos(e) {
        e.preventDefault();
        actions.enviarcorreo(correo);
        setCorreo("");
        console.log(correo);
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
                    Restauración de contraseña{" "} </p>

                <p className="mb-5 fw-light"
                    style={
                        {color: "#64748B"}
                }>
                    Ingrese su correo electrónico
                </p>

                <form className="row g-3 mx-auto "
                    onSubmit={enviarDatos}
                    style={
                        {width: "700px"}
                }>
                    <div className="col-md-12">

                        <input type="email" className="form-control me-2" id="inputEmail4" placeholder="Correo Electrónico"
                            value={correo}
                            onChange={
                                (e) => setCorreo(e.target.value)
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
                                    width: "325px",
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
}
export default Enviarcorreo;

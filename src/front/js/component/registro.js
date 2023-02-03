import React from 'react';
const Registro = () => {
    return (
        <center>
            <h1 class="text-success">CREAR UNA CUENTA</h1>

            <form className="row g-3 mx-auto"
                style={
                    {width: "500px"}
            }>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label"
                        style={
                            {color: 'green'}
                    }>
                        NOMBRE
                    </label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label"
                        style={
                            {color: 'green'}
                    }>
                        CONTRASEÑA
                    </label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                        E-MAIL
                    </label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label"
                        style={
                            {color: 'green'}
                    }>
                        CONFIRMAR CONTRASEÑA
                    </label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label"
                        style={
                            {color: 'green'}
                    }>
                        CELULAR
                    </label>
                    <input type="email" className="form-control" id="inputEmail4"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label"
                        style={
                            {color: 'green'}
                    }>
                        DIRECCIÓN
                    </label>
                    <input type="password" className="form-control" id="inputPassword4"/>
                </div>
                ...
                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary"
                        style={
                            {
                                backgroundColor: "#86C8BC",
                                color: "green",
                                borderColor: "#86C8BC"
                            }
                    }>REGISTRARSE</button>
                </div>
            </form>
        </center>
    );
};

export default Registro;

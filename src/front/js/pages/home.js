import React, {useContext} from "react";
import {Context} from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Registro from "../component/registro.js";

export const Home = () => {
    const {store, actions} = useContext(Context);

    return (
        <div className="mx-auto">
            <Registro/>
        </div>
    );
};

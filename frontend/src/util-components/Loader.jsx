import React from "react";
import Runa from '../Assets/Runa_out.png';
import Runa_in from '../Assets/Runa_in.png';
import './Runa.css';


export const Loader=()=>{

    return(
        <>
            <div className="loader">
                <img className="in" srcSet={Runa_in} alt="Cargando..." />
                <img className="out" srcSet={Runa} alt="Loading..." />
                <img className="in" srcSet={Runa_in} alt="Loading..." />
            </div>
        </>
    );


}
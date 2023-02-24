//a1ccf900a4df55693ebd1445a8e03ef5 chaveApi
import React from "react";

const Card = ({cidade}) => {

    return(
            <div className="">
                <p>{cidade.nome}</p>
                <im src={cidade.img}/>
                <p>{cidade.temperatura}°C</p>
                <p>Máx: {cidade.maxima}</p>
                <p>Min: {cidade.minima}</p>
                <p>Nublado</p>
                <div className="flex gap-20 justify-center">
                    <p>{cidade.humidade}%</p>
                    <p>{cidade.velocidade}km/h</p>
                </div>
                <img src={cidade.icon}/>
            </div>
    )
}
export default Card;
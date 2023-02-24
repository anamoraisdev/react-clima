//a1ccf900a4df55693ebd1445a8e03ef5 chaveApi
import React from "react";

const Card = ({cidade}) => {
    return(
        <div className="">
            <div className="">
              <div className="flex items-center justify-start ">
                    <img src={cidade.icon}/>
                    <p className="text-2xl">{Number(cidade.temperatura).toFixed(0)}</p>
                    <button className="text-md border-r border-black px-1">°C</button>
                    <button className="text-md px-1">F</button>
               </div>
               <div className="flex flex-col items-start px-4 text-gray-500 text-xs">
                    <p className="">{cidade.nome}</p>
                    <p className="">nublado</p>  
                    <p className="">sensação termica: {Number(cidade.feelslike).toFixed(0)} °C</p>
               </div>
            </div>

            <div className="flex justify-start gap-4 text-sm">
               <div>
                    <p>Máx</p>
                    <p>{cidade.maxima}°C</p>
                </div>
                <div>
                    <p>Min</p>
                    <p>{cidade.minima}°C</p>
                </div>      
                <div>
                    <button>Humidade</button>
                    <p>{cidade.humidade}%</p>
                </div>
                <div>
                    <button>vento</button>
                    <p>{cidade.velocidade}m/s</p>
                </div>
            </div>
        </div>
    )
}
export default Card;
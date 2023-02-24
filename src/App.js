import './App.css';
import Card from './components/card';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [nomeCidade, setNomeCidade]= useState("");
  const [cidade, setCidade]= useState(null);
  const keyApi = "a1ccf900a4df55693ebd1445a8e03ef5";
  const getData = async() => {
    try{
      const resultado = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&units=metric&appid=${keyApi}&lang=pt_br`)
      const cidade = {
        nome: resultado.data.name,
        temperatura: resultado.data.main.temp,
        minima: resultado.data.main.temp_min,
        maxima: resultado.data.main.temp_max,
        velocidade: resultado.data.wind.speed,
        humidade: resultado.data.main.humidity,
        icon:`https://openweathermap.org/img/wn/${resultado.data.weather[0].icon}@2x.png`,
        feelslike: resultado.data.main.feels_like,
        sol: resultado.data.sys.sunrise,
        pordosol: resultado.data.sys.sunset
      }
      console.log(resultado)
      setCidade(cidade)
    }catch(erro){
      console.log(erro)
    }

  }

  return (
    <div className="App flex justify-center my-20"> 
      <div className="bg-gray-100/30 w-[25rem] rounded-2xl shadow-lg p-3">
            <div className="flex justify-center">
                <input 
                    type="text" 
                    placeholder="digite o nome da cidade" 
                    className="rounded-2xl p-1 text-center"
                    value={nomeCidade}
                    onChange={(event) => setNomeCidade(event.target.value)}
                ></input>
                <button className=" bg-gray-300 rounded-2xl px-2" onClick={() => getData()}>
                    O
                </button>
      </div>
      {cidade && (
        <Card
          cidade={cidade}
        /> 
      )}
     </div>
    </div>
  );
}

export default App;

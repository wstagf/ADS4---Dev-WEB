import { useState } from "react";

function App() {

  let [numeroTabuada, setNumeroTabuada ] = useState(0)

  const alerta = () => {
    setNumeroTabuada(numeroTabuada + 1) 
  }
  const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const nome = "Senai";
  return (
    <div className="App">
      <h1>{nome} Aula Web</h1>
      <button onClick={alerta}>Clique aqui</button>
      <h1>Tabuada do {numeroTabuada}</h1>
      <ul>
        {
          lista.map((n) => {
            return (<li>{numeroTabuada} x {n + 1} = { numeroTabuada * (n + 1)}</li>);
          })
        }       
      </ul>
    </div>
  );
}

export default App;










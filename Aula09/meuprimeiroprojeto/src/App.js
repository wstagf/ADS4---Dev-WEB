import { useState } from "react";

function App() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const [imc, setIMC] = useState(0)

  const calcular = () => {
    setIMC(peso/(altura*altura))
  }

  const manipularInputAltura = (e) => { 
    const novoValor = e.target.value; 
   
    if(!isNaN(parseFloat(novoValor))) {
      setAltura(novoValor)
    }
  }

  const manipularInputPeso = (e) => { 
    const novoValor = e.target.value; 
   
    if(!isNaN(parseFloat(novoValor))) {
      setPeso(novoValor)
    }
  }
  return (
    <div className="App">
      <h1>Vamos calcular o seu IMC</h1>
      <span>Altura em metros</span>
      <input type="text" placeholder="1.80" onChange={manipularInputAltura}></input>
      <br></br> 
      <span>Peso em kilos</span>
      <input type="text" placeholder="83.620" onChange={manipularInputPeso}></input>
      <button onClick={calcular}>Calcular</button>

      <h2>Seu IMC Calculado é {imc}</h2>
    </div>
  );
}

export default App;










function App() {
  const alerta = () => {
    alert("Olá Mundo");
  }

  const nome = "Senai";
  return (
    <div className="App">
      <h1>{nome} Aula Web</h1>
      <button onClick={alerta}>Clique aqui</button>
    </div>
  );
}

export default App;



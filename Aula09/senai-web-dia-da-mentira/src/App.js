import './App.css';

function App() {
  let dados = ['Thiago', 'Maria', 'João', 'Ana'];
  return (
    <div className="App">
      <header className="App-header"> 
         {dados.map((item) => (
          <p>{item}</p>
         ))}
      </header>
    </div>
  );
}

export default App;

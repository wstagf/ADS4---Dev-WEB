import './App.css'

function Login() {

return (
    <div className="container">
        <div className="left"></div>

        <div className="right">
        <div className="login-box">
            <h2>Entrar</h2>

            <div className="input-group">
            <input type="text" placeholder="Usuário" />
            </div>

            <div className="input-group">
            <input type="password" placeholder="Senha" />
            </div>

            <button className="btn">Entrar</button>
        </div>
        </div>
    </div>
  )
}

export default Login
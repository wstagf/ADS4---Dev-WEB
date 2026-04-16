import { useState } from 'react'
import './App.css'

function Login() {
const [usuario, setUsuario] = useState('')
const [senha, setSenha] = useState('')  

const manipularLogin = () => {
    if(usuario !== 'admin' || senha !== '123') {
        alert('Usuário ou senha incorretos!') 
    } else {
        alert('Login realizado com sucesso!')
    }
}



return (
    <>
        <div className="container">
            <div className="left"></div>

            <div className="right">
                <div className="login-box">
                    <h2>Entrar</h2>
                    <div className="input-group">
                    <input type="text" placeholder="Usuário" onChange={
                            (novoValor: React.ChangeEvent<HTMLInputElement>) => {
                                setUsuario(novoValor.target.value)
                            }
                        } />
                    </div>

                    <div className="input-group">
                    <input type="password" placeholder="Senha" onChange={
                            (novoValor: React.ChangeEvent<HTMLInputElement>) => {
                                setSenha(novoValor.target.value)
                            }
                        } />
                    </div>

                    <button className="btn" onClick={manipularLogin}>Entrar</button>
                </div>
            </div>
        </div>
        <p>Como ainda nao temos um backend para testar, o login vai funcionar se utilizar o usuario 'admin' e a senha '123'</p>
    </>
  )
}

export default Login
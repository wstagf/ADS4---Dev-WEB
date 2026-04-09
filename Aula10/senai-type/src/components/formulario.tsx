 import BotaoCustomizado from "./botaoCustomizado";
 import InputCustomizado from "./inputCustomizado";

 function logar() {
    alert("Logado com sucesso");
  }

function formulario () {
    return (
          <div className="container">
            <div className="login-form">
                <InputCustomizado  type="text" label="Usuario" placeholder="Digite seu usuario"/>
                <InputCustomizado  type="password" label="Senha"  placeholder="Digite sua senha"/>
                <BotaoCustomizado bntTexto="sei la" acao={logar}  />
            </div>
        </div>
    )
}



export default formulario;
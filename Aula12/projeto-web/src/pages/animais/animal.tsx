import './animal.css'

function Animal() {
    return (
         <div className="card-tabela">
        <h2>Lista de Animais</h2>

        <table className="tabela-animal">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Idade</th>
                    <th>Raça</th>
                    <th>Está Vivo?</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>aaaa</td>
                    <td>Sim</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>3</td>
                    <td>Bulldog</td>
                    <td>Não</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}

export default Animal;

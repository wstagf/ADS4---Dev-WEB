import { use, useState } from 'react'
import AnimalService from '../../services/animal_service'
import './animal.css'
import type AnimalModel from '../../model/animal_model'

function Animal() {

    const [listAnimais, setListaAnimais] = useState<AnimalModel[]>([ ])

    const carregar = async () => {
        alert('Carregando os animais...')
        const resultado = await AnimalService.carregar(  )
        alert('Animais carregados! Veja o console para mais detalhes.')
        if(resultado) {
            setListaAnimais(resultado)
        }
    }

    return (
         <div className="card-tabela">
        <button onClick={() => {carregar()}}>Listar Animais</button>

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
                { 
                listAnimais.map((animal) => {
                    return (
                        <tr key={animal.id}>
                            <td>{animal.id}</td>
                            <td>{animal.idade}</td>
                            <td>{animal.raca}</td>
                            <td>{animal.estaVivo ? 'Sim' : 'Não'}</td>
                        </tr>
                    )
                })} 
            </tbody>
        </table>
    </div>
    );
}

export default Animal;

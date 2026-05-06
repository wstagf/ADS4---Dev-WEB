import { useState } from 'react'
import AnimalService from '../../services/animal_service'
import './animal.css'
import type AnimalModel from '../../model/animal_model'

function Animal() {

    const [listAnimais, setListaAnimais] = useState<AnimalModel[]>([ ])
    const [idade, setIdade] = useState(0)
    const [raca, setRaca] = useState('')
    const [peso, setPeso] = useState(0)

    const carregar = async () => {
        alert('Carregando os animais...')
        const resultado = await AnimalService.carregar(  )
        alert('Animais carregados! Veja o console para mais detalhes.')
        if(resultado) {
            setListaAnimais(resultado)
        }
    }

    const excluirAnimal = async (id: number | undefined) => {
          const resultado = await AnimalService.apagar(id ? id.toString() : '')
            if(resultado) {
                alert('Animal excluido com sucesso!')
                carregar();
            }

    }

    const enviarNovoAnimal = async () => {
        const novoAnimal: AnimalModel = {
            id: undefined,
            idade: idade,
            raca: raca,
            peso: peso,
            estaVivo: true,
            comidasQueGosta: []
        }
        const resultado = await AnimalService.inserir(novoAnimal)
        if(resultado) {
            alert('Animal inserido com sucesso!')
            carregar();
        } else
        {
            alert('Falha ao inserir animal. Verifique o console para mais detalhes.')
        }
         
    }


    return (
         <div className="card-tabela">
        <button onClick={() => {carregar()}}>Listar Animais</button>

        <h2>Lista de Animais</h2>
        {idade} - {raca} - {peso}

        <form >
            <input type="text" placeholder="Idade" onChange={(e) => setIdade(parseInt(e.target.value))}  />
            <input type="text" placeholder="Raça" onChange={(e) => setRaca(e.target.value)}  />
            <input type="text" placeholder="Peso" onChange={(e) => setPeso(parseFloat(e.target.value))} />
            <button type="button" onClick={() => {enviarNovoAnimal()}}>Adicionar Animal</button>
        </form>

        <table className="tabela-animal">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Idade</th>
                    <th>Raça</th>
                    <th>Está Vivo?</th>
                    <th>Acoes</th>
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
                            <td>
                                <button onClick={() => {
                                    excluirAnimal(animal.id)
                                }
                                }>Excluir Animal</button>

                            </td>
                        </tr>
                    )
                })} 
            </tbody>
        </table>
    </div>
    );
}

export default Animal;

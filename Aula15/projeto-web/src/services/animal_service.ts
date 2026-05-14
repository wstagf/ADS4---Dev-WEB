import axios from "axios";
import type AnimalModel from "../model/animal_model";

class AnimalService {
    static async carregar( 
    ): Promise<AnimalModel[] | null> {

            const token = localStorage.getItem('minhaAulaSenai')

            const response =
                 await axios.get(
                    'http://localhost:3001/usuarios',
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
                );
            console.log(response.data);

            return response.data;
    }

    static async apagar(id: string): Promise<boolean> {
        const response = await axios.delete("http://localhost:3000/animal/"+id)
        if(response.status == 200) {
            return true;
        } else {
            return false;
        }
    }

    static async inserir(novoAnimal: AnimalModel): Promise<boolean> { 
        console.log('Enviando novo animal para o backend:', novoAnimal);

        const response = await axios.post("http://localhost:3000/animal", novoAnimal)
        if(response.status == 201) {
            return true;
        } else {
            return false;
        }
    }
}

export default AnimalService;

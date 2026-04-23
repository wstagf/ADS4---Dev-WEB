import axios from "axios";
import type AnimalModel from "../model/animal_model";

class AnimalService {
    static async carregar( 
    ): Promise<AnimalModel[] | null> {
            const response = await axios.get('http://localhost:3000/animais', );
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
}

export default AnimalService;

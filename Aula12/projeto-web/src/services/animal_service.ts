import axios from "axios";
import type AnimalModel from "../model/animal_model";

class AnimalService {
    static async carregar( 
    ): Promise<AnimalModel[] | null> {
            const response = await axios.get('http://localhost:3000/animais', );
            console.log(response.data);

            return response.data;
    }
}

export default AnimalService;

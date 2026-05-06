import axios from "axios";

class LoginService {
    static async login(
            usuario: string, senha: string
    ): Promise<boolean> {
            const response = await axios.post('http://localhost:3000/login', {
                username: usuario,
                password: senha
            });

            console.log(response.data);

             return response.status === 200 && response.data.success === true;

    }
}

export default LoginService;

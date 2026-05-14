import axios from "axios";

class LoginService {
    static async login(
            usuario: string, senha: string
    ): Promise<boolean> {
            const response = await 
                axios.post('http://localhost:3001/login', 
                    {
             "usuario": usuario,
                "senha": senha
                }
            );

            if (response.status === 200) {
                console.log(response.data);
                
                localStorage.setItem('minhaAulaSenai', response.data.token)

                return response.status === 200 && response.data.success === true;
            
            } else {
                return false;
            }

           
    }
}

export default LoginService;

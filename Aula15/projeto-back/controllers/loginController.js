const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const usuarioRepository = require("../repository/usuariosRepository");

const SECRET_KEY = 'aula-senai-seguranca-web'; // Em produção, usar variável de ambiente

const login = async (req, res) => {
    try {
        const { usuario, senha } = req.body;

        // Validar se os campos foram preenchidos
        if (!usuario || !senha) {
            return res.status(400).json({ 
                success: false, 
                error: "Usuário e senha são obrigatórios" 
            });
        }

        // Buscar usuário no banco
        const usuarioEncontrado = await usuarioRepository.buscarPorUsuario(usuario);

        if (!usuarioEncontrado) {
            return res.status(401).json({ 
                success: false, 
                error: "Usuário ou senha incorretos" 
            });
        }

        // Verificar senha
        const senhaCorreta = await bcrypt.compare(senha, usuarioEncontrado.senha);

        if (!senhaCorreta) {
            return res.status(401).json({ 
                success: false, 
                error: "Usuário ou senha incorretos" 
            });
        }

        // Gerar token JWT
        const token = jwt.sign(
            { 
                id: usuarioEncontrado.id, 
                usuario: usuarioEncontrado.usuario,
                email: usuarioEncontrado.email 
            },
            SECRET_KEY,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            success: true,
            token: token,
            usuario: {
                id: usuarioEncontrado.id,
                nome: usuarioEncontrado.nome,
                email: usuarioEncontrado.email,
                usuario: usuarioEncontrado.usuario
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            success: false, 
            error: "Erro ao fazer login" 
        });
    }
};

module.exports = { login };

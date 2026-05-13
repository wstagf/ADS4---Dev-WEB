const bcrypt = require('bcrypt');
const usuarioRepository = require("../repository/usuariosRepository");

const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioRepository.listar();
        res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao listar usuários" });
    }
};

const criarUsuario = async (req, res) => {
    try {
        const { nome, email, usuario, senha } = req.body;
        
        if (!nome || !email) {
            return res.status(400).json({ error: "Nome e email são obrigatórios" });
        }

        // Se fornecer usuário e senha, validar e fazer hash
        if (usuario && senha) {
            if (senha.length < 3) {
                return res.status(400).json({ error: "Senha deve ter pelo menos 3 caracteres" });
            }

            const senhaHash = await bcrypt.hash(senha, 10);
            const usuarioCriado = await usuarioRepository.criarComSenha(nome, email, usuario, senhaHash);
            return res.status(201).json(usuarioCriado);
        }
    } catch (error) {
        console.error(error);
        
        if (error.message.includes('UNIQUE')) {
            return res.status(409).json({ error: "Usuário ou email já cadastrado" });
        }
        
        res.status(500).json({ error: "Erro ao criar usuário" });
    }
};

const atualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email, usuario, senha } = req.body;
        
        if (!nome || !email) {
            return res.status(400).json({ error: "Nome e email são obrigatórios" });
        }

        // Se forneceu senha, fazer hash
        if (senha) {
            if (senha.length < 3) {
                return res.status(400).json({ error: "Senha deve ter pelo menos 3 caracteres" });
            }
        }

        const resultado = await usuarioRepository.atualizar(id, nome, email, usuario, senha);
        
        if (resultado.changes === 0) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        
        res.status(200).json({ 
            mensagem: "Usuário atualizado com sucesso",
            usuario: resultado 
        });
    } catch (error) {
        console.error(error);
        
        if (error.message.includes('UNIQUE')) {
            return res.status(409).json({ error: "Usuário ou email já cadastrado" });
        }
        
        res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
};

const deletarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await usuarioRepository.deletar(id);
        
        if (resultado.changes === 0) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        
        res.status(200).json({ mensagem: "Usuário deletado com sucesso", id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar usuário" });
    }
};

module.exports = {
    listarUsuarios,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};
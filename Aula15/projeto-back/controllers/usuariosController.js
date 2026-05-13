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
        const { nome, email } = req.body;
        
        if (!nome || !email) {
            return res.status(400).json({ error: "Nome e email são obrigatórios" });
        }
        
        const usuario = await usuarioRepository.criar(nome, email);
        res.status(201).json(usuario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar usuário" });
    }
};

const atualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, email } = req.body;
        
        if (!nome || !email) {
            return res.status(400).json({ error: "Nome e email são obrigatórios" });
        }
        
        const usuario = await usuarioRepository.atualizar(id, nome, email);
        
        if (usuario.changes === 0) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        
        res.status(200).json(usuario);
    } catch (error) {
        console.error(error);
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
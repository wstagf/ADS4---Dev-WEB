const usuariosDAO = require("../dao/usuariosDAO");


const listar = async () => {
    return await usuariosDAO.listarUsuarios();
};

const criar = async (nome, email) => {
    return await usuariosDAO.criarUsuario(nome, email);
};

const criarComSenha = async (nome, email, usuario, senhaHash) => {
    return await usuariosDAO.criarUsuarioComSenha(nome, email, usuario, senhaHash);
};

const buscarPorUsuario = async (usuario) => {
    return await usuariosDAO.buscarPorUsuario(usuario);
};

const atualizar = async (id, nome, email) => {
    return await usuariosDAO.atualizarUsuario(id, nome, email);
};

const deletar = async (id) => {
    return await usuariosDAO.deletarUsuario(id);
};

module.exports = {
    listar,
    criar,
    criarComSenha,
    buscarPorUsuario,
    atualizar,
    deletar
};

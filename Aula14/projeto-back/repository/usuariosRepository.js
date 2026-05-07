const usuariosDAO = require("../dao/usuariosDAO");

const listar = async () => {

    const usuarios = await usuariosDAO.listarUsuarios();

    return usuarios.map(usuario => ({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
    }));

};

module.exports = {
    listar
};
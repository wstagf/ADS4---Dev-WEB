const usuarioRepository = require("../repository/usuariosRepository");

const listarUsuarios = async (req, res) => {

    try {

        const usuarios = await usuarioRepository.listar();

        res.status(200).json(usuarios);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Erro ao listar usuários"
        });

    }

};

module.exports = {
    listarUsuarios
};
const db = require("../database");

const listarUsuarios = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM usuarios", [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

const criarUsuario = (nome, email) => {
    return new Promise((resolve, reject) => {
        db.run(
            "INSERT INTO usuarios (nome, email) VALUES (?, ?)",
            [nome, email],
            function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID, nome, email });
                }
            }
        );
    });
};

const atualizarUsuario = (id, nome, email) => {
    return new Promise((resolve, reject) => {
        db.run(
            "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?",
            [nome, email, id],
            function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id, nome, email, changes: this.changes });
                }
            }
        );
    });
};

const deletarUsuario = (id) => {
    return new Promise((resolve, reject) => {
        db.run(
            "DELETE FROM usuarios WHERE id = ?",
            [id],
            function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id, changes: this.changes });
                }
            }
        );
    });
};

module.exports = {
    listarUsuarios,
    criarUsuario,
    atualizarUsuario,
    deletarUsuario
};
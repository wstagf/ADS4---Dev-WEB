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

module.exports = {
    listarUsuarios
};
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'aula-senai-seguranca-web';// Mesmo da chave do login controller

const autenticar = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({
                error: 'Token não fornecido'
            });
        }

        const payload = jwt.verify(token, SECRET_KEY);
        req.usuario = payload;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                error: 'Token expirado'
            });
        }
        
        return res.status(401).json({
            error: 'Token inválido'
        });
    }
};

module.exports = autenticar;

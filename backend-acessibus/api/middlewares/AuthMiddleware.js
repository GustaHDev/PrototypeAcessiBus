class AuthMiddleware {
    async validation(req, res, next) {
        const token = req.headers['authorization'];

        if(!token) {
            return res.status(401).json({ error: "Acesso negado. É preciso fazer login para continuar" });
        }

        // TODO: lógica de validação

        next();
    }
}

module.exports = new AuthMiddleware();
const UserService = require('../services/UserService');

class UserController {
    register = async (req, res) => {
        const { nome, email, senha } = req.body;

        try{
            const user = await UserService.registerUser(nome, email, senha)
            return res.status(201).json(user);
        } catch (error) {
            if (error.message === "Já existe um usuário com este email") {
                return res.status(400).json({ error: error.message });
            }
            console.log(error)
            return res.status(500).json({ error: "Erro interno do servidor" })
        }
    }

    getProfile = async (req, res) => {
        try {
            const userId = req.userId
            const user = await UserService.getUserById(userId)
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: "Erro ao buscar perfil" })
        }
    }
}

module.exports = new UserController();
const UserRepository = require('../repositories/UserRepository');

class UserService {

    async registerUser(nome, email, senha) {
        const userExists = await UserRepository.findUserByEmail(email);

        if (userExists) {
            throw new Error("Já existe um usuário com este email");
        }

        //TODO: criptografar senha

        const newUser = await UserRepository.create({ nome, email, senha });

        return newUser;
    }
}

module.exports = new UserService();
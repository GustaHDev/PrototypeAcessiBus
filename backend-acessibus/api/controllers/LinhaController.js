const LinhaService = require('../services/LinhaService');
const linhaService = require('../services/LinhaService')

class LinhaController {
    register = async (req, res) => {
        const { codigo, nomeLinha, itinerario, sentido } = req.body;

        try {
            const linha = linhaService.registerLinha(codigo, nomeLinha, itinerario, sentido);
            return res.status(200).json(linha)
        } catch (error) {
            return res.status(500).json({ error: "Erro ao salvar linha no banco" });
        }
    }

    search = async (req, res) => {
        const termo = req.body.termo || req.query.termo;

        try {
            const results = await linhaService.searchLinha(termo);
            return res.json(results);
        }
        catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new LinhaController();
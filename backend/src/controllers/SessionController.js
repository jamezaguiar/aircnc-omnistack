const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;
    let user = await User.findOne({ email }); // Procura usuário com email informado no corpo da requisição
    if (!user) {
      // Se não encontrar:
      user = await User.create({ email }); // Cria usuário
    }
    return res.json(user); // O retorno abrange os dois casos, se achar um usuário com email já existente, o retornará, caso não, retornará após a criação
  }
};

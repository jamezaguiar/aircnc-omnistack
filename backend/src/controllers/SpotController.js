const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const { tech } = req.query;
    const spots = await Spot.find({ techs: tech });
    return res.json(spots);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user_id } = req.headers;

    // Verificação de existência de usuário
    const user = await User.findById(user_id); // Variável user recebe um usuário buscado pelo id
    if (!user) {
      // Se não encontrar
      return res.status(400).json({ error: "User does not exists" }); // Retorna mensagem de erro
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company,
      techs: techs.split(",").map(tech => tech.trim()),
      price
    });

    return res.json(spot);
  }
};

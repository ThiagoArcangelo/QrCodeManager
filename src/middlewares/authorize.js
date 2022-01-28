const Params = require("../models/Params");

const authorize = async (req, res, next) => {
  const { id } = req.params;

  const getId = await Params.findById(id);

  if (!getId) {
    return res.status(400).json({ error: "Bad request" });
  }

  try {
    const password = await getId.password;
 
    res.password = password;

    if (!password) {
      return res
        .status(400)
        .json({ message: "Erro ao processar sua requisição" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error, message: "A sua requisição não foi processada." });
  }

  next();
};

module.exports = authorize;

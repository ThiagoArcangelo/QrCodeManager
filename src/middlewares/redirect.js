const Projects = require("../models/Projects");

exports.redirect = async (req, res, next) => {
  const { id } = req.params;
  const key = req.query;

  if(!key) {
    return res.status(400).json({message: "Digite a chave de acesso"});
  }

  try {
    const idValidate = await Projects.find({ id }, (err, data) => {
      if (err) {
        return res.status(400).json({ message: "Projeto inexistente." });
      }

      if(key != data.key) {
        return res.status(400).send({message: "Chave inválida"});
      }
    });
  } catch (error) {
    return res
      .status(400)
      .send({ error, message: "Não foi possível processar sua requisição" });
  }

  req.userId = decoded.id;
  req.key = key;

  next();
};

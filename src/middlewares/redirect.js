const Projects = require("../models/Projects");

exports.validate =  async (req, res, next) => {
  const { id } = req.params;
  const { key } = req.body;

  const idValidate = await Projects.findById(id, (err, result) => {
    if (err) {
      res.status(400).json({ message: "Erro ao processar sua requisição" });
    }

    if (!id) {
      res.status(400).json({ message: "Projeto inexistente" });
    }

    if (key != result.key || key == '') {
      res.status(400).send({ message: "Chave inválida" });
    }

    res.status(200).send(result);
  });

  req.id = id;

  next();
};

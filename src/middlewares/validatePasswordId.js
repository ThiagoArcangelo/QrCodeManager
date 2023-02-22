const Projects = require("../models/Projects");

exports.validatePassword = async (req, res, next) => {
  const { id } = req.params;

  const password = req.headers["x-password"];

  await Projects.findById(id)
    .then((data) => {
      if (!data._id) {
        res.status(400).send("Conteúdo não encontrado!");
      }
      if (data.key === password) {
        req.id = id;
        next();
      }
    })
    .catch((error) => {
      res
        .status(400)
        .json({ message: "Sua requisição não foi processada.", error: error });
    });
};

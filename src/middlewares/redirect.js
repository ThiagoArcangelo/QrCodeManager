const { urlencoded } = require("express");
const Projects = require("../models/Projects");

exports.validate = async (req, res, next) => {
  const { id } = req.params;
  const { key } = req.query;

  try {
    const idValidate = await Projects.findOne({ _id: id });

    if (!idValidate) {
      res.status(400).json("Projeto inexistente");
    }

    if (key != idValidate.key) {
      return res
        .status(400)
        .json({ message: "Chave inválida. Digite novamente." });
    }

    req.id = id;

    return res.status(200).json(idValidate.adress);
  } catch (error) {
    res.status(400).json({ message: "Operação não realizada." });
  }

  next();
};

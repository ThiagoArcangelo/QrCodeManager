const { urlencoded } = require("express");
const Projects = require("../models/Projects");

exports.validate =  async (req, res, next) => {
  const { id } = req.params;
  const { key } = req.query;

  const idValidate = await Projects.findById(id);

  if(!idValidate) {
    res.status(400).json('Projeto inexistente');
  }

  if(key != idValidate.key || key == null) {
    res.status(400).json({message: 'Chave inválida.'});
  }
   
  req.id = id;

  return res.status(200).json(idValidate.adress);

  next();
};

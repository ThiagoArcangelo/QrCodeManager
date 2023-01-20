const Projects = require("../models/Projects");

exports.validate = async (req, res) => {
  const projId = require(req.id);

  const validateProj = await Projects.findById({ id: req.id });
};

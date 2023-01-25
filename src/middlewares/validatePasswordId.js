const Projects = require("../models/Projects");

exports.validatePassword = async (req, res, next) => {
  const { id } = req.params;

  const password = req.headers["x-password"];

/*   const Project =  */Projects.findOne({ _id: id })
    .then((data) => {
      if (!id) {
        res.status(400).send({ message: "Usuário não encontrado" });
      }
      if (data.password === password) {
        req.id = id;
        next();
      }
    })
    .catch((error) => {
      res
        .status(400)
        .json({ message: "Sua requisição não foi processada.", error });
    });
    

  
};

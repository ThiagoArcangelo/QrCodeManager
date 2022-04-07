const Params = require("../models/Projects");

exports.authorize = async (req, res, next) => {

  const { id } = req.params; 
  const { key } = req.body;
  
  const keyUserExists = await Params.find({id: id, key: key}, (err, data) => {
    if(err) {
      return res.status(400).json({message: "Chave inválida!"});
    }

    else if(key !== data.key) {
      return res.status(400).json({error: "Invalid Key"});
    }
  }) 

  req.userId = decoded.id;
  
  next();
  
};

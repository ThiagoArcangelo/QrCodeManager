const Params = require("../models/Params");

exports.authorize = async (req, res, next) => {

  const { id } = req.params; 
  const { key } = req.body;
  
  const keyUser = Params.find({key: key}, (err, data) => {
    if(err) {
      return res.status(400).json({message: "Invalid Key"});
    }

    else if(data !== id.key) {
      return res.status(400).json({error: "Invalid Key"});
    }
  }) 

  
  
  next();
  
};

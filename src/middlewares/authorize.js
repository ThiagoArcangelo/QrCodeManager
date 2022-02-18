const User = require('../models/User');

exports.authorize = async (req, res, next) => {
  const { id } = req.params;
  const { password } = req.body;

  const userExists = await User.find({id: id, password: password});

  if(!userExists) {
    res.status(400).json({message: 'Not found'});
  } 

  res.redirect(`client/${id}`);


  next();

}




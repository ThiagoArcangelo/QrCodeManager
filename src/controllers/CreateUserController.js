const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { config } = require("dotenv");


// Listar usuários
exports.index = async (req, res) => {
  const listUser = await User.find({});

  return res.status(200).json(listUser);
};

// Registro de usuário - Admin
exports.create = async (req, res) => {
  const hashPass = bcrypt.hash(req.body.password, 10);
  const { name, email } = req.body;
  // const { email } = req.body;

  // validations
  if (!email) {
    return res.status(422).json({ message: "O email é obrigatório." });
  }

  if (!hashPass) {
    return res.status(422).json({ message: "O password é obrigatório." });
  }

  // Checar se email está cadastrado
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(422).json({
      message: "Este email já foi registrado. Cadastre-se ou faça login",
    });
  }

  // Objeto de criação de usuário
  const user = await User.create({
    name,
    email,
    password: hashPass,
  });

  try {
    await user.save();

    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ erro: error, message: "Erro ao processar sua requisição." });
  }
};
/* 
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    const passwordIsValid = bcrypt.compare(req.body.password, user.password);

    if (user) {
          
    }

    const token = jwt.sign({id: user._id}, config.secret, {
      expiresIn: config.expiresIn
    })
  } catch {

  }
};
 */
/* 
Usuario.findOne({ email: req.body.email }, function (err, user) {
  if (err) return res.status(500).send('Ocorreu um erro inesperado no servidor.');
  if (!user) return res.status(404).send('Usuário não encontrato.');

  var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

  var token = jwt.sign({ id: user._id }, config.secret, {
    expiresIn: config.expiresIn //Tempo que expira a chave
  });
  res.status(200).send({ auth: true, token: token });
}); */
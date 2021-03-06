const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/authConfig.json");
/* const req = require("express/lib/request");
const res = require("express/lib/response"); */

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

// Listar usuários
exports.list = async (req, res) => {
  const listUser = await User.find({});

  return res.status(200).json(listUser);
};

// Registro de usuário - Admin
exports.create = async (req, res) => {
  try {
    // const hashPass = bcrypt.hash(req.body.password, 10);
    const { name, email, password } = req.body;

    // validations
    if (!email) {
      return res.status(422).json({ message: "O email é obrigatório." });
    }

    if (!password) {
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
      password,
    });

    user.password = undefined;

    // await user.save();

    res.send({
      message: "Usuário criado com sucesso",
      user,
      token: generateToken({ id: user.id }),
    });
  } catch (error) {
    res
      .status(400)
      .json({ error, message: "Erro ao processar sua requisição." });
  }
};

// Atualização de Cadastro do Usuário
exports.update = async (req, res) => {
  const { id } = req.params;

  try {
    const UserUpdate = await User.findByIdAndUpdate(id, req.body);

    res.status(200).json(UserUpdate);
  } catch (error) {
    res.status(400).json({ error, msg: "Erro ao processar sua requisição" });
  }
};

// Remove usuário
exports.remove = async (req, res) => {
  const { id } = req.params;

  try {
    const userClient = await User.findByIdAndRemove(id);

    if (!userClient) {
      res.status(200).json("Projeto removido");
    }
  } catch (error) {
    res.status(400).json({ error, msg: "Erro ao processar sua requisição" });
  }
};

/* exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email: email, password: password});

  if (!userExists) {
    res.status(400).json({ message: "Email ou Senha incorretos" });
  } else {
    // res.redirect('/client');
    // res.send("Direcionado para a rota create client");
  }
};

exports.signOut = (req, res) => {}; */

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).send({ error: "User not found" });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).send({ error: "Invalid passwod" });
  }

  user.password = undefined;

  res.send({
    user,
    token: generateToken({ id: user.id }),
  });
};

exports.logout = (req, res) => {
  res.status(200).send({ auth: false, token: null });
  // res.redirect('/');
};

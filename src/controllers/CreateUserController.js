const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

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
      // password: hashPass,
      password,
    });

    await user.save();

    res.status(201).json({ message: "Usuário criado com sucesso" });
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
      res.status(200).json("Cliente removido");
    }
  } catch (error) {
    res.status(400).json({ error, msg: "Erro ao processar sua requisição" });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  const userExists = await User.findOne({ email: email, password: password});

  if (!userExists) {
    res.status(400).json({ message: "Email ou Senha incorretos" });
  } else {
    // res.redirect('/client');
    // res.send("Direcionado para a rota create client");
  }
};

exports.signOut = (req, res) => {};

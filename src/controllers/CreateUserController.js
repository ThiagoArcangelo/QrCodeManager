const User = require("../models/User");
const bcrypt = require("bcrypt");
const { v4 : uuidV4} = require('uuid');

const uuid = uuidV4();

// Registro de usuário

exports.create = async (req, res) => {
  const { name, email, password } = req.body;
  // const { email } = req.body;

  const hashPassword = await bcrypt.hash(req.body.password, 10);

  // validations
  if (!email) {
    return res.status(422).json({ message: "O email é obrigatório." });
  }

  if (!password) {
    return res.status(422).json({ message: "O password é obrigatório." });
  }

  // Checar se email está cadastrado
  const userExists = await User.findOne({email});

  if (userExists) {
    return res.status(422).json({
      message: "Este email já foi registrado. Cadastre-se ou faça login",
    });
  }

  // Objeto de criação de usuário
  const user = new User({
    name,
    email,
    // password: hashPassword,
    password,
  });


  try {

    await user.save();

    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ erro: error, message: "Erro ao processar sua requisição." });
  }

  //   res.redirect('home');
};

// Listar usuários

exports.index = async (req, res) => {
  const listUser = await User.find({});

  return res.status(200).json(listUser);
};

// Atualizar usuário

exports.put = async (req, res) => {
  const userUpdate = req.params.id;
  const { password } = req.body;

  try {
    const user = User.updateOne({ password: password }, user);
    if (user === 0) {
      res.status(422).json({ message: "Usuário não encontrado" });
      return;
    }

    res.save();

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ erro: error, message: "A sua requisição não foi processada." });
  }
};

// Deletar usuário

exports.delete = async (req, res) => {
  const id = req.params;

  const user = await User.findOne({ _id: id });

  if (!user) {
    res.status(422).json({ message: "Usuário não encontrado!" });
    return;
  }

  try {
    await User.deleteOne({ _id: ":id" });

    res.status(200).json({ message: "Usuário removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
};

const User = require("../models/User");
const bcrypt = require("bcrypt");
const { v4: uuidV4 } = require("uuid");

const uuid = uuidV4();

// Registro de usuário - Admin
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
    // password: hashPassword,
    password,
    id: uuidV4(),
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

// Atualizar usuário - Admin
exports.put = async (req, res) => {
  const { id } = req.params.id;
  const { name, password } = req.body;

  const user = User.findOne((item) => item.id == id);

  if (!user) {
    return res.status(204).json({ message: "O usuário não existe" });
  }

  user.name = name;
  user.password = password;

  res.send(user);
}

// Deletar usuário - Admin
exports.remove = async (req, res) => {
  try {

    const user = await User.findByIdAndRemove(req.params.id);

    res.status(200).json({message: "Cadastro removido com sucesso"})

  } catch (error) {
    res.status(400).json({message: "Erro ao processar sua requisição", error});
  }
  

};

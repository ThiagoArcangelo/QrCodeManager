const User = require("../models/User");

// Register User
exports.create = async (req, res) => {
  const { email, password } = req.body;

  // validations
  if (!email) {
    return res.status(422).json({ message: "O email é obrigatório." });
  }
  if (!password) {
    return res.status(422).json({ message: "O password é obrigatório." });
  }

  // check if email user exists
  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res
      .status(422)
      .json({
        message: "Este email já foi registrado. Cadastre-se ou faça login",
      });
  }

  // create user
  const user = new User({
    email,
    password,
  });

  try {
    await user.save();

    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: error });
  }

  //   res.redirect('home');
};

exports.index = async (req, res) => {
  const listUser = await User.find({});

  return res.status(200).json(listUser);
};

exports.put = async (req, res) => {
  const id = req.params.id
  const { email, password } = req.body

  const user = {
    email,
    password
  }

  try {
    const updateUser = User.updateOne({password: password}, user);
    if(updateUser === 0) {
      res.status(422).json({message: 'Usuário não encontrado'})
      return
    }

    res.save()

    res.status(200).json(user)

   } catch (error) {
    res.status(500).json({erro: error})
  }
}

exports.delete = async (req, res) => {
  const id = req.params;

  const user = await User.findOne({ _id: "id" });

  if (!user) {
    res.status(422).json({ message: "Usuário não encontrado!" });
    return;
  }

  try {
    await User.deleteOne({ _id: "id" });

    res.status(200).json({ message: "Usuário removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
};

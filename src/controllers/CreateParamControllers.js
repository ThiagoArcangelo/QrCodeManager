const Params = require("../models/Params");
const passwordVerify = require('../middlewares/passwordAuth');

// Listagem de URL - View
exports.get = async (req, res) => {
  const list = await Params.find();

  res.redirect('/verify');

  // return res.status(200).json(list);
};

// Listar Url - View
exports.getByURL = async (req, res) => {
  Params.findById(req.params.id)
    .then((data) => {
      res.status(200).send(data);

      res.redirect();
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

// Rota prar Criar novo Projeto - Admin
exports.create = async (req, res) => {
  try {
    
    const { name, title, adress, password } = req.body;

    if (!name) {
      return res.status(400).json({ messageg: "Digite o nome da empresa" });
    }

    if (!title) {
      return res
        .status(400)
        .json({ messageg: "Digite um nome para o projeto" });
    }

    if (!adress) {
      return res.status(400).json({ message: "Digite o endereço de acesso" });
    }

    if (!password) {
      return res.status(400).json({ message: "A senha é obrigatória." });
    }

    const adressExists = await Params.findOne({ adress });

    if (adressExists) {
      return res.status(500).json({
        message: "A url deste projeto ja esta registrado. Ultilize outra url",
      });
    }

    const params = await Params.create({
      name,
      title,
      adress,
      password
    });

    await params.save();

    res.status(201).json({ message: "Link criado com sucesso" });

    return params.adress

  } catch (error) {
    console.log(error, "Não foi possível salvar o arquivo no banco de dados.");

    res.status(500).json(error, {
      message: "Não foi possível salvar o arquivo no banco de dados.",
    });
  }
};

exports.verify = async (req, res) => {
  try {
    let url = Params.distinct("adress");

    (await url).toString()

    if(passwordVerify.password == Params.password) {
      res.redirect(url)
    }    
  } catch (error) {
    
  }
}
const Params = require("../models/Params");
const jwt = require('jsonwebtoken');

// Listagem de URL - View => Admin
exports.get = async (req, res) => {
  const list = await Params.find();

  return res.status(200).json(list);  
};

// Listar Url - View => Parametro para permissãoa
exports.getById = async (req, res) => {
  const { _id } = req.params;

  const getContent = Params.findOne({_id}, (err, content) => {
    if(err) {
      return res.status(400).json({message: "Erro ao processar requisição "})
    }
    // res.json(content.adress);
    res.redirect('/entrar')
  });
  
}


// Criar novo Projeto - Admin
exports.create = async (req, res) => {
  try {
    const { name, title, adress, password } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Digite o nome da empresa" });
    }

    if (!title) {
      return res.status(400).json({ message: "Digite um nome para o projeto" });
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
      password,
    });

    await params.save();

    res.status(201).json({ message: "Link criado com sucesso" });

    // return params.adress;
  } catch (error) {
    console.log(error, "Não foi possível salvar o arquivo no banco de dados.");

    res.status(400).json(error, {
      message: "Não foi possível salvar o arquivo no banco de dados.",
    });
  }
};

// Atualização de senha do projeto
exports.updatePassword = async (req, res) => {
  const id = req.params;
  const { password } = req.body;

  try {
    const projectUpdate = await Params.findByIdAndUpdate(id, password);

    res.status(200).json({msg: "Senha atualizada com sucesso"});
    
  } catch (error) {
    res.status(400).json({erro, msg: "Erro ao processar sua requisição"});
  }
}

// Autenticação
exports.authenticate = async (req, res) => {
  const { password } = req.body;

  const {id} = req.params;

  const permissions = await Params.find();

  if (password) {
    res.redirect("/project/:_id");
  } else {
    res.status(400).send("Senha incorreta");
  }
};



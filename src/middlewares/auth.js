const jwt = require("jsonwebtoken");
const authConfig = require("../../config/authConfig.json");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não enviado" });
  }

  const parts = authHeader.split(" ");

  // Bearer jsodjodjfsodj fsoidfjosdjif osdij838 3 => (hash)
  const [scheme, token] = parts;

  if (!parts.length === 2)
    return res.status(401).send({ error: "Token error" });

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: "Token mal formatado" });
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Token inválido" });

    // Pegar o id com req.userId atraves do decoded que recebe a informação de id do usuario

    req.userId = decoded.id;
    return next();
  });
};

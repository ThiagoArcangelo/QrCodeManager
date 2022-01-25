const { Router } = require("express");

const router = Router();

// Open Route - Public Route
router.get("/", (req, res) => {
  res.status(200).json({
    Versão: "1.0.0",
    message: "Api rodando no server" 
  });
});

module.exports = router;

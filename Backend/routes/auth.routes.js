const express = require('express');
const { registerUser, loginUser, actualizarPassword } = require("../controllers/authController.js"); // Importar las funciones

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.put('/password/:id', actualizarPassword);

module.exports = router;

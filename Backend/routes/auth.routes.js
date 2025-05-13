const express = require('express');
const { registerUser, loginUser } = require("../controllers/authController.js"); // Importar las funciones

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

export default router;

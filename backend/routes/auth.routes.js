import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
// bu sayfada router oluşturduk ve bu router'ı server.js dosyasında kullanacağız.
// router şu demek: bir grup route'u bir araya getirip, bir yere yönlendirmek.
const router = express.Router();

router.post("/signup", signup); // signup fonksiyonunu çağırır.

router.post("/login", login); // login fonksiyonunu çağırır.

router.post("/logout", logout); // logout fonksiyonunu çağırır.

export default router;

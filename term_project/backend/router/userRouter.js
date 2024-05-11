import { Router } from "express";

import { responsed,Userdetails } from "../controller/userController.js";
const router=Router();



router.route("/resd",).get(
    responsed
)
router.route("/register").post(
Userdetails
)



export {router};
import { Router } from "express";

import { responsed,Userdetails } from "../controller/userController.js";
const router=Router();

import { upload } from "../middleware/multer.js";
;
router.route("/resd",).get(
    responsed
)
router.route("/register").post(
    
    upload.single("image1"), 
    
Userdetails
)



export {router};
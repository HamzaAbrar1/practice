import express from "express";

import {connect} from "./mongoconnection/db.js";
import { router } from "./router/userRouter.js";
;
connect().then(
()=>{
const app=express();

const obj={

name:"Hamza Abrar",
roll_no:"84",
Section:"A",
Session:'FA21-BCS'

}

app.use(
    express.json()
);
app.use(
    express.urlencoded(
        {
            extended:false
        }
    )
);

app.use("/users",router);
// app.get("/user",router);

app.get("/",(req,res)=>{
res.send(obj);

})


app.listen(8000,()=>{
console.log("successfully listening a basic");

})


}).catch(

    ()=>{

        console.log("there is an error in connecting to the database");
        }
)
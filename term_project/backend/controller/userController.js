import { User } from "../model/userModel.js";


const responsed=async(req,res)=>{

    res.send("Chichi papa");


}


const Userdetails=async(req,res)=>{


const {
name,email,username,password
}=req.body
;
console.log(name)
;
console.log(email);
console.log(username);
console.log(password);

let sd=await User.create(

{

name : name,
email : email,
username :username,
password :password,
}
);
// const finds=User.findOne(
//     {
// name:name

//     }
// )

// console.log(finds);
// res.status(200).json(
// finds
// );

return res.status(200).json(
    sd
)


}

export {
    responsed,
    Userdetails
};

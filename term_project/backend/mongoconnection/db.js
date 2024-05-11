import mongoose from "mongoose";

const connect = async () => {
  try {
    let connect =
      "mongodb+srv://hamzaabrar11:hamza123@cluster0.apt8kwf.mongodb.net";
    let dbname = "Backend";

    let connection = await mongoose.connect(`${connect}/${dbname}`);

    if (connection) {
      console.log("you have successfully connected to the database");
    } else {
      console.log("there is error in conenecting to the database");
    }
  } catch (error) {
    console.log("there is an error in connecting to the database");
  }
};

export {connect};

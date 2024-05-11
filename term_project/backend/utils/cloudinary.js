import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "dgsvl0nzs",
  api_key: "913185244712735",
  api_secret: "p9mv6YbjeHkjATJUuChnszSTUiQ",
});

const uploadOnCloudinary = async (localfilepath) => {
  
    console.log("something");
    try {

    if (!localfilepath) return null;


    // Upload image to Cloudinary
    const response = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
    });

    if(response){
    // Log the URL of the uploaded image
    console.log("File has been uploaded on Cloudinary:", response.url);
    }
    // Delete the locally saved temporary file
    // fs.unlinkSync(localfilepath);

    // Return the URL of the uploaded image
    return response.url;
  } catch (error) {
    // Handle errors
    console.error("Error uploading image to Cloudinary:", error);

    // Delete the locally saved temporary file
    fs.unlinkSync(localfilepath);

    // Return null or throw an error, depending on your requirements
    return null;
  }
};
// uploadOnCloudinary('./Screenshot 2024-04-29 004112.png');


export { uploadOnCloudinary };

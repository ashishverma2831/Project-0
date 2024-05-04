// import {v2 as cloudinary} from 'cloudinary';
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({ 
  cloud_name: 'dof7hiljv', 
  api_key: '176618429877884', 
  api_secret: 't1Ep8h-nzZ1R9tA6PeO3NLJkVqE'
});


// const uploadOnCloudinary = async (localFilePath) => {
//   try {
//       if (!localFilePath) return null
//       //upload the file on cloudinary
//       const response = await cloudinary.uploader.upload(localFilePath, {
//           resource_type: "auto"
//       })
//       // file has been uploaded successfull
//       //console.log("file is uploaded on cloudinary ", response.url);
//       fs.unlinkSync(localFilePath)
//       return response;

//   } catch (error) {
//       fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
//       return null;
//   }
// }
// export {uploadOnCloudinary}





// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });

// Return "https" URLs by setting secure: true
// cloudinary.config({
//   secure: true
// });

// Log the configuration
// console.log(cloudinary.config());

/////////////////////////
// Uploads an image file
/////////////////////////
// const uploadImage = async (imagePath) => {

//   // Use the uploaded file's name as the asset's public ID and 
//   // allow overwriting the asset with new versions
//   const options = {
//     use_filename: true,
//     unique_filename: false,
//     overwrite: true,
//   };

//   try {
//     // Upload the image
//     const result = await cloudinary.uploader.upload(imagePath, options);
//     console.log(result);
//     return result.public_id;
//   } catch (error) {
//     console.error(error);
//   }
// };

/////////////////////////////////////
// Gets details of an uploaded image
/////////////////////////////////////
// const getAssetInfo = async (publicId) => {

//   // Return colors in the response
//   const options = {
//     colors: true,
//   };

//   try {
//       // Get details about the asset
//       const result = await cloudinary.api.resource(publicId, options);
//       console.log(result);
//       return result.colors;
//       } catch (error) {
//       console.error(error);
//   }
// };

//////////////////////////////////////////////////////////////
// Creates an HTML image tag with a transformation that
// results in a circular thumbnail crop of the image  
// focused on the faces, applying an outline of the  
// first color, and setting a background of the second color.
// //////////////////////////////////////////////////////////////
// const createImageTag = (publicId, ...colors) => {
    
//   // Set the effect color and background color
//   const [effectColor, backgroundColor] = colors;

//   // Create an image tag with transformations applied to the src URL
//   let imageTag = cloudinary.image(publicId, {
//     transformation: [
//       { width: 250, height: 250, gravity: 'faces', crop: 'thumb' },
//       { radius: 'max' },
//       { effect: 'outline:10', color: effectColor },
//       { background: backgroundColor },
//     ],
//   });

//   return imageTag;
// };

//////////////////
//
// Main function
//
//////////////////
// (async () => {

//   // Set the image to upload
//   const imagePath = 'https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg';

//   // Upload the image
//   const publicId = await uploadImage(imagePath);

//   // Get the colors in the image
//   const colors = await getAssetInfo(publicId);

//   // Create an image tag, using two of the colors in a transformation
//   // const imageTag = await createImageTag(publicId, colors[0][0], colors[1][0]);

//   // Log the image tag to the console
//   // console.log(imageTag);

// })();

 



          


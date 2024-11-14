import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Cloudinary Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    if (!localFilePath) return null; // Ensure a file path is provided

    try {
        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        console.log("File successfully uploaded to Cloudinary:", response.url);
        return response.url;  // Return only the URL

    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        return null;
    } finally {
        // Remove the locally saved temporary file regardless of success or failure
        if (fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath);
        }
    }
};

export { uploadOnCloudinary };
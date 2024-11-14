// multer.middleware.js
import multer from "multer";

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp'); // Ensure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Optionally, generate a unique filename here
    }
});

export const upload = multer({
    storage,
});
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    // Assuming you will handle user registration logic here
    // For now, return a success message

    res.status(201).json({ // Change status code to 201 for resource creation
        message: "User registered successfully!" // Updated message for clarity
    });
});

export {
    registerUser,
};
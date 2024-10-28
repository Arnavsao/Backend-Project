const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(err => next(err)); // Corrected the syntax
    };
};

export { asyncHandler }; 
// Correct syntax for exporting



// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (err) {  // Changed `error` to `err` for consistency
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         });
//     }
// };
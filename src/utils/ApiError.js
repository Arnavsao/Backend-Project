class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
        super(message);  // Call the parent `Error` constructor with the message
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.errors = errors;  // Correctly assign the errors

        if (stack) {
            this.stack = stack;  // If stack is provided, use it
        } else {
            Error.captureStackTrace(this, this.constructor);  // Capture the stack trace for debugging
        }
    }
}

export default ApiError;
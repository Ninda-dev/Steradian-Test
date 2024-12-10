function errorHandler(err, req, res, next) {
    console.log(err, "THIS IS ERROR");

    let status = err.status || 500;
    let message = err.message || "Internal Server Error";

    switch (err.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            status = 400;
            message = err.errors[0].message;
            break;
        case "Unauthorized":
            status = 401;
            message = "Invalid Token";
            break;
        case "InvalidEmailOrPassword":
            status = 401;
            message = "Email not found or Password not matched";
            break;
        case "NotFound":
            status = 404;
            message = "Data not found";
            break;
        case "Forbidden":
            status = 403;
            message = "Forbidden, sorry your not admin";
            break;
    }

    res.status(status).json({ message });
}

module.exports = errorHandler;
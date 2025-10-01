const jwt = require('jsonwebtoken');
const { JWT_SECRET_ADMIN } = require('../config')



function adminMiddleware(req, res, next) {
    try {
        const token = req.headers['token'];

        if (!token) {
            return res.status(401).json({
                message: "token missing"
            })
        }
        const decodedData = jwt.verify(token, JWT_SECRET_ADMIN);

        req.userId = decodedData.id;
        next();

    }
    catch (err) {
        return res.status(403).json({
            message: "invalid token"
        })
    }

}

module.exports
    = {
        adminMiddleware:adminMiddleware
}
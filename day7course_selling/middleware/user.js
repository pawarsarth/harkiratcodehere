const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config')



function userMiddleware(req, res, next) {
    try {
        const token = req.headers['token'];

        if (!token) {
            return res.status(401).json({
                message: "token missing"
            })
        }
        const decodedData = jwt.verify(token, JWT_SECRET);

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
    userMiddleware: userMiddleware
}
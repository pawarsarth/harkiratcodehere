const express = require("express")
const jwt = require('jsonwebtoken')
const app = express()

app.use(express.json())
const users = []
const JWT_SECRET = 'savetheworlfromdevin'

function logger(req, res, next) {
    console.log(req.method + "request come")
    next();
}

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/signup', logger, function (req, res) {

    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.json({
        message: "user register done here"
    })

})
app.post('/signin', logger, function (req, res) {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username }, JWT_SECRET);
        user.token = token;
        res.json({ token });
    } else {
        res.status(403).json({ message: "failed to login here" });
    }
});

function auth(req, res, next) {
    const token = req.headers.token;
    if (!token) return res.status(401).json({ message: 'Token missing' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.username = decoded.username;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
}
app.get('/me', logger, auth, function (req, res) {
    const user = users.find(u => u.username == req.username)

    if (user) {
        res.json({
            message: "done",
            username: user.username,
            password: user.password
        })
    }
    else {
        res.status(403).json({
            message: "not user found here"
        })
    }

})
app.listen(3000)
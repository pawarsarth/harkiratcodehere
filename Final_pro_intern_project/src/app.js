const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const restaurantRouter = require("./routes/restaurantRouter");
const collectorRouter = require("./routes/collectorRouter");
const adminRouter = require("./routes/admin");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRouter)
app.use("/api/auth", authRouter);
app.use("/api/restaurant", restaurantRouter);
app.use("/api/collector", collectorRouter);


app.get("/ping", (req, res) => res.send("Pong 🏓"));

module.exports = app;

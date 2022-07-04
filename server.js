const { urlencoded } = require("express");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const corsOption = {
	origin: "*",
};
app.use(cors(corsOption));
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => res.json("hello world"));
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/products", require("./routes/productRoute"));

app.listen(5000, () => console.log("server connected"));

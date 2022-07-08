const { urlencoded } = require("express");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
var path = require("path");
const body_parser = require("body-parser");

const app = express();

const corsOption = {
	origin: "*",
};
app.use(cors(corsOption));
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => res.json("hello world"));
app.use("/api/crousels", require("./routes/crousels"));
app.use("/api/user", require("./routes/user"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/referal", require("./routes/referals"));
app.use("/api/testimonial", require("./routes/testimonial"));
app.use("/api/newsletter", require("./routes/newsLetter"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(5000, () => console.log("server connected"));

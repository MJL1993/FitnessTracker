const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODBZ_URI || "mongodb://localhost/Workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
},
console.log("Connected to mongoose")
);

require("./routes/api.js")(app);
require("./routes/html.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
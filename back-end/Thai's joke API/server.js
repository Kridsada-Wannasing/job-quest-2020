const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect("mongodb+srv://kridsada:1234567890@joke-db.lkxs3.mongodb.net/test", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database connections successful!"));

const port = 3000;

app.listen(port, () => {
  console.log(`port: ${port}`);
});

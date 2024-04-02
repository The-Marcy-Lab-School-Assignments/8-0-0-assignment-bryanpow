const express = require("express");
const app = express();
const port = 3002;
const path = require("path");

const userController = require("./controllers/user-controller");
const postsController = require("./controllers/post-controller");
const assetsController = require('./controllers/assets-controller')


app.get("/about", assetsController.about)
app.get("/footer", assetsController.footer)

app.get("api/posts", postsController.getPosts);

app.get("api/users", userController.getUser);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

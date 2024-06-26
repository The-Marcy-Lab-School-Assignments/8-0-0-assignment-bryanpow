const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
const path = require("path");

const {getUser} = require("./controllers/user-controller");
const {getPosts}= require("./controllers/post-controller");
const {about, footer} = require('./controllers/assets-controller')


app.get("/about", about)
app.get("/footer", footer)

app.get("/api/posts", getPosts);

app.get("/api/users", getUser);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});


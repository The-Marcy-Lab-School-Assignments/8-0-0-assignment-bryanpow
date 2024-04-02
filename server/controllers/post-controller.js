const db = require("../mock_db");

exports.getPosts = (req, res) => {
    const posts = db.posts
    if (!posts) {
        return res.status(404).send("No posts found");
    }
    return res.json({ result : posts})
  };
  
  
const db = require("../mock_db");

exports.getUser = (req, res) => {
  try {
    const id = parseInt(req.query.id);
    const user = db.users.find((user) => user.id === id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};


path = require("path");
exports.about = (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "assets", "about.html"));
    } catch (err) {
        console.error("Error sending about page:", err);
        res.status(500).send("Internal server error");
    }
    
};

exports.footer = (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "../assets", "footer.html"));
    } catch (err) {
        console.error("Error sending about page:", err);
        res.status(500).send("Internal server error");
    }
}
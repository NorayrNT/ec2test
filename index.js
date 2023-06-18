const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.json("EC2 trial nodejs app")
});

const port = 3001;

app.listen(port, console.log(`the app is listening to port ${port}`))
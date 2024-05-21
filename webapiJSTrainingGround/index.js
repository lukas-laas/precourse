const express = require("express");
const app = express()

app.get("/", (req, res) => {
    const dev = {
        id: 1,
        name: "Lukas Dev",
        email: "lukas@snabela.se",
    }
    res.json(dev)
})

const port = 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})
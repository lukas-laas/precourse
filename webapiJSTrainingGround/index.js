const express = require("express");
const app = express()

const db = [
    {
        id: 1,
        name: "Lukas Dev",
        email: "lukas@snabela.se",
    },
    {
        id: 2,
        name: "Lukas Dev2",
        email: "lukas@snabella.se",
    }
]

app.get("/api/developers", (req, res) => {
    res.json(db)
})

app.get('/api/developers/:id', (req, res) => {
    const dev = db.find(dev => dev.id == req.params.id);

    return dev ? res.json(dev) : res.status(404).end;
});

const port = 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})
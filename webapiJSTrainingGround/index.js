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

app.use(express.json())

app.get("/api/developers", (req, res) => {
    res.json(db)
})

app.get('/api/developers/:id', (req, res) => {
    const dev = db.find(dev => dev.id == req.params.id);

    return dev ? res.json(dev) : res.status(404).end;
});

app.post('/api/developers/', (req, res) => {
    const newDeveloper = { "id": db.length + 1, "name": req.body.name, "email": req.body.email }
    db.push(newDeveloper)
    res
        .status(201)
        .setHeader('location', `/api/developers/${newDeveloper.id}`)
        .json(newDeveloper)

})

app.delete('/api/developers/:id', (req, res) => {
    const id = req.params.id
    console.log(id)

    for (let i = 0; i < db.length; i++) {
        if (id == db[i].id) {
            db.splice(i, 1)
            console.log(db)
            res.status(200).end()
        }
    }
    res.status(404).end()

})

const port = 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})
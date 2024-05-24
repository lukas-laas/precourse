const api = require("./api.js")
const app = api.app

const port = 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})
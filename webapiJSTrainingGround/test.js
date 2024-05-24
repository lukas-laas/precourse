const assert = require("assert")
const request = require("supertest")
const api = require("./api.js")

describe("developer API should have endpoints to", () => {
    it("get all developers", function (done) {

        request(api.app)
            .get("/api/developers")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect((res) => {
                assert.strictEqual(res.body.length, 2);
            })
            .expect(200, done)
    })

    it("get developer by id", function (done) {
        request(api.app)
            .get("/api/developers/1")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect((res) => {
                assert.strictEqual(res.body.id, 1);
            })
            .expect(200, done)
    })

    it("post developer", function (done) {
        const dev = {
            name: "bongo",
            email: "trumma"
        }

        request(api.app)
            .post("/api/developers/")
            .set("Accept", "application/json")
            .send(dev)
            .expect("Content-Type", /json/)
            .expect('location', /\/api\/developers\//)
            .expect((res) => {
                assert.strictEqual(res.body.name, "bongo")
            })
            .expect(201, done)
    })

    it("update developer", function (done) {
        const dev = {
            name: "bongo",
            email: "trumma"
        }

        request(api.app)
            .patch("/api/developers/1")
            .set("Accept", "application/json")
            .send(dev)
            .expect("Content-Type", /json/)
            .expect('location', /\/api\/developers\/1/)
            .expect((res) => {
                assert.strictEqual(res.body.name, "bongo")
            })
            .expect(200, done)
    })

    it("delete developer", function (done) {
        request(api.app)
            .delete("/api/developers/1")
            .expect(200, done)
    })
})
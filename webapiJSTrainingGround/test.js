const assert = require("assert")
const request = require("supertest")

describe("developer API should have endpoints to", () => {
    it("get all developers", function (done) {
        const api = require("./api.js")

        request(api.app)
            .get("/api/developers")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect((res) => {
                assert.strictEqual(res.body.length, 2);
            })
            .expect(200, done)
    })
})
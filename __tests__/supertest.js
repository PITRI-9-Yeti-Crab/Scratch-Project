const request = require("supertest");
const server = require("../server/server");

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
describe("Route integration", () => {
  describe("/", () => {
    // testing main get request for html
    describe("GET", () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      xit("responds with 200 status and text/html content type", () =>
        request(server)
          .get("/")
          .expect("Content-Type", /text\/html/)
          .expect(200));
    });
  });

  // testing list routes
  describe("/list", () => {
    describe("GET", () => {
      it("responds with 200 status and application/json content type", () =>
        request(server)
          .get("/list")
          // /json/ works?
          .expect("Content-Type", /application\/json/)
          .expect(200));

      it('film list from "DB" json are in body of response', () =>
        // invoke request passing in server
        request(server)
          // chain get method, passing in /markets
          .get("/list")
          // assertion: expect response to be a type object
          .then(({ body }) => {
            expect(Array.isArray(body)).toBe(true);
          }));
    });

    describe("PUT", () => {
      xit("responds with 200 status and application/json content type", () => {
        // return invocation of request passing in server
        request(server)
          // chain put method, passing in /markets
          .put("/list")
          // expect status 200
          .expect(200)
          // expect content type of application/json
          .expect("Content-Type", /application\/json/);
      });
    });
  });
});

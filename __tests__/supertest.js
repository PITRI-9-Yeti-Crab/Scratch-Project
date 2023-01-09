const request = require("supertest");
const server = require("../server/server");
const { createUser, getUser } = require("./fakedb");
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
      xit("text/html content type", async () => {
        const response = await request(server).get("/");
        expect(response.header["content-type"]).toEqual(
          expect.stringContaining("text/html")
        );
      });

      xit("should respond with a 200 status code", async () => {
        const response = await request(server).get("/");
        expect(response.statusCode).toBe(200);
      });
    });
  });

  // testing list routes
  describe("/list", () => {
    describe("GET", () => {
      xit("responds with 200 status", async () => {
        const response = await request(server).get("/list");
        expect(response.statusCode).toBe(200);
      });

      xit("responds with application/json content type", async () => {
        const response = await request(server).get("/list");
        expect(response.header["content-type"]).toEqual(
          expect.stringContaining("json")
        );
      });

      xit('film list from "DB" json are in body of response', async () => {
        const response = await request(server).get("/list");
        expect(Array.isArray(response.body)).toBe(true);
      });
    });

    describe("PUT", () => {
      xit("responds with 200 status", async () => {
        // return invocation of request passing in server
        const response = await request(server).put("/list");
        expect(response.statusCode).toBe(200);
      });

      xit("responds with application/json content type", async () => {
        const response = await request(server).put("/list");
        expect(response.header["content-type"]).toEqual(
          expect.stringContaining("json")
        );
      });
    });
  });

  // testing /user routes
  describe("POST /user", () => {
    beforeEach(() => {
      createUser.mockReset();
    });

    describe("given a username and password", () => {
      // should save the username and password to the database
      it("should save the username and password to the database", async () => {
        const userCredentialData = [
          { email: "username1", password: "password1" },
          { email: "username2", password: "password2" },
          { email: "username3", password: "password3" },
        ];

        for (const body of userCredentialData) {
          createUser.mockReset();
          const response = await request(server)
            .post("/user/signup")
            .send(body);
          expect(createUser.mock.calls.length).toBe(1);
          expect(createUser.mock.calls[0][0]).toBe(body.email);
          expect(createUser.mock.calls[0][1]).toBe(body.password);
        }
      });
      // should respond with a json object containing the user id
      it("should respond with a 200 status code", async () => {
        const response = await request(server).post("/user/signup").send({
          email: "username",
          password: "password",
        });
        expect(response.statusCode).toBe(200);
      });

      it("responds with application/json content type", async () => {
        const response = await request(server).post("/user/signup").send({
          username: "username",
          password: "password",
        });
        expect(response.header["content-type"]).toEqual(
          expect.stringContaining("json")
        );
      });

      it("response has json object with userId", async () => {
        for (let i = 0; i < 10; i++) {
          createUser.mockReset();
          createUser.mockResolvedValue(i);
          const response = await request(server).post("/user/signup").send({
            username: "username",
            password: "password",
          });
          expect(response.body.userId).toBe(i);
        }
      });
    });

    describe("when the username and password are missing", () => {
      xit("should respond with a status code of 400", async () => {
        const userCredentialData = [
          { username: "username" },
          { password: "password" },
          {},
        ];

        for (const data of userCredentialData) {
          const response = await request(server).post("/user").send(data);
          expect(response.statusCode).toBe(400);
        }
      });
    });
  });
});

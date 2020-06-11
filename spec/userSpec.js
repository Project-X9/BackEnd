const superagent = require("superagent");
const mongoose = require("../src/db/mongoose");
const domainName = `http://localhost:${process.env.PORT}/api/v1`;

describe("User", () => {
  let server;
  beforeAll(() => {
    server = require("../src/index");
    mongoose.connection.collection("users").deleteMany({}, (err, res) => {});
  });
  afterAll(() => {
    mongoose.connection.collection("users").deleteMany({}, (err, res) => {});
    server.close();
  });

  // POST////////////////////////
  describe("POST /users/SignUp", () => {
    let response;
    beforeAll((done) => {
      superagent
        .post(`${domainName}/users/SignUp`)
        .send({
          name: "ben",
          email: "ben@gmail.com",
          password: "strings",
          age: 20,
        })
        .then((res) => {
          response = { ...res };
          done();
        })
        .catch((err) => {
          // console.log(err.message)
        });
    });
    it("Status 201", function () {
      expect(response.status).toBe(201);
    });
    it("Body", function () {
      expect(response.body.data.user.name).toBe("ben");
      expect(response.body.data.user.email).toBe("ben@gmail.com");
    });
  });

  describe("POST /user/SignUp Invalid", () => {
    let data = {};
    beforeAll((done) => {
      superagent
        .post(`${domainName}/users/SignUp`)
        .send({
          name: "gale",
          email: "gale@gmail.com",
          age: 20,
        })
        .then((res) => {
          response = { ...res };
          done();
        })
        .catch((err) => {
          response = err;
          done();
        });
      it("Status 400", function () {
        expect(response.status).toBe(400);
      });
    });
  });
  //GET////////////////////////////////////
  // GET ALL USERS
  describe("GET /users", () => {
    let response;
    beforeAll((done) => {
      superagent.get(`${domainName}/users`).then((res) => {
        response = { ...res };
        done();
      });
    });

    it("Status 200", () => {
      expect(response.status).toBe(200);
    });
    it("Count", () => {
      expect(response.body.totalCount).toBe(1);
    });
    it("Page Number", () => {
      expect(response.body.page).toBe(1);
      expect(response.body.count).toBe(1);
    });
  });
  //GET USER: VALID ID
  describe("GET /users/:id", () => {
    let response;
    let idString = "before";
    let id;
    let jwt_token;
    beforeAll((done) => {
      superagent
        .post(`${domainName}/users/SignUp`)
        .send({
          name: "sheldon",
          email: "bazinga@gmail.com",
          password: "physics",
          age: 20,
        })
        .then((res) => {
          response = { ...res };
          jwt_token = response.body.data.token;
          id = response.body.data.user._id;
          idString = mongoose.Types.ObjectId(id).toHexString();
          superagent
            .get(domainName + "/users/" + idString)
            .set({ Authorization: `Bearer ${jwt_token}` })
            .then((res) => {
              response = { ...res };
              done();
            })
            .catch((err) => {
              console.log(err.message);
            });
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
    it("Status 200", () => {
      expect(response.status).toBe(200);
    });
    it("Body", () => {
      expect(response.body.data.user.name).toBe("sheldon");
      expect(response.body.data.user.email).toBe("bazinga@gmail.com");
    });
  });
  describe("PATCH /users/:id", () => {
    let response;
    let id;
    let jwt_token;
    beforeAll((done) => {
      superagent
        .post(`${domainName}/users/SignUp`)
        .send({
          name: "Abdallah",
          email: "hazooma@gmail.com",
          password: "taratatara",
          age: 21,
        })
        .then((res) => {
          jwt_token = res.body.data.token;
          id = res.body.data.user._id;
          superagent
            .patch(`${domainName}/users/${mongoose.Types.ObjectId(id)}`)
            .set({ Authorization: `Bearer ${jwt_token}` })
            .send({ name: "Peter Parker", email: "swing@gmail.com" })
            .end((err, res) => {
              response = { ...res };
              done();
            });
        });
    });
    it("Status 200", () => {
      expect(response.status).toBe(200);
    });
    it("Body", () => {
      expect(response.body.data.user.name).toBe("Peter Parker");
      expect(response.body.data.user.email).toBe("swing@gmail.com");
    });
  });
  ////////////////////////////////////////////////////////
  const falseId = "5b728846b14e4035fcc679b4";
  describe("PATCH /users/:id Invalid ID", () => {
    let response;
    let id;
    let jwt_token;
    beforeAll((done) => {
      superagent
        .post(`${domainName}/users/SignUp`)
        .send({
          name: "Bruce Wayne",
          email: "gotham@gmail.com",
          password: "boomerang",
          age: 21,
        })
        .then((res) => {
          jwt_token = res.body.data.token;
          id = res.body.data.user._id;
          superagent
            .patch(`${domainName}/users/${falseId}`)
            .set({ Authorization: `Bearer ${jwt_token}` })
            .send({ name: "Peter Parker", email: "swing@gmail.com" })
            .catch((err) => {
              response = err;
              done();
            });
        });
    });
    it("Status 404", () => {
      expect(response.status).toBe(404);
    });
    it("Body", () => {});
  });

  describe("Sending and Retrieving Notifications", () => {
    let response = "test";
    let trackId;
    let jwt_token1;
    let jwt_token2;
    beforeAll((done) => {
      superagent
        .post(`${domainName}/users/SignUp`)
        .send({
          name: "Bruce Wayne",
          email: "gotham2@gmail.com",
          password: "boomerang",
          age: 21,
        })
        .then((res) => {
          jwt_token1 = res.body.data.token;
          superagent
            .post(`${domainName}/users/SignUp`)
            .send({
              name: "Abdallah",
              email: "abdallah14@gmail.com",
              password: "boomerang",
              age: 21,
            })
            .then((res) => {
              jwt_token2 = res.body.data.token;
              superagent
                .patch(`${domainName}/track/uploadTrack`)
                .send({
                  name: "Supermoon",
                })
                .then((res) => {
                  trackId = res.body.data.track._id;
                  superagent
                    .post(`${domainName}/share/share-track`)
                    .set({ Authorization: `Bearer ${jwt_token1}` })
                    .send({
                      recipientEmail: "abdallah14@gmail.com",
                      trackId,
                    })
                    .then((res) => {
                      superagent
                        .get(`${domainName}/users/me/notifications`)
                        .set({ Authorization: `Bearer ${jwt_token2}` })
                        .then((res) => {
                          response = res;
                          done();
                        });
                    })
                });
            });
        });
    });
    it("Count", () => {
      expect(response.body.totalCount).toBe(1);
    });
  });
});

// const superagent = require("superagent");
// const mongoose = require("./../src/db/mongoose");
// const domainName = `http://localhost:${process.env.PORT}/api/v1`;

// require("./../src/index");
// const falseIdString = "5b728846b14e4035fcc679b4";
// const falseID = mongoose.Types.ObjectId("5b728846b14e4035fcc679b4");
// // POST
// describe("User", () => {
//   afterAll(() => {
//     mongoose.connection.collection("users").deleteMany({}, (err, res) => {});
//   });
//   // describe("POST /users", () => {
//   //   let response;

//   //   beforeAll(done => {
//   //     superagent
//   //       .post(`${domainName}/users`)
//   //       .send({ name: "ben", email: "ben@gmail.com", password: "faith" })
//   //       .end((err, res) => {
//   //         response = { ...res };
//   //         id = response.body.data.user._id;
//   //         done();
//   //       });
//   //   });

//   //   it("Status 201", () => {
//   //     expect(response.status).toBe(201);
//   //   });
//   //   it("Body", () => {
//   //     expect(response.body.data.user.name).toBe("ben");
//   //     expect(response.body.data.user.email).toBe("ben@gmail.com");
//   //   });
//   // });

//   // // GET ALL USERS
//   // describe("GET /users", () => {
//   //   let response;
//   //   beforeAll(done => {
//   //     superagent.get(`${domainName}/users`).end((err, res) => {
//   //       response = { ...res };
//   //       done();
//   //     });
//   //   });

//   //   it("Status 200", () => {
//   //     expect(response.status).toBe(200);
//   //   });
//   // });
//   describe("GET /users/:id", () => {
//     // GET USER : VALID ID
//     // describe("Valid ID", () => {
//     //   let response;
//     //   let idString = "before";
//     //   let id;
//     //   beforeAll(() => {
//     //     return superagent
//     //       .post(`${domainName}/users`)
//     //       .send({
//     //         name: "sheldon",
//     //         email: "bazinga@gmail.com",
//     //         password: "physics"
//     //       })
//     //       .then(res => {
//     //         response = { ...res };
//     //         id = response.body.data.user._id;
//     //         idString = mongoose.Types.ObjectId(id).toHexString();
//     //         console.log("POSTED");
//     //       })
//     //       .then(() => {
//     //         return superagent.get(domainName + "/users/" + idString);
//     //       })
//     //       .then(res => {
//     //         response = { ...res };
//     //       })
//     //       .catch(err => {
//     //         console.log(err.message);
//     //       });
//     //   });
//     //   it("Status 200", () => {
//     //     expect(response.status).toBe(200);
//     //   });
//     //   it("Body", () => {
//     //     expect(response.body.data.user.name).toBe("sheldon");
//     //     expect(response.body.data.user.email).toBe("bazinga@gmail.com");
//     //   });
//     // });
//     // });
//     describe("Invalid ID", () => {
//       // GET USER : INVALID ID

//       let response;
//       let idString;
//       beforeEach((done) => {
//         return superagent
//           .post(`${domainName}/users`)
//           .send({
//             name: "hazem",
//             email: "lonefriend@gmail.com",
//             password: "strings"
//           })
//           .then(res => {
//             id = res.body.data.user._id;
//             idString = mongoose.Types.ObjectId(id).toHexString();
//             console.log("POSTED");
//           })
//           .then(() => {
//             return superagent.get(domainName + "/users/" + falseIdString);
//           })
//           .then(res => {
//             console.log("RECEIVED RESPONSE");
//             response = { ...res };
//           })
//           .catch(err => {
//             console.log("RECEIVED ERROR");
//             console.log(err.message);
//           });
//       });
//       it("Status 404", () => {
//         expect(response.status).toBe(404);
//       });
//     });
//   });

//   // // UPDATE USER
//   // describe("PATCH /users/:id", () => {
//   //   // UPDATE USER : VALID ID
//   //   describe("Valid ID", () => {
//   //     let response;
//   //     let id;
//   //     beforeAll(done => {
//   //       superagent
//   //       .post(`${domainName}/users`)
//   //       .send({
//   //         name: "Abdallah",
//   //         email: "hazooma@gmail.com",
//   //         password: "taratatara"
//   //       })
//   //       .end((err, res) => {
//   //         id = res.body.data.user._id;
//   //         done()
//   //       });
//   //       superagent
//   //         .patch(`${domainName}/users/${mongoose.Types.ObjectId(id)}`)
//   //         .send({ name: "Peter Parker", email: "swing@gmail.com" })
//   //         .end((err, res) => {
//   //           response = { ...res };
//   //           done();
//   //         });
//   //     });

//   //     it("Status 200", () => {
//   //       expect(response.status).toBe(200);
//   //     });
//   //     it("Body", () => {
//   //       expect(response.body.data.user.name).toBe("Peter Parker");
//   //       expect(response.body.data.user.email).toBe("swing@gmail.com");
//   //     });
//   //   });
//   //     // UPDATE USER : INVALID ID
//   //     describe("Invalid ID", () => {
//   //       let response;
//   //       let id;
//   //       beforeAll(done => {
//   //         superagent
//   //           .post(`${domainName}/users`)
//   //           .send({
//   //             name: "Bruce Wayne",
//   //             email: "gotham@gmail.com",
//   //             password: "boomerang"
//   //           })
//   //           .end((err, res) => {
//   //             id = res.body.data.user._id;
//   //           });
//   //         superagent
//   //           .patch(`${domainName}/users/${false_id}`)
//   //           .send({ name: "Peter Parker", email: "swing@gmail.com" })
//   //           .end((err, res) => {
//   //             response = { ...res };
//   //             done();
//   //           });
//   //       });

//   //       it("Status 404", () => {
//   //         expect(response.status).toBe(404);
//   //       });
//   //       it("Body", () => {});
//   //     });
//   // });
// });

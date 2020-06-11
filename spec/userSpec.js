const superagent = require("superagent");
const mongoose = require("../src/db/mongoose");
const domainName = `http://localhost:${process.env.PORT}/api/v1`;
var request =require('request');


var userid = "5e8643edd411aa54c0357fbd";
var userid_in="5e8643edd411aa54c0357fb3";
var recoverplaylist ="5ee013df10a0886ab0b905d7";
var auttoken="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg2NDNlZGQ0MTFhYTU0YzAzNTdmYmQiLCJpYXQiOjE1OTE4Njk2NTV9.4m6tdxK30T8z-oyUMdFKShQ6oAhPL84PztuKc43b5M0";
var confirmationtoken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhcmlkYUBtb3JhZC5jb20iLCJpYXQiOjE1OTE4ODIxNTAsImV4cCI6MTU5MTk2ODU1MH0.zELbSX6sCeGExWjH-BeiszbpYptVyzSh-SgS-hPxDG0";
var confid="5ee1fae463eb422d00bc1796";
// describe("post /users/SignUp", () => 
// {
//   describe("valid data", () => 
//   {
//       let response;
//       beforeAll((done) => {
//       return superagent
//           .post(`${domainName}/users/SignUp`)
//           .type('application/json')
//           .send({name: "farida morad",age: 34,email:"farida@morad.com",password:"123456789"})
//           .then((res) => {
//               response = { ...res };
//               done();
//           })
//           .catch(err => {
//               console.log(err.message);
//           });
//       });
//       it("Status 201", (done) => {
//         expect(response.status).toBe(201);
      
//         done();
//       });
//   });

//  });
// describe("post /users/confirmation/:token", () => 
// {
//   describe("valid id", () => 
//   {
//       let response;
//       beforeAll((done) => {
//       return superagent
//           .patch(`${domainName}/users/confirmation/${confirmationtoken}`)
//           .type('application/json')
//           .send({id:confid})
//           .then((res) => {
//               response = { ...res };
//               done();
//           })
//           .catch(err => {
//               console.log(err.message);
//           });
//       });
//       it("Status 200", (done) => {
//         expect(response.status).toBe(200);
      
//         done();
//       });
//   });
//  });


// describe("GET /users/recoverPlaylist/:id", () => 
// {
//   describe("valid id", () => 
//   {
//       let response;
//       beforeAll((done) => {
//       return superagent
//           .patch(`${domainName}/users/recoverPlaylist/${recoverplaylist}`)
//           .type('application/json')
//           .set("Authorization",auttoken)
//           .send({id: userid})
//           .then((res) => {
//               response = { ...res };
//               done();
//           })
//           .catch((err) => {
//             response = err;
//             done();
//           });
//       });
//       it("Status 200", (done) => {
//         expect(response.status).toBe(200);
      
//         done();
//       });
//   });
//   describe("invalid user id", () => 
//   {
//       let response;
//       beforeAll((done) => {
//       return superagent
//           .patch(`${domainName}/users/recoverPlaylist/${recoverplaylist}`)
//           .type('application/json')
//           .send({id: userid_in})
//           .set("Authorization",auttoken)
//           .then((res) => {
//               response = { ...res };
//               done();
//           })
//           .catch((err) => {
//             response = err;
//             done();
//           });
//       });
//       it("Status 404", (done) => {
//         expect(response.status).toBe(404);
      
//         done();
//       });
//   });
//  });
// describe("GET /users/deletedplaylist", () => 
// {
//   describe("valid id", () => 
//   {
//       let response;
//       var options;
//       beforeAll((done) => {
//       return superagent
//           .get(`${domainName}/users/deletedplaylist`)
//           .type('application/json')
//           .send({id: userid})
//           .set("Authorization",auttoken)
//           .then((res) => {
//               response = { ...res };
//               done();
//           })
//           .catch((err) => {
//                       response = err;
//                       done();
//                     });
//       });
//       it("Status 200", (done) => {
//         expect(response.status).toBe(200);
      
//         done();
//       });
//   });

//   describe("invalid id", () => 
//   {
//       let response;
//       beforeAll((done) => {
//       return superagent
//           .get(`${domainName}/users/deletedplaylist`)
//           .type('application/json')
//           .send({id: userid_in})
//           .set("Authorization",auttoken)
//           .then((res) => {
//               response = { ...res };
//               done();
//           })
//           .catch((err) => {
//             response = err;
//             done();
//           });
//       });
//       it("Status 404", (done) => {
//         expect(response.status).toBe(404);
      
//         done();
//       });
//   });

//  });
//  describe("GET /users/Queue/:id", () => 
//  {
//   //  describe("valid id", () => 
//   //  {
//   //      let response;
//   //      beforeAll((done) => {
//   //      return superagent
//   //          .get(`${domainName}/users/Queue/${userid}`)
//   //          .set("Authorization",auttoken)
//   //          .then((res) => {
//   //              response = { ...res };
//   //              done();
//   //          })
//   //          .catch((err) => {
//   //           response = err;
//   //           done();
//   //         });
//   //      });
//   //      it("Status 200", (done) => {
//   //        expect(response.status).toBe(200);
       
//   //        done();
//   //      });
//   //  });
//    describe("in valid id", () => 
//    {
//        let response;
//        beforeAll((done) => {
//        return superagent
//            .get(`${domainName}/users/Queue/${userid_in}`)
//            .set("Authorization",auttoken)
//            .then((res) => {
//                response = { ...res };
//                done();
//            })
//            .catch((err) => {
//             response = err;
//             done();
//           });
//        });
//        it("Status 404", (done) => {
//          expect(response.status).toBe(404);
       
//          done();
//        });
//    });
//   });


//   describe("GET /users/Track/Ex/:id", () => 
//   {
//     describe("valid id", () => 
//     {
//         let response;
//         beforeAll((done) => {
//         return superagent
//             .get(`${domainName}/users/Track/Ex/5e8cf0417d231c3bec30c4df`)
//             .type('application/json')
//             .send({id: userid})
//             .set("Authorization",auttoken)
//             .then((res) => {
//                 response = { ...res };
//                 done();
//             })
//             .catch((err) => {
//               response = err;
//               done();
//           });
//         });
//         it("Status 200", (done) => {
//           expect(response.status).toBe(200);
        
//           done();
//         });
//     });
//     describe("valid id", () => 
//     {
//         let response;
//         beforeAll((done) => {
//         return superagent
//             .get(`${domainName}/users/Track/Ex/5e8cf0417d231c3bec30c4d3`)
//             .type('application/json')
//             .send({id: userid})
//             .set("Authorization",auttoken)
//             .then((res) => {
//                 response = { ...res };
//                 done();
//             })
//             .catch((err) => {
//               response = err;
//               done();
//             });
//           });
//         it("Status 404", (done) => {
//           expect(response.status).toBe(404);
        
//           done();
//         });
//     });
//   });
























// describe("User", () => {
//   let server;
//   beforeAll(() => {
//     server = require("../src/index");
//     mongoose.connection.collection("users").deleteMany({}, (err, res) => {});
//   });
//   afterAll(() => {
//     server.close();
//   });

//   //POST////////////////////////
//   describe("POST /users", () => {
//     let data = {};
//     beforeAll((done) => {
//       superagent
//         .post(`${domainName}/users`)
//         .send({
//           name: "ben",
//           email: "ben@gmail.com",
//           password: "strings",
//           age: 20,
//         })
//         .then((res) => {
//           // console.log(res);
//           response = { ...res };
//           done();
//         })
//         .catch((err) => {});
//     });
//     it("Status 201", () => {
//       expect(response.status).toBe(201);
//     });
//     it("Body", () => {
//       expect(response.body.data.user.name).toBe("ben");
//       expect(response.body.data.user.email).toBe("ben@gmail.com");
//     });
//   });












// describe("User", () => {
//   let server;
//   beforeAll(() => {
//     server = require("../src/index");
//     mongoose.connection.collection("users").deleteMany({}, (err, res) => {});
//   });
//   afterAll(() => {
//     mongoose.connection.collection("users").deleteMany({}, (err, res) => {});
//     server.close();
//   });

//   // POST////////////////////////
//   describe("POST /users/SignUp", () => {
//     let response;
//     beforeAll((done) => {
//       superagent
//         .post(`${domainName}/users/SignUp`)
//         .send({
//           name: "ben",
//           email: "ben@gmail.com",
//           password: "strings",
//           age: 20,
//         })
//         .then((res) => {
//           response = { ...res };
//           done();
//         })
//         .catch((err) => {
//           // console.log(err.message)
//         });
//     });
//     it("Status 201", function () {
//       expect(response.status).toBe(201);
//     });
//     it("Body", function () {
//       expect(response.body.data.user.name).toBe("ben");
//       expect(response.body.data.user.email).toBe("ben@gmail.com");
//     });
//   });

//   describe("POST /user/SignUp Invalid", () => {
//     let data = {};
//     beforeAll((done) => {
//       superagent
//         .post(`${domainName}/users/SignUp`)
//         .send({
//           name: "gale",
//           email: "gale@gmail.com",
//           age: 20,
//         })
//         .then((res) => {
//           response = { ...res };
//           done();
//         })
//         .catch((err) => {
//           response = err;
//           done();
//         });
//       it("Status 400", function () {
//         expect(response.status).toBe(400);
//       });
//     });
//   });
//   //GET////////////////////////////////////
//   // GET ALL USERS
//   describe("GET /users", () => {
//     let response;
//     beforeAll((done) => {
//       superagent.get(`${domainName}/users`).then((res) => {
//         response = { ...res };
//         done();
//       });
//     });

//     it("Status 200", () => {
//       expect(response.status).toBe(200);
//     });
//     it("Count", () => {
//       expect(response.body.totalCount).toBe(1);
//     });
//     it("Page Number", () => {
//       expect(response.body.page).toBe(1);
//       expect(response.body.count).toBe(1);
//     });
//   });
//   //GET USER: VALID ID
//   describe("GET /users/:id", () => {
//     let response;
//     let idString = "before";
//     let id;
//     let jwt_token;
//     beforeAll((done) => {
//       superagent
//         .post(`${domainName}/users/SignUp`)
//         .send({
//           name: "sheldon",
//           email: "bazinga@gmail.com",
//           password: "physics",
//           age: 20,
//         })
//         .then((res) => {
//           response = { ...res };
//           jwt_token = response.body.data.token;
//           id = response.body.data.user._id;
//           idString = mongoose.Types.ObjectId(id).toHexString();
//           superagent
//             .get(domainName + "/users/" + idString)
//             .set({ Authorization: `Bearer ${jwt_token}` })
//             .then((res) => {
//               response = { ...res };
//               done();
//             })
//             .catch((err) => {
//               console.log(err.message);
//             });
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//     });
//     it("Status 200", () => {
//       expect(response.status).toBe(200);
//     });
//     it("Body", () => {
//       expect(response.body.data.user.name).toBe("sheldon");
//       expect(response.body.data.user.email).toBe("bazinga@gmail.com");
//     });
//   });
//   describe("PATCH /users/:id", () => {
//     let response;
//     let id;
//     let jwt_token;
//     beforeAll((done) => {
//       superagent
//         .post(`${domainName}/users/SignUp`)
//         .send({
//           name: "Abdallah",
//           email: "hazooma@gmail.com",
//           password: "taratatara",
//           age: 21,
//         })
//         .then((res) => {
//           jwt_token = res.body.data.token;
//           id = res.body.data.user._id;
//           superagent
//             .patch(`${domainName}/users/${mongoose.Types.ObjectId(id)}`)
//             .set({ Authorization: `Bearer ${jwt_token}` })
//             .send({ name: "Peter Parker", email: "swing@gmail.com" })
//             .end((err, res) => {
//               response = { ...res };
//               done();
//             });
//         });
//     });
//     it("Status 200", () => {
//       expect(response.status).toBe(200);
//     });
//     it("Body", () => {
//       expect(response.body.data.user.name).toBe("Peter Parker");
//       expect(response.body.data.user.email).toBe("swing@gmail.com");
//     });
//   });
//   ////////////////////////////////////////////////////////
//   const falseId = "5b728846b14e4035fcc679b4";
//   describe("PATCH /users/:id Invalid ID", () => {
//     let response;
//     let id;
//     let jwt_token;
//     beforeAll((done) => {
//       superagent
//         .post(`${domainName}/users/SignUp`)
//         .send({
//           name: "Bruce Wayne",
//           email: "gotham@gmail.com",
//           password: "boomerang",
//           age: 21,
//         })
//         .then((res) => {
//           jwt_token = res.body.data.token;
//           id = res.body.data.user._id;
//           superagent
//             .patch(`${domainName}/users/${falseId}`)
//             .set({ Authorization: `Bearer ${jwt_token}` })
//             .send({ name: "Peter Parker", email: "swing@gmail.com" })
//             .catch((err) => {
//               response = err;
//               done();
//             });
//         });
//     });
//     it("Status 404", () => {
//       expect(response.status).toBe(404);
//     });
//     it("Body", () => {});
//   });







//       it("Status 200", () => {
//         expect(response.status).toBe(200);
//       });
//       it("Body", () => {
//         expect(response.body.data.user.name).toBe("Peter Parker");
//         expect(response.body.data.user.email).toBe("swing@gmail.com");
//       });
//     });
//   });
// });
// //////////////////////////////////////////////////////

// const superagent = require("superagent");
// const mongoose = require("./../src/db/mongoose");
// const domainName = `http://localhost:${process.env.PORT}/api/v1`;

// require("./../src/index");
// const falseIdString = "5b728846b14e4035fcc679b4";
// const falseID = mongoose.Types.ObjectId("5b728846b14e4035fcc679b4");
// // POST
// describe("POST /users", () => {
//   afterAll(() => {
//     mongoose.connection.collection("users").deleteMany({}, (err, res) => {});
//   });
//   describe("POST /users", () => {
//     let response;

//     beforeAll(async () => {
//        await superagent
//         .post(`${domainName}/users`)
//         .send({
//           name: "ben",
//           email: "ben@gmail.com",
//           password: "faith",
//           age: 20,
//         })
//         .then((res) => {
//           response = { ...res };
//           id = response.body.data.user._id;
//           console.log("entered then");
//         })

//     });

//     it("Status 201", () => {
//       expect(response.status).toBe(201);
//     });
//     console.log("entered it");

//     it("Body", () => {
//       expect(response.body.data.user.name).toBe("ben");
//       expect(response.body.data.user.email).toBe("ben@gmail.com");
//     });
//   });
// });
// GET ALL USERS
// describe("GET /users", () => {
//   describe("GET /users", () => {
//     let response;
//     beforeAll((done) => {
//       superagent.get(`${domainName}/users`).end((err, res) => {
//         response = { ...res };
//         done();
//       });
//     });

//     it("Status 200", () => {
//       expect(response.status).toBe(200);
//     });
//   });

//   describe("GET /users/:id", () => {
//     // GET USER : VALID ID
//     describe("Valid ID", () => {
//       let response;
//       let idString = "before";
//       let id;
//       beforeAll(() => {
//         return superagent
//           .post(`${domainName}/users`)
//           .send({
//             name: "sheldon",
//             email: "bazinga@gmail.com",
//             password: "physics",
//           })
//           .then((res) => {
//             response = { ...res };
//             id = response.body.data.user._id;
//             idString = mongoose.Types.ObjectId(id).toHexString();
//             console.log("POSTED");
//           })
//           .then(() => {
//             return superagent.get(domainName + "/users/" + idString);
//           })
//           .then((res) => {
//             response = { ...res };
//           })
//           .catch((err) => {
//             console.log(err.message);
//           });
//       });
//       it("Status 200", () => {
//         expect(response.status).toBe(200);
//       });
//       it("Body", () => {
//         expect(response.body.data.user.name).toBe("sheldon");
//         expect(response.body.data.user.email).toBe("bazinga@gmail.com");
//       });
//     });
//   });

//   xdescribe("Invalid ID", () => {
//     // GET USER : INVALID ID

//     let response;
//     let idString;
//     beforeEach((done) => {
//       return superagent
//         .post(`${domainName}/users`)
//         .send({
//           name: "hazem",
//           email: "lonefriend@gmail.com",
//           password: "strings",
//         })
//         .then((res) => {
//           id = res.body.data.user._id;
//           idString = mongoose.Types.ObjectId(id).toHexString();
//           console.log("POSTED");
//         })
//         .then(() => {
//           return superagent.get(domainName + "/users/" + falseIdString);
//         })
//         .then((res) => {
//           console.log("RECEIVED RESPONSE");
//           response = { ...res };
//         })
//         .catch((err) => {
//           console.log("RECEIVED ERROR");
//           console.log(err.message);
//         });
//     });
//     it("Status 404", () => {
//       expect(response.status).toBe(404);
//     });
//   });
// });
// // UPDATE USER
// xdescribe("PATCH /users/:id", () => {
//   // UPDATE USER : VALID ID
//   describe("Valid ID", () => {
//     let response;
//     let id;
//     beforeAll((done) => {
//       superagent
//         .post(`${domainName}/users`)
//         .send({
//           name: "Abdallah",
//           email: "hazooma@gmail.com",
//           password: "taratatara",
//         })
//         .end((err, res) => {
//           id = res.body.data.user._id;
//           done();
//         });
//       superagent
//         .patch(`${domainName}/users/${mongoose.Types.ObjectId(id)}`)
//         .send({ name: "Peter Parker", email: "swing@gmail.com" })
//         .end((err, res) => {
//           response = { ...res };
//           done();
//         });
//     });

//     it("Status 200", () => {
//       expect(response.status).toBe(200);
//     });
//     it("Body", () => {
//       expect(response.body.data.user.name).toBe("Peter Parker");
//       expect(response.body.data.user.email).toBe("swing@gmail.com");
//     });
//   });
//   // UPDATE USER : INVALID ID
//   describe("Invalid ID", () => {
//     let response;
//     let id;
//     beforeAll((done) => {
//       superagent
//         .post(`${domainName}/users`)
//         .send({
//           name: "Bruce Wayne",
//           email: "gotham@gmail.com",
//           password: "boomerang",
//         })
//         .end((err, res) => {
//           id = res.body.data.user._id;
//         });
//       superagent
//         .patch(`${domainName}/users/${false_id}`)
//         .send({ name: "Peter Parker", email: "swing@gmail.com" })
//         .end((err, res) => {
//           response = { ...res };
//           done();
//         });
//     });

//     it("Status 404", () => {
//       expect(response.status).toBe(404);
//     });
//     it("Body", () => {});
//   });
// });

//   describe("Sending and Retrieving Notifications", () => {
//     let response = "test";
//     let trackId;
//     let jwt_token1;
//     let jwt_token2;
//     beforeAll((done) => {
//       superagent
//         .post(`${domainName}/users/SignUp`)
//         .send({
//           name: "Bruce Wayne",
//           email: "gotham2@gmail.com",
//           password: "boomerang",
//           age: 21,
//         })
//         .then((res) => {
//           jwt_token1 = res.body.data.token;
//           superagent
//             .post(`${domainName}/users/SignUp`)
//             .send({
//               name: "Abdallah",
//               email: "abdallah14@gmail.com",
//               password: "boomerang",
//               age: 21,
//             })
//             .then((res) => {
//               jwt_token2 = res.body.data.token;
//               superagent
//                 .patch(`${domainName}/track/uploadTrack`)
//                 .send({
//                   name: "Supermoon",
//                 })
//                 .then((res) => {
//                   trackId = res.body.data.track._id;
//                   superagent
//                     .post(`${domainName}/share/share-track`)
//                     .set({ Authorization: `Bearer ${jwt_token1}` })
//                     .send({
//                       recipientEmail: "abdallah14@gmail.com",
//                       trackId,
//                     })
//                     .then((res) => {
//                       superagent
//                         .get(`${domainName}/users/me/notifications`)
//                         .set({ Authorization: `Bearer ${jwt_token2}` })
//                         .then((res) => {
//                           response = res;
//                           done();
//                         });
//                     })
//                 });
//             });
//         });
//     });
//     it("Count", () => {
//       expect(response.body.totalCount).toBe(1);
//     });
//   });
// });

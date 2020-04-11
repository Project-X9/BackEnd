const superagent = require("superagent");
const domainName = `http://localhost:${process.env.PORT}/api/v1`;

var valid_id='5e89fc634cd1d420fc3096c0';
var invalid_id ='5e89fc634cd1d420fc3096ce';
var user = '5e89fc7eb586021c3869f63e';
var playlist='5e8cf0bc7d231c3bec30c4e1';
var album='5e8cf1347d231c3bec30c4e3';
var artist='5e877b8fae42032b7c867feb';
var track='5e8cf03d7d231c3bec30c4de';
  //--------------------------------------------------------------- GET ALL USERS ---------------------------------------------------------------//

  // describe("GET /follow/getfollowers", () => 
  // {
  //   // describe("using a valid id", () => 
  //   // {
  //   //     let response;
  //   //     beforeAll(() => {
  //   //     return superagent
  //   //         .get(`${domainName}/follow/getfollowers`)
  //   //         .type('application/json')
  //   //         .send({id: valid_id})
  //   //         .then(res => {
  //   //             console.log("RECEIVED RESPONSE");
  //   //             response = { ...res };
  //   //         })
  //   //         .catch(err => {
  //   //             console.log("RECEIVED ERROR");
  //   //             console.log(err.message);
  //   //         });
  //   //     });
  //   //     it("Status 200", (done) => {
  //   //         expect(response.body.status).toEqual('success');
  //   //         expect(response.body.followers).toEqual(["5e8643edd411aa54c0357fbd","5e89fc7eb586021c3869f63e"]);
  //   //        done();
  //   //     });
  //   // });

  //   describe("using a invalid id", () => 
  //   {
  //       let response;
  //       beforeAll(() => {
  //       return superagent
  //           .get(`${domainName}/follow/getfollowers`)
  //           .type('application/json')
  //           .send({id: invalid_id})
  //           .then(res => {
  //               console.log("RECEIVED RESPONSE");
  //               response = { ...res };
  //               console.log(response)
  //           })
  //           .catch(err => {
  //               console.log("RECEIVED ERROR");
  //               console.log(err.message);
  //           });
  //       });
  //       it("Status 404", (done) => {
  //           expect(response.body.status).toEqual('fail');
  //           done();
  //       });
  //   });
  //  });


//-----------------------------------------------Follow user------------------------------------------------------//
// describe("patch /follow/user", () => 
// {
//   describe("using a valid id", () => 
//   {
//       let response;
//       beforeAll(() => {
//       return superagent
//           .patch(`${domainName}/follow/user/${user}`)
//           .type('application/json')
//           .send({id: valid_id})
//           .then(res => {
//               console.log("RECEIVED RESPONSE");
//               response = { ...res };
//           })
//           .catch(err => {
//               console.log("RECEIVED ERROR");
//               console.log(err.message);
//           });
//       });
      
//       it("Status 200", (done) => {
//           expect(response.status).toBe(200);
//          done();
//       });
//   });
//    });

//-----------------------------------------------unFollow user------------------------------------------------------//
// describe("patch /follow/user/un", () => 
// {
//   describe("using a valid id", () => 
//   {
//       let response;
//       beforeAll(() => {
//       return superagent
//           .patch(`${domainName}/follow/user/un/${user}`)
//           .type('application/json')
//           .send({id: valid_id})
//           .then(res => {
//               console.log("RECEIVED RESPONSE");
//               response = { ...res };
//           })
//           .catch(err => {
//               console.log("RECEIVED ERROR");
//               console.log(err.message);
//           });
//       });
      
//       it("Status 200", (done) => {
//           expect(response.status).toBe(200);
//          done();
//       });
//   });
//    });



   //-----------------------------------------------Follow playlist------------------------------------------------------//
// describe("patch /follow/playlist", () => 
// {
//   describe("using a valid id", () => 
//   {
//       let response;
//       beforeAll(() => {
//       return superagent
//           .patch(`${domainName}/follow/playlist/${playlist}`)
//           .type('application/json')
//           .send({id: valid_id})
//           .then(res => {
//               console.log("RECEIVED RESPONSE");
//               response = { ...res };
//           })
//           .catch(err => {
//               console.log("RECEIVED ERROR");
//               console.log(err.message);
//           });
//       });
      
//       it("Status 200", (done) => {
//         expect(response.status).toBe(200);
//         done();
//       });
//   });
//    });

//-----------------------------------------------unFollow playlist------------------------------------------------------//
// describe("patch /follow/playlist/un", () => 
// {
//   describe("using a valid id", () => 
//   {
//       let response;
//       beforeAll(() => {
//       return superagent
//           .patch(`${domainName}/follow/playlist/un/${playlist}`)
//           .type('application/json')
//           .send({id: valid_id})
//           .then(res => {
//               console.log("RECEIVED RESPONSE");
//               response = { ...res };
//           })
//           .catch(err => {
//               console.log("RECEIVED ERROR");
//               console.log(err.message);
//           });
//       });
      
//       it("Status 200", (done) => {
//         expect(response.status).toBe(200);
//         done();
//       });
//   });
//   });



//-----------------------------------------------Follow album------------------------------------------------------//
//    describe("GET /follow/album", () => 
//    {
//      describe("using a valid id", () => 
//      {
//          let response;
//          beforeAll(() => {
//          return superagent
//              .patch(`${domainName}/follow/album/${album}`)
//              .type('application/json')
//              .send({id: valid_id})
//              .then(res => {
//                  console.log("RECEIVED RESPONSE");
//                  response = { ...res };
//              })
//              .catch(err => {
//                  console.log("RECEIVED ERROR");
//                  console.log(err.message);
//              });
//          });
         
//          it("Status 200", (done) => {
//              expect(response.status).toBe(200);
//             done();
//          });
//      });
//  });




   //-----------------------------------------------unFollow album------------------------------------------------------//
//    describe("patch /follow/album/un", () => 
//    {
//      describe("using a valid id", () => 
//      {
//          let response;
//          beforeAll(() => {
//          return superagent
//              .patch(`${domainName}/follow/album/un/${album}`)
//              .type('application/json')
//              .send({id: valid_id})
//              .then(res => {
//                  console.log("RECEIVED RESPONSE");
//                  response = { ...res };
//              })
//              .catch(err => {
//                  console.log("RECEIVED ERROR");
//                  console.log(err.message);
//              });
//          });
         
//          it("Status 200", (done) => {
//              expect(response.status).toBe(200);
//             done();
//          });
//      });
//    });


//    //-----------------------------------------------Follow track------------------------------------------------------//
//    describe("GET /follow/track", () => 
//    {
//      describe("using a valid id", () => 
//      {
//          let response;
//          beforeAll(() => {
//          return superagent
//              .patch(`${domainName}/follow/track/${track}`)
//              .type('application/json')
//              .send({id: valid_id})
//              .then(res => {
//                  console.log("RECEIVED RESPONSE");
//                  response = { ...res };
//              })
//              .catch(err => {
//                  console.log("RECEIVED ERROR");
//                  console.log(err.message);
//              });
//          });
         
//          it("Status 200", (done) => {
//              expect(response.status).toBe(200);
//             done();
//          });
//      });
//   });


         //-----------------------------------------------unFollow track------------------------------------------------------//
//    describe("GET /follow/track/un", () => 
//    {
//      describe("using a valid id", () => 
//      {
//          let response;
//          beforeAll(() => {
//          return superagent
//              .patch(`${domainName}/follow/track/un/${track}`)
//              .type('application/json')
//              .send({id: valid_id})
//              .then(res => {
//                  console.log("RECEIVED RESPONSE");
//                  response = { ...res };
//              })
//              .catch(err => {
//                  console.log("RECEIVED ERROR");
//                  console.log(err.message);
//              });
//          });
         
//          it("Status 200", (done) => {
//              expect(response.status).toBe(200);
//             done();
//          });
//      });
// });



//  const superagent = require("superagent");
//  const domainName = `http://localhost:${process.env.PORT}/api/v1`;
//  require("./../src/index.js");

//  var valid_id="5e877b8fae42032b7c867feb";


 
//   describe("GET /artists/:id", () => 
//   {
//     describe("using a valid id", () => 
//     {
//         let response;
//         beforeAll(() => {
//         return superagent
//             .get(`${domainName}/artists/${valid_id}`)
//             .type('application/json')
//             .then(res => {
//                 console.log("RECEIVED RESPONSE");
//                 response = { ...res };
//             })
//             .catch(err => {
//                 console.log("RECEIVED ERROR");
//                 console.log(err.message);
//             });
//         });
//         it("Status 200", (done) => {
//             expect(response.status).toBe(200);
//             //expect(response.body.data.artist._id).toEqual(valid_id);
//             //expect(response.body.data.artist.name).toMatch("/Artist/");
//            done();
//         });
//     });
//    });

//  //---------------------------------------------  /artists/{id}/albums
//  describe("GET /artists/:id/albums", () => 
//  {
//    describe("using a valid id", () => 
//    {
//        let response;
//        beforeAll(() => {
//        return superagent
//            .get(`${domainName}/artists/${valid_id}/albums`)
//            .type('application/json')
//            .then(res => {
//                console.log("RECEIVED RESPONSE");
//                response = { ...res };
//            })
//            .catch(err => {
//                console.log("RECEIVED ERROR");
//                console.log(err.message);
//            });
//        });
//        it("Status 200", (done) => {
//            expect(response.status).toEqual(200);
//           done();
//        });
//    });
//   });

//   //------------------------/artists/{id}/top-tracks.................................

//   describe("GET /artists/:id/top-tracks", () => 
//   {
//     describe("using a valid id", () => 
//     {
//         let response;
//         beforeAll(() => {
//         return superagent
//             .get(`${domainName}/artists/${valid_id}/top-tracks`)
//             .type('application/json')
//             .then(res => {
//                 console.log("RECEIVED RESPONSE");
//                 response = { ...res };
//             })
//             .catch(err => {
//                 console.log("RECEIVED ERROR");
//                 console.log(err.message);
//             });
//         });
//         it("Status 200", (done) => {
//             expect(response.status).toBe(200);
//            done();
//         });
//     });
//    });

//    //----------------------------------------/artists/{id}/related-artists
//    describe("GET /artists/:id/related-artists", () => 
//    {
//      describe("using a valid id", () => 
//      {
//          let response;
//          beforeAll(() => {
//          return superagent
//              .get(`${domainName}/artists/${valid_id}/related-artists`)
//              .type('application/json')
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
//     });

//     //-------------------------------------/artists--------------------------

//     describe("GET /artists", () => 
//     {
//       describe("", () => 
//       {
//           let response;
//           beforeAll(() => {
//           return superagent
//               .get(`${domainName}/artists`)
//               .type('application/json')
//               .then(res => {
//                   console.log("RECEIVED RESPONSE");
//                   response = { ...res };
//               })
//               .catch(err => {
//                   console.log("RECEIVED ERROR");
//                   console.log(err.message);
//               });
//           });
//           it("Status 200", (done) => {
//               expect(response.status).toBe(200);
//              done();
//           });
//       });
//      });
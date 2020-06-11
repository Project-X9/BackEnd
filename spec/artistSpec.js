 const superagent = require("superagent");
 const mongoose = require("../src/db/mongoose");
 const domainName = `http://localhost:${process.env.PORT}/api/v1`;
 require("./../src/index.js");

 var user_id_valid="5e9288731eafc70e082b8046";
 var track_id_valid;
 var user_id_invalid= "2345trvt654yf5678765";
 var artist_id_invalid = "23456utgbnjutre345tr";
 var artist_id_valid = "34rdr4rft6yy7uji90ok0";
 var track_id_valid ;
 var track_id_invalid ="w45tfft5tgy67yhgyu7yuhju";

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
//-----------------------------------------------------------------------------------------

//      describe ("GET /getTopArtists", ()=>{
//          let response;
//          beforeAll((done) => {
//             superagent
//             .get(`${domainName}/getTopArtists`)
//             .send({perpage: 10,
//             page: 1})
//             .then((res) => {
//               response = { ...res };
//               done();
//             });
//           });

            
//        it("Status 200", () => {
//       expect(response.status).toBe(200);
//     });
//   });
  
//   describe(" PATCH ADDTRACK /artists/:id/addTrack/:trackid", () => 
//   {
//     describe("valid id", () => 
//     {
//         let response;
//         beforeAll((done) => {
//         return superagent
//             .patch(`${domainName}/artists/:id${artist_id_valid}/addTrack/:trackid${track_id_valid}`)
//             .type('application/json')
//             .then((res) => {
//                 response = { ...res };
//                 done();
//             })
//             .catch((err) => {
//               response = err;
//               done();
//             });
//         });
//         it("Status 200", (done) => {
//           expect(response.status).toBe(200);
        
//           done();
//         });
//     });
//     describe("invalid artist id", () => 
//   {
//       let response;
//       beforeAll((done) => {
//       return superagent
//       .patch(`${domainName}/artists/:id${artist_id_invalid}/addTrack/:trackid${track_id_valid}`)
//       .type('application/json')
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
//   describe("invalid track id", () => 
//   {
//       let response;
//       beforeAll((done) => {
//       return superagent
//       .patch(`${domainName}/artists/:id${artist_id_valid}/addTrack/:trackid${track_id_invalid}`)
//       .type('application/json')
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



//  describe(" PATCH ADDARTIST /addArtist/:id", () => 
//  {
//    describe("valid id and not artist yet", () => 
//    {
//        let response;
//        beforeAll((done) => {
//        return superagent
//            .patch(`${domainName}/addArtist/:id${user_id_valid}`)
//            .type('application/json')
//            .then((res) => {
//                response = { ...res };
//                done();
//            })
//            .catch((err) => {
//              response = err;
//              done();
//            });
//        });
//        it("Status 200", (done) => {
//          expect(response.status).toBe(200);
       
//          done();
//        });
//     });
//        describe("valid id but is an artist", () => 
//    {
//        let response;
//        beforeAll((done) => {
//        return superagent
//            .patch(`${domainName}/addArtist/:id${user_id_valid}`)
//            .type('application/json')
//            .then((res) => {
//                response = { ...res };
//                done();
//            })
//            .catch((err) => {
//              response = err;
//              done();
//            });
//        });
//        it("Status 403", (done) => {
//          expect(response.status).toBe(403);
       
//          done();
//        });
//    });
// });


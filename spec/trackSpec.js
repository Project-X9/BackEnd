const superagent = require("superagent");
 const mongoose = require("../src/db/mongoose");
 const domainName = `http://localhost:${process.env.PORT}/api/v1`;
 require("./../src/index.js");


// var valid_id1="5e86459124471028e4d3539b";
// var valid_id2 ="5e8cf03d7d231c3bec30c4de";

//   describe("GET /track/getTracksByGenresid/:id", () => 
//   {
//     var  id= "5e89f67c47f4092a9080d94b";
//     describe("valid id", () => 
//     {
        
//         let response;
//         beforeAll((done) => {
//         return superagent
//             .get(`${domainName}/track/getTracksByGenresid/${id}`)
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
//     var id_in="5e89f67c47f4092a9080d943";
    
//     describe("invalid id", () => 
//     {
//         let response;
//         beforeAll((done) => {
//         return superagent
//         .get(`${domainName}/track/getTracksByGenresid/${id_in}`)
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

//   describe("GET /tracks/:id", () => 
//   {
//     describe("using a valid id", () => 
//     {
//         let response;
//         beforeAll(() => {
//         return superagent
//             .get(`${domainName}/track/${valid_id}`)
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
//             //expect(response.body.data.tracks._id).toEqual(valid_id1);
//             //expect(response.body.data.tracks.name).toMatch("/song/");
//            done();
//         });
//     });
//    });


//   describe("GET /tracks", () => 
//   {
//     describe("", () => 
//     {
//         let response;
//         beforeAll(() => {
//         return superagent
//             .get(`${domainName}/tracks`)
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
//             done();
//         });
//     });
//    });



describe(" GET getTrackStats /getTrackStats/:trackid", () => 
  {
    describe("valid track id", () => 
    {
        let response;
        beforeAll((done) => {
        return superagent
            .get(`${domainName}/getTrackStats/:trackid${track_id_valid}`)
            .type('application/json')
            .then((res) => {
                response = { ...res };
                done();
            })
            .catch((err) => {
              response = err;
              done();
            });
        });
        it("Status 200", (done) => {
          expect(response.status).toBe(200);
        
          done();
        });
    });
    describe("invalid track id", () => 
  {
      let response;
      beforeAll((done) => {
      return superagent
      .get(`${domainName}/getTrackStats/:trackid${track_id_invalid}`)
      .type('application/json')
          .then((res) => {
              response = { ...res };
              done();
          })
          .catch((err) => {
            response = err;
            done();
          });
      });
      it("Status 404", (done) => {
        expect(response.status).toBe(404);
      
        done();
      });
  });
 });

 

describe(" PATCH Add track /uploadTrack", () => 
 {
  
       let response;
       beforeAll((done) => {
       return superagent
           .patch(`${domainName}/uploadTrack`)
           .type('application/json')
           .then((res) => {
               response = { ...res };
               done();
           })
           .catch((err) => {
             response = err;
             done();
           });
        });
       it("Status 200", (done) => {
         expect(response.status).toBe(200);
       
         done();
    });
});
